import { useState, useRef } from 'react'

/* ─────────────────────────────────────────
   Top Banner — "You have a new message"
   ───────────────────────────────────────── */
export function NewMessageBanner() {
    const [dismissed, setDismissed] = useState(false)

    const scrollToBottom = () => {
        const el = document.getElementById('new-message-section')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
        setDismissed(true)
    }

    if (dismissed) return null

    return (
        <div
            onClick={scrollToBottom}
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                cursor: 'pointer',
                animation: 'bannerSlideIn 0.8s ease forwards, bannerPulse 2s ease-in-out 1s infinite',
            }}
        >
            <style>
                {`
                @keyframes bannerSlideIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(-30px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes bannerPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,107,0.4); }
                    50% { box-shadow: 0 0 0 12px rgba(255,107,107,0); }
                }
                `}
            </style>
            <div style={{
                background: 'rgba(26, 26, 46, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,107,107,0.3)',
                borderRadius: '50px',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}>
                <span style={{
                    background: 'var(--netflix-red)',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'bannerPulse 1.5s ease-in-out infinite',
                }} />
                <span style={{
                    color: 'var(--cream)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.5px',
                }}>
                    New message from <span style={{ color: 'var(--blush-pink)' }}>Akarshit</span>
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--whisper-gray)' }}>↓</span>
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────
   Bottom Section — The Misdirection Reveal
   ───────────────────────────────────────── */
export function NewMessageReveal() {
    const [stage, setStage] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)

    const advance = () => {
        setStage((prev) => Math.min(prev + 1, 4))
    }

    const whatsappUrl = `https://wa.me/447440197477?text=${encodeURIComponent(
        "Hey Akarshit! So about that cold coffee with mom… 😄"
    )}`

    return (
        <section
            id="new-message-section"
            ref={sectionRef}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
                borderTop: '1px solid rgba(255,107,107,0.1)',
                background: 'linear-gradient(180deg, transparent 0%, rgba(26,26,46,0.5) 100%)',
            }}
        >
            <div style={{
                maxWidth: '550px',
                textAlign: 'center',
            }}>
                {/* Stage 0: The Hook */}
                <div style={{
                    animation: 'fadeInUp 0.8s ease forwards',
                    marginBottom: '40px',
                }}>
                    <p style={{
                        fontSize: '0.75rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: 'var(--netflix-red)',
                        marginBottom: '16px',
                        opacity: 0.6,
                    }}>
                        February 2026 Update
                    </p>

                    <h2 className="heading-display" style={{
                        color: 'var(--cream)',
                        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                        lineHeight: 1.3,
                        marginBottom: '32px',
                    }}>
                        I want to meet.
                    </h2>
                </div>

                {/* Stage 1: The Misdirect */}
                {stage === 0 && (
                    <div style={{ animation: 'fadeInUp 0.6s ease forwards' }}>
                        <button
                            onClick={advance}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'var(--whisper-gray)',
                                padding: '14px 36px',
                                borderRadius: '30px',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'var(--font-body)',
                                letterSpacing: '1px',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,107,107,0.4)'
                                e.currentTarget.style.color = 'var(--cream)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                e.currentTarget.style.color = 'var(--whisper-gray)'
                            }}
                        >
                            Wait, not really →
                        </button>
                    </div>
                )}

                {/* Stage 2: The Punchline */}
                {stage >= 1 && (
                    <div style={{
                        animation: stage === 1 ? 'fadeInUp 0.8s ease forwards' : undefined,
                    }}>
                        <p className="text-handwritten" style={{
                            color: 'var(--blush-pink)',
                            fontSize: '1.6rem',
                            marginBottom: '16px',
                            lineHeight: 1.6,
                        }}>
                            …not you, silly.
                        </p>
                        <p className="heading-display" style={{
                            color: 'var(--cream)',
                            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                            marginBottom: '24px',
                        }}>
                            Your mom. 😤
                        </p>
                    </div>
                )}

                {/* Stage 3: The Real Talk */}
                {stage >= 1 && stage < 2 && (
                    <div style={{ animation: 'fadeInUp 0.6s ease 0.4s forwards', opacity: 0, marginTop: '20px' }}>
                        <button
                            onClick={advance}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'var(--whisper-gray)',
                                padding: '14px 36px',
                                borderRadius: '30px',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'var(--font-body)',
                                letterSpacing: '1px',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,107,107,0.4)'
                                e.currentTarget.style.color = 'var(--cream)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                e.currentTarget.style.color = 'var(--whisper-gray)'
                            }}
                        >
                            Okay but seriously…? →
                        </button>
                    </div>
                )}

                {/* Stage 4: The Explanation */}
                {stage >= 2 && (
                    <div style={{
                        animation: stage === 2 ? 'fadeInUp 0.8s ease forwards' : undefined,
                        marginTop: '32px',
                    }}>
                        <p style={{
                            color: 'var(--whisper-gray)',
                            fontSize: '1rem',
                            lineHeight: 2,
                            fontFamily: 'var(--font-body)',
                            marginBottom: '24px',
                        }}>
                            Okay fine, you too. <span style={{ opacity: 0.5 }}>(maybe)</span>
                        </p>
                        <p style={{
                            color: 'var(--cream)',
                            fontSize: '1rem',
                            lineHeight: 2,
                            fontFamily: 'var(--font-body)',
                            marginBottom: '32px',
                        }}>
                            But genuinely — I miss talking to aunty.
                            <br />
                            The random cold coffees, the banter that would go on forever,
                            and those random gyaan sessions about mythology that I'd pretend
                            to know about but was secretly learning from.
                            <br /><br />
                            I know she's probably mad at me right now.
                            <br />
                            <span style={{ opacity: 0.6 }}>(Valid. Completely valid.)</span>
                            <br />
                            But that's exactly why I want to fix it.
                            <br /><br />
                            So here's the deal: one cold coffee.
                            <br />
                            You can supervise if you want. 😏
                        </p>
                    </div>
                )}

                {stage >= 2 && stage < 3 && (
                    <div style={{ animation: 'fadeInUp 0.6s ease 0.3s forwards', opacity: 0, marginTop: '20px' }}>
                        <button
                            onClick={advance}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'var(--whisper-gray)',
                                padding: '14px 36px',
                                borderRadius: '30px',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'var(--font-body)',
                                letterSpacing: '1px',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,107,107,0.4)'
                                e.currentTarget.style.color = 'var(--cream)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                e.currentTarget.style.color = 'var(--whisper-gray)'
                            }}
                        >
                            Hmm… →
                        </button>
                    </div>
                )}

                {/* Stage 5: The CTA */}
                {stage >= 3 && stage < 4 && (
                    <div style={{
                        animation: 'fadeInUp 0.8s ease forwards',
                        marginTop: '40px',
                    }}>
                        <p className="text-handwritten" style={{
                            color: 'var(--cream)',
                            fontSize: '1.3rem',
                            marginBottom: '32px',
                            lineHeight: 1.8,
                        }}>
                            So what do you say?
                        </p>

                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setStage(4)}
                                style={{
                                    background: 'var(--netflix-red)',
                                    color: '#fff',
                                    padding: '14px 36px',
                                    borderRadius: '30px',
                                    fontSize: '0.95rem',
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-body)',
                                    letterSpacing: '1px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 24px rgba(255,107,107,0.3)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,107,107,0.5)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,107,107,0.3)'
                                }}
                            >
                                Fine, one cold coffee 🧊
                            </a>
                            <button
                                onClick={advance}
                                style={{
                                    background: 'transparent',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: 'var(--whisper-gray)',
                                    padding: '14px 28px',
                                    borderRadius: '30px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--cream)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--whisper-gray)'
                                }}
                            >
                                You wish 🙄
                            </button>
                        </div>
                    </div>
                )}

                {/* Stage 5 (after "You wish") */}
                {stage >= 4 && (
                    <div style={{
                        animation: 'fadeInUp 0.8s ease forwards',
                        marginTop: '40px',
                    }}>
                        <p className="text-handwritten" style={{
                            color: 'var(--blush-pink)',
                            fontSize: '1.4rem',
                            lineHeight: 1.8,
                        }}>
                            Yeah… I do wish.
                        </p>
                        <p style={{
                            color: 'var(--whisper-gray)',
                            fontSize: '0.85rem',
                            marginTop: '16px',
                            fontFamily: 'var(--font-body)',
                        }}>
                            (The offer stands. No expiry date.)
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                marginTop: '24px',
                                color: 'var(--sunset-coral)',
                                fontSize: '0.8rem',
                                textDecoration: 'none',
                                borderBottom: '1px solid rgba(255,107,107,0.3)',
                                paddingBottom: '2px',
                                fontFamily: 'var(--font-body)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--sunset-coral)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,107,107,0.3)'
                            }}
                        >
                            Changed your mind? Text me →
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
