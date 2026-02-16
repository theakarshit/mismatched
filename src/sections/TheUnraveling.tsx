import { Reveal, ChatBubble, QuoteBlock, SpotifyEmbed, PhotoCard, PhotoGallery } from '../components'
import { HiddenStar } from '../interactive'

export default function TheUnraveling() {
    return (
        <section className="section gradient-sunset" id="the-unraveling">
            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--muted-coral)',
                        marginBottom: '12px'
                    }}>
                        Act IV · September – October 2025
                    </div>
                    <h2 className="heading-display heading-lg" style={{ color: 'var(--muted-coral)' }}>
                        The Unraveling
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px' }}>
                        Some things don't break — they unravel. Thread by thread,
                        conversation by conversation, until you're holding nothing
                        but the memory of what it used to be.
                    </p>
                </Reveal>

                {/* The breakup exchange */}
                <Reveal delay={1}>
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(201, 117, 107, 0.2)',
                        borderRadius: '16px',
                        padding: '32px',
                        margin: '24px 0'
                    }}>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="It ends here. I gave my best, you gave excuses."
                                time="Sep 29, 11:47 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="you will always play an imp role in my life"
                                time="Sep 29, 11:52 PM"
                                type="received"
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={2}>
                    <div className="chat-container" style={{ margin: '32px 0' }}>
                        <ChatBubble
                            sender="You"
                            message="I NEEDED TO GET OUTTA THIS LOOP"
                            time="Oct 22, 2:15 AM"
                            type="received"
                        />
                        <ChatBubble
                            sender="You"
                            message="I got proposed and I said yes… I wanted peace"
                            time="Oct 22, 2:18 AM"
                            type="received"
                        />
                        <ChatBubble
                            sender="Akarshit"
                            message="Both of us were options."
                            time="Oct 22, 2:22 AM"
                            type="sent"
                        />
                    </div>
                </Reveal>

                <Reveal delay={3}>
                    <QuoteBlock
                        text='"When I was w you everything was so simple and nice… your presence made everything so easy and comfyyy"'
                        attribution="You — remembering what we lost"
                    />
                </Reveal>

                {/* The painful truth */}
                <Reveal>
                    <div style={{
                        textAlign: 'center',
                        padding: '40px 24px',
                        margin: '32px 0'
                    }}>
                        <p className="text-handwritten" style={{
                            color: 'var(--cream)',
                            fontSize: '1.6rem',
                            lineHeight: 1.8,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            The tragedy wasn't that we stopped caring.
                            <br />
                            It's that we cared <span style={{ color: 'var(--sunset-coral)' }}>differently</span>.
                            <br /><br />
                            You said "miss" <span style={{ color: 'var(--sunset-coral)' }}>27 times</span>.
                            <br />
                            I said it <span style={{ color: 'var(--whisper-gray)' }}>4 times — none of them emotional</span>.
                            <br /><br />
                            But I built you a website that made you cry.
                        </p>
                    </div>
                </Reveal>

                {/* 📸 One of the last photos */}
                <Reveal>
                    <PhotoCard
                        src="/images/vector/purple_flowers.png"
                        caption="Purple flowers, Bangalore nights"
                        date="August 26"
                    />
                </Reveal>

                {/* Rasiya Reprise — the ache */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <p className="text-handwritten" style={{ color: 'var(--muted-coral)', marginBottom: '8px', fontSize: '1.2rem' }}>
                            The one we played on repeat — every drive, every night ↓
                        </p>
                        <SpotifyEmbed trackId="3f9dNrQR4stx9CCfpqZVSf" />
                    </div>
                </Reveal>

                {/* Hidden Star 5 */}
                <HiddenStar id={5} style={{ position: 'absolute', top: '30%', left: '10px' }} />
            </div>
        </section>
    )
}
