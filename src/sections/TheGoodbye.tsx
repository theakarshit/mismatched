import { Reveal, ChatBubble, SpotifyEmbed, Particles } from '../components'
import { HiddenStar } from '../interactive'

export default function TheGoodbye() {
    return (
        <section className="section gradient-farewell" id="the-goodbye">
            <Particles type="fireflies" count={6} />

            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--whisper-gray)',
                        marginBottom: '12px'
                    }}>
                        Act V · November 2025 – January 2026
                    </div>
                    <h2 className="heading-display heading-lg" style={{ color: 'var(--blush-pink)' }}>
                        The Goodbye
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px' }}>
                        The hardest part wasn't the fighting. It was the quiet after.
                        When anger fades and all you're left with is the ache of something
                        that meant everything — and the terrifying realization that
                        you have to keep going without it.
                    </p>
                </Reveal>

                {/* Nov reconciliation */}
                <Reveal delay={1}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '28px',
                        margin: '24px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--whisper-gray)', fontSize: '1.1rem', marginBottom: '16px' }}>
                            November 26 — a month of silence, then this:
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="Just wanted to say thanks for all the good parts"
                                time="Nov 26, 7:12 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="That one year was really special, and I'll always adore it"
                                time="Nov 26, 7:18 PM"
                                type="received"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* The drunk goodbye — Jan 28 */}
                <Reveal delay={2}>
                    <div style={{
                        background: 'rgba(255, 181, 181, 0.04)',
                        border: '1px solid rgba(255, 181, 181, 0.1)',
                        borderRadius: '16px',
                        padding: '32px',
                        margin: '32px 0'
                    }}>
                        <div className="text-handwritten" style={{
                            color: 'var(--blush-pink)',
                            fontSize: '1.2rem',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            January 28, 1:00 AM — The last conversation
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="Why all of it ended this way? 😭"
                                time="1:02 AM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="Mistrust, non-alignment but we were good enough"
                                time="12:59 AM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="You are happy and satisfied and loved, right? Knowing that will help me erase them"
                                time="1:14 AM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="I am. :)"
                                time="1:16 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="Cool, I'm also happy then. Happy life to you then"
                                time="1:18 AM"
                                type="sent"
                            />
                        </div>

                        {/* The final exchange — big and centered */}
                        <div style={{
                            textAlign: 'center',
                            marginTop: '40px',
                            padding: '24px'
                        }}>
                            <p className="heading-display heading-md" style={{
                                color: 'var(--cream)',
                                marginBottom: '8px'
                            }}>
                                "Bbye, harshika!!"
                            </p>
                            <p className="heading-display heading-md" style={{
                                color: 'var(--whisper-gray)',
                                fontStyle: 'italic'
                            }}>
                                "Bbye"
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Moving Forward narrative */}
                <Reveal delay={3}>
                    <div className="moving-forward">
                        <h3 className="heading-display heading-md" style={{
                            color: 'var(--blush-pink)',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            Moving Forward
                        </h3>
                        <div className="text-body" style={{
                            maxWidth: '650px',
                            margin: '0 auto',
                            textAlign: 'center',
                            lineHeight: 2.2
                        }}>
                            <p>
                                Getting out of something like this isn't a decision you make once —
                                it's one you make every single day. Every morning you wake up and
                                choose not to text. Every night you resist the urge to call at 1am
                                because that's when we were most alive.
                            </p>
                            <br />
                            <p>
                                I wanted this to work. <em>Dearly</em>. More than I ever let her know.
                                I showed love through code and actions and grand gestures —
                                but I couldn't say <span style={{ color: 'var(--sunset-coral)' }}>"I miss you"</span> even once.
                                And she said it <span style={{ color: 'var(--sunset-coral)' }}>27 times</span>.
                            </p>
                            <br />
                            <p>
                                Some things don't fail because people stop caring.
                                They fail because the caring doesn't translate.
                                Different frequencies. Same signal.
                                <em> Mismatched.</em>
                            </p>
                            <br />
                            <p style={{ color: 'var(--cream)' }}>
                                So we move forward. Not because it's easy —
                                but because staying still hurts more.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Season 4 — maybe it's not over */}
                <Reveal delay={4}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.06), rgba(186, 147, 255, 0.06))',
                        border: '1px solid rgba(255, 107, 107, 0.15)',
                        borderRadius: '20px',
                        padding: '40px 32px',
                        margin: '48px 0',
                        textAlign: 'center'
                    }}>
                        <p className="text-body" style={{
                            color: 'var(--whisper-gray)',
                            fontSize: '0.75rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        }}>
                            Meanwhile, on Netflix...
                        </p>
                        <p className="heading-display" style={{
                            color: 'var(--sunset-coral)',
                            fontSize: '1.6rem',
                            marginBottom: '12px'
                        }}>
                            Mismatched Season 4 is coming.
                        </p>
                        <p className="text-handwritten" style={{
                            color: 'var(--lavender)',
                            fontSize: '1.3rem',
                            marginBottom: '20px'
                        }}>
                            The final season.
                        </p>
                        <p className="heading-display" style={{
                            color: 'var(--cream)',
                            fontSize: '1.8rem',
                            lineHeight: 1.4
                        }}>
                            Some stories are simply<br />
                            <span style={{ color: 'var(--blush-pink)' }}>meant to end.</span>
                            <span style={{
                                display: 'block',
                                fontSize: '1rem',
                                marginTop: '12px',
                                fontStyle: 'italic',
                                color: 'var(--whisper-gray)'
                            }}>
                                (or not — we don't know)
                            </span>
                        </p>
                    </div>
                </Reveal>

                {/* Kahaan Ho Tum — the question that started and ended it all */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <p className="text-handwritten text-lavender" style={{ marginBottom: '8px', fontSize: '1.2rem' }}>
                            The song that named this story ↓
                        </p>
                        <SpotifyEmbed trackId="6V7QyA9N0Zp7C6k8qsYfpm" />
                    </div>
                </Reveal>

                {/* Hidden Star 6 */}
                <HiddenStar id={6} style={{ position: 'absolute', bottom: '80px', left: '25px' }} />
            </div>
        </section>
    )
}
