import { Reveal, HeroStat, Particles } from '../components'
import { HiddenStar, MessageMachine } from '../interactive'

export default function KahaanHoTum() {
    return (
        <section className="section gradient-midnight" id="kahaan-ho-tum">
            <Particles type="stars" count={25} />

            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--whisper-gray)',
                        marginBottom: '12px',
                        textAlign: 'center'
                    }}>
                        The Mirror
                    </div>
                    <h2 className="text-hindi" style={{ marginBottom: '8px' }}>
                        कहाँ हो तुम?
                    </h2>
                    <p className="heading-display heading-md" style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: 'var(--whisper-gray)',
                        marginBottom: '48px'
                    }}>
                        Where are you?
                    </p>
                </Reveal>

                {/* The Mismatched Parallel Table */}
                <Reveal delay={1}>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Mismatched</th>
                                <th>Us</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rishi builds things for Dimple — grand gestures, letters, shows of love</td>
                                <td>I built her a website that made her cry, gave her my iPad, wrote her letters</td>
                            </tr>
                            <tr>
                                <td>Dimple says "I need space to breathe"</td>
                                <td>She said "I NEEDED TO GET OUTTA THIS LOOP"</td>
                            </tr>
                            <tr>
                                <td>They speak different love languages — actions vs. words</td>
                                <td>My gestures vs. her 27 "miss"es — same love, different frequencies</td>
                            </tr>
                            <tr>
                                <td>Rishi searches: <em>"Kahaan ho tum?"</em></td>
                                <td>She said: <em>"I hope you see the answer to it one day by yourself"</em></td>
                            </tr>
                            <tr>
                                <td>The show ends with hope — maybe someday</td>
                                <td>"Bbye, harshika!!" → "Bbye"</td>
                            </tr>
                        </tbody>
                    </table>
                </Reveal>

                {/* Final emotional stats */}
                <Reveal delay={2}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '16px',
                        margin: '48px 0',
                        textAlign: 'center'
                    }}>
                        {[
                            { num: '15,025', label: 'messages' },
                            { num: '16', label: 'months' },
                            { num: '970', label: 'calls' },
                            { num: '5,900', label: 'late-night messages' },
                            { num: '27', label: '"miss"es from her' },
                            { num: '4', label: '"miss"es from me' },
                        ].map((s, i) => (
                            <div key={i}>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.8rem',
                                    fontWeight: 700,
                                    color: 'var(--sunset-coral)'
                                }}>
                                    {s.num}
                                </div>
                                <div className="text-muted" style={{ fontSize: '0.8rem' }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Her final words */}
                <Reveal delay={3}>
                    <div style={{
                        textAlign: 'center',
                        padding: '40px 24px',
                        margin: '20px 0'
                    }}>
                        <p className="text-handwritten" style={{
                            color: 'var(--blush-pink)',
                            fontSize: '1.6rem',
                            lineHeight: 1.8,
                            maxWidth: '600px',
                            margin: '0 auto 32px'
                        }}>
                            "I hope you see the answer to it one day by yourself."
                        </p>
                        <p className="text-body text-muted" style={{ fontStyle: 'italic' }}>
                            Maybe this website is the answer. Maybe it isn't.
                            <br />
                            But at least now, it's written down somewhere.
                        </p>
                    </div>
                </Reveal>

                {/* Closing Hindi text */}
                <Reveal delay={4}>
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 24px 40px',
                        borderTop: '1px solid rgba(255, 107, 107, 0.1)',
                        marginTop: '40px'
                    }}>
                        <p className="text-hindi" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '12px' }}>
                            कुछ कहानियाँ ख़त्म नहीं होतीं — बस रुक जाती हैं।
                        </p>
                        <p className="text-body text-muted" style={{ fontStyle: 'italic', fontSize: '1rem' }}>
                            Some stories don't end — they just pause.
                        </p>
                    </div>
                </Reveal>

                {/* Credit */}
                <Reveal>
                    <div style={{
                        textAlign: 'center',
                        marginTop: '60px',
                        padding: '24px',
                        opacity: 0.4
                    }}>
                        <p style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
                            made with too many feelings and not enough sleep
                        </p>
                        <p style={{ fontSize: '0.65rem', marginTop: '8px', color: 'var(--whisper-gray)' }}>
                            inspired by Mismatched · built with love · 15,025 messages later
                        </p>
                    </div>
                </Reveal>

                {/* Message Machine — interactive memory picker */}
                <Reveal delay={5}>
                    <MessageMachine />
                </Reveal>

                {/* Hidden Star 7 — final secret */}
                <HiddenStar id={7} style={{ position: 'absolute', bottom: '20px', right: '50%' }} />
            </div>
        </section>
    )
}
