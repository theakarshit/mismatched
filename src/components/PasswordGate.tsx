import { useState, useEffect } from 'react'

export function PasswordGate({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [isUnlocking, setIsUnlocking] = useState(false)

    useEffect(() => {
        const auth = sessionStorage.getItem('mismatched_auth')
        if (auth === 'true') {
            setIsAuthenticated(true)
        }
    }, [])

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault()
        if (input === 'Harshika09') {
            setIsUnlocking(true)
            setTimeout(() => {
                sessionStorage.setItem('mismatched_auth', 'true')
                setIsAuthenticated(true)
            }, 800) // Match animation duration
        } else {
            setError(true)
            setTimeout(() => setError(false), 500)
        }
    }

    if (isAuthenticated) {
        return <>{children}</>
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
            transition: 'opacity 0.8s ease-in-out',
            opacity: isUnlocking ? 0 : 1,
            pointerEvents: isUnlocking ? 'none' : 'auto',
        }}>
            <div style={{
                textAlign: 'center',
                padding: '20px',
                animation: error ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : 'fadeInUp 1s ease'
            }}>
                <style>
                    {`
                    @keyframes shake {
                        10%, 90% { transform: translate3d(-1px, 0, 0); }
                        20%, 80% { transform: translate3d(2px, 0, 0); }
                        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                        40%, 60% { transform: translate3d(4px, 0, 0); }
                    }
                    `}
                </style>

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
                    <div style={{ position: 'relative' }}>
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
                    </div>

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

                {error && (
                    <p style={{
                        color: 'var(--netflix-red)',
                        marginTop: '20px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        animation: 'fadeIn 0.3s ease'
                    }}>
                        Incorrect password
                    </p>
                )}
            </div>
        </div>
    )
}
