import { useState, useEffect, useRef, useCallback } from 'react'

/* ========================================
   SESSION TRACKER — records her journey
   ======================================== */

interface SessionEvent {
    ts: number
    type: 'scroll' | 'section' | 'star_found' | 'message_picked' | 'letter_viewed' | 'reply' | 'click'
    data: string
}

const SESSION_KEY = 'mismatched_session'

function getSession(): SessionEvent[] {
    try {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || '[]')
    } catch { return [] }
}

function logEvent(type: SessionEvent['type'], data: string) {
    const events = getSession()
    events.push({ ts: Date.now(), type, data })
    localStorage.setItem(SESSION_KEY, JSON.stringify(events))
    // Also fire to webhook if configured
    try {
        const WEBHOOK = (window as any).__MISMATCHED_WEBHOOK
        if (WEBHOOK) {
            navigator.sendBeacon(WEBHOOK, JSON.stringify({ ts: Date.now(), type, data }))
        }
    } catch { /* ignore */ }
}

export function useSessionTracker() {
    useEffect(() => {
        // Track which sections are viewed and for how long
        const sections = document.querySelectorAll('section[id]')
        const sectionTimes: Record<string, number> = {}
        let currentSection = ''

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.id
                if (entry.isIntersecting) {
                    if (currentSection !== id) {
                        // Log previous section time
                        if (currentSection && sectionTimes[currentSection]) {
                            const spent = Date.now() - sectionTimes[currentSection]
                            logEvent('section', `${currentSection}:${Math.round(spent / 1000)}s`)
                        }
                        currentSection = id
                        sectionTimes[id] = Date.now()
                        logEvent('scroll', `entered:${id}`)
                    }
                }
            })
        }, { threshold: 0.3 })

        sections.forEach(s => observer.observe(s))

        // Track scroll depth
        let maxScroll = 0
        const handleScroll = () => {
            const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
            if (pct > maxScroll) {
                maxScroll = pct
                if (pct % 25 === 0 && pct > 0) {
                    logEvent('scroll', `depth:${pct}%`)
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
            // Log final section time
            if (currentSection && sectionTimes[currentSection]) {
                const spent = Date.now() - sectionTimes[currentSection]
                logEvent('section', `${currentSection}:${Math.round(spent / 1000)}s`)
            }
        }
    }, [])
}


/* ========================================
   HIDDEN STARS — scavenger hunt
   ======================================== */

const STARS_KEY = 'mismatched_stars'
const TOTAL_STARS = 7

const STAR_SECRETS: Record<number, { emoji: string; text: string }> = {
    1: { emoji: '💫', text: '"Hi Harshika, Akarshit here." — The first ever message. 19 September 2024.' },
    2: { emoji: '🌙', text: '"So.. are you gonna call?" — How every late night began.' },
    3: { emoji: '✈️', text: 'London → Goa → Bangalore → Jaipur — We covered 12,000km together.' },
    4: { emoji: '🎵', text: '"Kahaan Ho Tum" — The song that played when everything changed.' },
    5: { emoji: '📱', text: '5,900 messages were sent between midnight and 4am. That was our time.' },
    6: { emoji: '🌸', text: 'She said "miss" 27 times. He said it 4 times. But he meant it every second.' },
    7: { emoji: '💌', text: '"I hope you see the answer to it one day by yourself." — Her last real words.' },
}

function getFoundStars(): number[] {
    try {
        return JSON.parse(localStorage.getItem(STARS_KEY) || '[]')
    } catch { return [] }
}

function saveStar(id: number) {
    const found = getFoundStars()
    if (!found.includes(id)) {
        found.push(id)
        localStorage.setItem(STARS_KEY, JSON.stringify(found))
        logEvent('star_found', `star_${id}:${found.length}/${TOTAL_STARS}`)
    }
    return found
}

// Progress bar that shows at the top
export function StarProgress() {
    const [found, setFound] = useState<number[]>([])

    useEffect(() => {
        const check = () => setFound(getFoundStars())
        check()
        window.addEventListener('star-found', check)
        return () => window.removeEventListener('star-found', check)
    }, [])

    if (found.length === 0) return null

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '8px 16px',
            background: 'linear-gradient(135deg, rgba(15,10,25,0.95), rgba(30,15,40,0.95))',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 107, 107, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.5s ease'
        }}>
            {Array.from({ length: TOTAL_STARS }, (_, i) => (
                <span key={i} style={{
                    fontSize: '1rem',
                    opacity: found.includes(i + 1) ? 1 : 0.2,
                    transition: 'all 0.5s ease',
                    transform: found.includes(i + 1) ? 'scale(1.2)' : 'scale(0.8)',
                    filter: found.includes(i + 1) ? 'drop-shadow(0 0 6px rgba(255,215,61,0.8))' : 'none'
                }}>
                    ★
                </span>
            ))}
            <span style={{
                fontSize: '0.65rem',
                color: 'var(--whisper-gray)',
                marginLeft: '8px',
                letterSpacing: '1px'
            }}>
                {found.length}/{TOTAL_STARS}
            </span>
            {found.length === TOTAL_STARS && (
                <span style={{
                    fontSize: '0.6rem',
                    color: 'var(--sunset-coral)',
                    marginLeft: '4px',
                    animation: 'pulse 2s infinite'
                }}>
                    ✦ all found
                </span>
            )}
        </div>
    )
}

// Individual hidden star component 
export function HiddenStar({ id, style }: { id: number; style?: React.CSSProperties }) {
    const [revealed, setRevealed] = useState(false)
    const [alreadyFound, setAlreadyFound] = useState(false)

    useEffect(() => {
        setAlreadyFound(getFoundStars().includes(id))
    }, [id])

    const handleClick = () => {
        if (alreadyFound) return
        const found = saveStar(id)
        setRevealed(true)
        setAlreadyFound(true)
        window.dispatchEvent(new Event('star-found'))

        // Check if all found
        if (found.length === TOTAL_STARS) {
            setTimeout(() => {
                window.dispatchEvent(new Event('all-stars-found'))
            }, 2000)
        }
    }

    const secret = STAR_SECRETS[id]

    return (
        <div style={{ position: 'relative', display: 'inline-block', ...style }}>
            <button
                onClick={handleClick}
                aria-label="Hidden star"
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: alreadyFound ? 'default' : 'pointer',
                    padding: '4px',
                    fontSize: '0.9rem',
                    opacity: alreadyFound ? 0.8 : 0.15,
                    transition: 'all 0.3s ease',
                    filter: alreadyFound ? 'drop-shadow(0 0 8px rgba(255,215,61,0.6))' : 'none',
                    color: alreadyFound ? '#FFD73D' : 'rgba(255,255,255,0.3)',
                }}
                onMouseEnter={(e) => {
                    if (!alreadyFound) (e.target as HTMLElement).style.opacity = '0.6'
                }}
                onMouseLeave={(e) => {
                    if (!alreadyFound) (e.target as HTMLElement).style.opacity = '0.15'
                }}
            >
                ★
            </button>

            {revealed && secret && (
                <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(15,10,25,0.95)',
                    border: '1px solid rgba(255, 215, 61, 0.3)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    minWidth: '260px',
                    maxWidth: '320px',
                    zIndex: 999,
                    animation: 'fadeInUp 0.5s ease',
                    marginBottom: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{secret.emoji}</div>
                    <p style={{
                        color: 'var(--cream)',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        {secret.text}
                    </p>
                </div>
            )}
        </div>
    )
}


/* ========================================
   MESSAGE MACHINE — pick a number, see the message
   ======================================== */

interface ChatMessage {
    id: number
    d: string
    t: string
    w: 'him' | 'her'
    m: string
}

interface MessagesData {
    total: number
    messages: ChatMessage[]
    golden: number[]
}

export function MessageMachine() {
    const [data, setData] = useState<MessagesData | null>(null)
    const [input, setInput] = useState('')
    const [message, setMessage] = useState<ChatMessage | null>(null)
    const [isGolden, setIsGolden] = useState(false)
    const [isRevealing, setIsRevealing] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        fetch('/data/messages.json')
            .then(r => r.json())
            .then(d => setData(d))
            .catch(() => { })
    }, [])

    const reveal = useCallback(() => {
        if (!data || !input) return
        const num = parseInt(input)
        if (isNaN(num) || num < 1 || num > data.total) return

        setIsRevealing(true)
        logEvent('message_picked', `#${num}`)

        setTimeout(() => {
            const msg = data.messages[num - 1]
            setMessage(msg)
            setIsGolden(data.golden.includes(num))
            setIsRevealing(false)
        }, 800)
    }, [data, input])

    const pickRandom = useCallback(() => {
        if (!data) return
        const num = Math.floor(Math.random() * data.total) + 1
        setInput(String(num))
        setIsRevealing(true)
        logEvent('message_picked', `random:#${num}`)
        setTimeout(() => {
            const msg = data.messages[num - 1]
            setMessage(msg)
            setIsGolden(data.golden.includes(num))
            setIsRevealing(false)
        }, 800)
    }, [data])

    if (!data) return null

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.04), rgba(186, 147, 255, 0.04))',
            border: '1px solid rgba(255, 107, 107, 0.12)',
            borderRadius: '20px',
            padding: '40px 28px',
            textAlign: 'center',
            margin: '40px 0'
        }}>
            <p style={{
                fontSize: '0.7rem',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--whisper-gray)',
                marginBottom: '8px'
            }}>
                The Memory Machine
            </p>
            <p className="heading-display" style={{
                fontSize: '1.3rem',
                color: 'var(--cream)',
                marginBottom: '6px'
            }}>
                {data.total.toLocaleString()} messages. One number.
            </p>
            <p className="text-body" style={{
                fontSize: '0.85rem',
                color: 'var(--whisper-gray)',
                marginBottom: '28px',
                fontStyle: 'italic'
            }}>
                Pick any number and relive that exact moment.
            </p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap'
            }}>
                <input
                    ref={inputRef}
                    type="number"
                    min={1}
                    max={data.total}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && reveal()}
                    placeholder={`1 — ${data.total.toLocaleString()}`}
                    style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255, 107, 107, 0.25)',
                        borderRadius: '12px',
                        padding: '14px 20px',
                        color: 'var(--cream)',
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-display)',
                        width: '180px',
                        textAlign: 'center',
                        outline: 'none',
                    }}
                />
                <button
                    onClick={reveal}
                    style={{
                        background: 'linear-gradient(135deg, var(--sunset-coral), var(--blush-pink))',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '14px 28px',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        letterSpacing: '1px',
                    }}
                >
                    Reveal
                </button>
                <button
                    onClick={pickRandom}
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(186, 147, 255, 0.25)',
                        borderRadius: '12px',
                        padding: '14px 20px',
                        color: 'var(--soft-lavender)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                    }}
                >
                    🎲 Random
                </button>
            </div>

            {/* Message display */}
            {(message || isRevealing) && (
                <div style={{
                    marginTop: '28px',
                    padding: '24px',
                    background: isGolden
                        ? 'linear-gradient(135deg, rgba(255,215,61,0.08), rgba(255,107,107,0.08))'
                        : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isGolden ? 'rgba(255,215,61,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '16px',
                    animation: 'fadeInUp 0.5s ease',
                    position: 'relative'
                }}>
                    {isRevealing ? (
                        <div style={{
                            color: 'var(--whisper-gray)',
                            fontStyle: 'italic',
                            animation: 'pulse 1s infinite'
                        }}>
                            Finding that moment...
                        </div>
                    ) : message && (
                        <>
                            {isGolden && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '16px',
                                    fontSize: '0.65rem',
                                    background: 'linear-gradient(135deg, #FFD73D, #FF6B6B)',
                                    padding: '3px 10px',
                                    borderRadius: '8px',
                                    color: '#111',
                                    fontWeight: 700,
                                    letterSpacing: '1px'
                                }}>
                                    ✦ GOLDEN
                                </div>
                            )}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '12px',
                                fontSize: '0.75rem',
                                color: 'var(--whisper-gray)',
                                opacity: 0.6
                            }}>
                                <span>Message #{message.id.toLocaleString()}</span>
                                <span>{message.d} · {message.t}</span>
                            </div>
                            <p style={{
                                color: message.w === 'him' ? 'var(--soft-lavender)' : 'var(--blush-pink)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                marginBottom: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                {message.w === 'him' ? 'Akarshit' : 'Harshika'}
                            </p>
                            <p style={{
                                color: 'var(--cream)',
                                fontSize: '1.05rem',
                                lineHeight: 1.7,
                                fontStyle: 'italic',
                                margin: 0
                            }}>
                                "{message.m}"
                            </p>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}


/* ========================================
   UNSENT LETTER — appears subtly after full scroll
   ======================================== */

export function UnsentLetter() {
    const [visible, setVisible] = useState(false)
    const [opened, setOpened] = useState(false)
    const [hasSeenEnough, setHasSeenEnough] = useState(false)

    useEffect(() => {
        // Show only after she's scrolled past 85% of the page
        const handleScroll = () => {
            const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
            if (pct > 0.85 && !hasSeenEnough) {
                setHasSeenEnough(true)
                // Subtle delay before showing
                setTimeout(() => setVisible(true), 3000)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hasSeenEnough])

    if (!visible) return null

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 900,
            animation: 'fadeInUp 1s ease',
        }}>
            {!opened ? (
                <button
                    onClick={() => {
                        setOpened(true)
                        logEvent('letter_viewed', 'opened')
                    }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(20,12,35,0.95), rgba(30,18,50,0.95))',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,107,107,0.2)',
                        borderRadius: '16px',
                        padding: '16px 24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                            ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,107,0.4)'
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                            ; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,107,0.2)'
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                    <span style={{
                        color: 'var(--whisper-gray)',
                        fontSize: '0.8rem',
                        fontStyle: 'italic',
                        letterSpacing: '0.5px'
                    }}>
                        There's something you haven't read.
                    </span>
                </button>
            ) : (
                <div style={{
                    background: 'linear-gradient(135deg, rgba(15,10,25,0.98), rgba(25,15,40,0.98))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,107,107,0.15)',
                    borderRadius: '20px',
                    padding: '32px',
                    maxWidth: '380px',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    boxShadow: '0 16px 64px rgba(0,0,0,0.6)',
                    animation: 'fadeInUp 0.6s ease',
                }}>
                    <button
                        onClick={() => setOpened(false)}
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '16px',
                            background: 'none',
                            border: 'none',
                            color: 'var(--whisper-gray)',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            opacity: 0.5,
                        }}
                    >
                        ×
                    </button>

                    <p style={{
                        fontSize: '0.65rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--whisper-gray)',
                        marginBottom: '16px',
                        opacity: 0.5,
                        textAlign: 'center'
                    }}>
                        Unsent
                    </p>

                    <div className="text-handwritten" style={{
                        color: 'var(--cream)',
                        fontSize: '1rem',
                        lineHeight: 2,
                    }}>
                        <p>Harshika,</p>
                        <p style={{ marginTop: '12px' }}>
                            I don't know if you'll ever read this. But I needed to write it somewhere you might find it.
                        </p>
                        <p style={{ marginTop: '12px' }}>
                            This website isn't about getting you back. It's about making sure what we had doesn't just disappear into old chat threads and forgotten photo albums.
                        </p>
                        <p style={{ marginTop: '12px' }}>
                            14,292 messages. 970 calls. Every late-night conversation that made the next morning harder but so worth it.
                        </p>
                        <p style={{ marginTop: '12px' }}>
                            You were the best part of my 2024 and 2025. That's not nostalgia talking — the data literally proves it.
                        </p>
                        <p style={{ marginTop: '20px', color: 'var(--blush-pink)' }}>
                            — A.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
