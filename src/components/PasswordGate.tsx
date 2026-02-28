import { useState, useEffect } from 'react'

function ErrorScreen() {
    const [glitch, setGlitch] = useState(false)

    // Occasional glitch effect
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true)
            setTimeout(() => setGlitch(false), 150)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#0d0d0d',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 1.2s ease forwards',
        }}>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes glitch {
                    0%  { clip-path: inset(20% 0 50% 0); transform: translate(-4px, 0); }
                    20% { clip-path: inset(60% 0 10% 0); transform: translate(4px, 0); }
                    40% { clip-path: inset(30% 0 70% 0); transform: translate(-2px, 0); }
                    60% { clip-path: inset(80% 0 5% 0);  transform: translate(2px, 0); }
                    80% { clip-path: inset(10% 0 40% 0); transform: translate(-3px, 0); }
                    100%{ clip-path: inset(0% 0 0% 0);   transform: translate(0, 0); }
                }
                .glitch-active::before {
                    content: attr(data-text);
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    color: #ff6b6b44;
                    animation: glitch 0.15s steps(2) infinite;
                }
            `}</style>

            <div style={{ maxWidth: '560px', width: '100%', fontFamily: 'monospace' }}>

                {/* Browser-style error bar */}
                <div style={{
                    background: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    borderRadius: '8px 8px 0 0',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                        <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' }} />
                    ))}
                    <span style={{
                        flex: 1,
                        background: '#111',
                        border: '1px solid #333',
                        borderRadius: '4px',
                        padding: '4px 12px',
                        fontSize: '0.72rem',
                        color: '#555',
                        marginLeft: '8px',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}>
                        mismatched-for-harshika.vercel.app
                    </span>
                </div>

                {/* Error body */}
                <div style={{
                    background: '#111',
                    border: '1px solid #2a2a2a',
                    borderTop: 'none',
                    borderRadius: '0 0 8px 8px',
                    padding: '48px 40px',
                    position: 'relative',
                }}>
                    {/* Error code */}
                    <p style={{
                        fontSize: '0.7rem',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: '#555',
                        marginBottom: '12px',
                    }}>
                        ERR_MEMORY_UNAVAILABLE
                    </p>

                    {/* Big 404 */}
                    <div
                        data-text="404"
                        className={glitch ? 'glitch-active' : ''}
                        style={{
                            position: 'relative',
                            fontSize: 'clamp(4rem, 15vw, 7rem)',
                            fontWeight: 700,
                            color: '#222',
                            lineHeight: 1,
                            marginBottom: '24px',
                            letterSpacing: '-4px',
                        }}
                    >
                        404
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                        color: '#e8e8e8',
                        fontWeight: 500,
                        marginBottom: '8px',
                        letterSpacing: '-0.5px',
                    }}>
                        Memory Not Found
                    </h1>

                    {/* Divider */}
                    <div style={{ width: '40px', height: '1px', background: '#333', margin: '24px 0' }} />

                    {/* Poetic body */}
                    <p style={{
                        color: '#666',
                        fontSize: '0.9rem',
                        lineHeight: 2,
                        marginBottom: '16px',
                    }}>
                        The page you're looking for has been removed.
                        <br />
                        Or maybe it was never meant to stay.
                    </p>

                    <p style={{
                        color: '#444',
                        fontSize: '0.85rem',
                        lineHeight: 2,
                        marginBottom: '32px',
                        fontStyle: 'italic',
                    }}>
                        Some things exist only for a moment —
                        in a message at 2am, a photo you didn't know was being taken,
                        15,025 reasons that didn't quite add up.
                    </p>

                    <p style={{
                        color: '#555',
                        fontSize: '0.82rem',
                        lineHeight: 2,
                    }}>
                        These memories haven't been deleted.
                        <br />
                        Just archived. Somewhere only one person can find them.
                    </p>

                    <p style={{
                        color: '#3a3a3a',
                        fontSize: '0.78rem',
                        marginTop: '12px',
                        fontStyle: 'italic',
                    }}>
                        (You already know where.)
                    </p>

                    {/* Terminal-style footer */}
                    <div style={{
                        marginTop: '48px',
                        padding: '12px 16px',
                        background: '#0a0a0a',
                        borderRadius: '6px',
                        border: '1px solid #1e1e1e',
                    }}>
                        <p style={{
                            color: '#2a2a2a',
                            fontSize: '0.7rem',
                            fontFamily: 'monospace',
                            margin: 0,
                        }}>
                            $ request_id: MIS-2024-H ·{' '}
                            <span style={{ color: '#1a3a1a' }}>status: archived</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
    const [stage, setStage] = useState<'locked' | 'error-screen'>('locked')
    const [input, setInput] = useState('')
    const [wrongPassword, setWrongPassword] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault()
        if (input === 'Harshika09') {
            // Correct password → show the error screen (site is private)
            setIsTransitioning(true)
            setTimeout(() => {
                setStage('error-screen')
            }, 600)
        } else {
            setWrongPassword(true)
            setTimeout(() => setWrongPassword(false), 500)
        }
    }

    if (stage === 'error-screen') {
        return <ErrorScreen />
    }

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.6s ease-in-out',
            opacity: isTransitioning ? 0 : 1,
            pointerEvents: isTransitioning ? 'none' : 'auto',
        }}>
            <div style={{
                textAlign: 'center',
                padding: '20px',
                animation: wrongPassword ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : 'fadeInUp 1s ease'
            }}>
                <style>{`
                    @keyframes shake {
                        10%, 90% { transform: translate3d(-1px, 0, 0); }
                        20%, 80% { transform: translate3d(2px, 0, 0); }
                        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                        40%, 60% { transform: translate3d(4px, 0, 0); }
                    }
                `}</style>

                <div style={{
                    marginBottom: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px'
                }}>
                    <span style={{
                        fontSize: '0.9rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--netflix-red)',
                        fontFamily: 'var(--font-body)',
                        opacity: 0.8
                    }}>
                        Restricted Access
                    </span>
                    <h1 className="heading-display" style={{
                        color: 'var(--cream)',
                        fontSize: '2.5rem',
                        textShadow: '0 0 20px rgba(255,107,107,0.3)'
                    }}>
                        Mismatched
                    </h1>
                </div>

                <form onSubmit={handleUnlock} style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                    <input
                        type="password"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter password..."
                        style={{
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '2px solid rgba(255,255,255,0.2)',
                            padding: '12px 16px',
                            color: 'var(--cream)',
                            fontSize: '1.2rem',
                            width: '280px',
                            textAlign: 'center',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-body)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--netflix-red)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />

                    <button
                        type="submit"
                        style={{
                            background: 'transparent',
                            border: '1px solid var(--netflix-red)',
                            color: 'var(--netflix-red)',
                            padding: '12px 32px',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--netflix-red)'
                            e.currentTarget.style.color = '#fff'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = 'var(--netflix-red)'
                        }}
                    >
                        Unlock
                    </button>
                </form>

                {wrongPassword && (
                    <p style={{
                        color: 'var(--netflix-red)',
                        marginTop: '20px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                    }}>
                        Incorrect password
                    </p>
                )}
            </div>
        </div>
    )
}
