import { Reveal, Particles } from '../components'

export default function IntroSplash() {
    const scrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }

    return (
        <section className="section gradient-midnight" id="intro">
            <Particles type="fireflies" count={20} />

            <div className="section-content" style={{ textAlign: 'center' }}>
                {/* Netflix-style "M" watermark */}
                <Reveal>
                    <div style={{
                        fontSize: '0.75rem',
                        letterSpacing: '6px',
                        textTransform: 'uppercase',
                        color: 'var(--netflix-red)',
                        marginBottom: '40px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500
                    }}>
                        inspired by mismatched
                    </div>
                </Reveal>

                {/* Hindi Title */}
                <Reveal delay={1}>
                    <h1 className="text-hindi" style={{ marginBottom: '16px' }}>
                        कहाँ हो तुम?
                    </h1>
                </Reveal>

                <Reveal delay={2}>
                    <p className="heading-display heading-lg" style={{
                        color: 'var(--cream)',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        marginBottom: '48px'
                    }}>
                        Where are you?
                    </p>
                </Reveal>

                <Reveal delay={3}>
                    <p className="text-handwritten" style={{
                        maxWidth: '600px',
                        margin: '0 auto 60px',
                        color: 'var(--whisper-gray)',
                        lineHeight: 1.8
                    }}>
                        "Some stories don't have an ending. They just have a moment
                        where two people realize they were never quite in sync —
                        and that's what made it beautiful."
                    </p>
                </Reveal>

                {/* The emotional opener stat */}
                <Reveal delay={4}>
                    <div style={{ marginBottom: '40px' }}>
                        <div className="stat-hero-number" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
                            19,814
                        </div>
                        <div className="text-handwritten" style={{
                            color: 'var(--blush-pink)',
                            fontSize: '1.4rem',
                            marginTop: '8px'
                        }}>
                            messages between us
                        </div>
                        <div className="text-muted" style={{ marginTop: '8px' }}>
                            16 months · Sep 2024 – Jan 2026
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" onClick={scrollDown}>
                <span>scroll</span>
                <div className="scroll-arrow" />
            </div>
        </section>
    )
}
