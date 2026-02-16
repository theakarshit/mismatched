import { Reveal, ChatBubble, HeroStat, QuoteBlock, Particles, SpotifyEmbed, PhotoCard, PhotoGallery, VideoEmbed } from '../components'
import { HiddenStar } from '../interactive'

export default function TheDrift() {
    return (
        <section className="section gradient-storm" id="the-drift">
            <Particles type="fireflies" count={8} />

            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--ice-lavender)',
                        marginBottom: '12px'
                    }}>
                        Act III · June – August 2025
                    </div>
                    <h2 className="heading-display heading-lg" style={{ color: 'var(--ice-lavender)' }}>
                        The Drift
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px' }}>
                        The warmth started cooling. Not suddenly — gradually, like a sunset
                        that takes so long you don't notice it's dark until it already is.
                        We went from 2,741 messages in November to 744 in June.
                        The math tells a story our words couldn't.
                    </p>
                </Reveal>

                {/* The most intense day */}
                <Reveal delay={1}>
                    <HeroStat
                        number="794"
                        label="messages on August 8th"
                        sub="Our most intense day. Ever. A fight that cracked everything open — or maybe just cracked everything."
                    />
                </Reveal>

                {/* Aug 8 fight scene */}
                <Reveal delay={2}>
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        border: '1px solid rgba(139, 157, 195, 0.15)',
                        borderRadius: '16px',
                        padding: '32px',
                        margin: '24px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--ice-lavender)', fontSize: '1.1rem', marginBottom: '16px' }}>
                            August 8, 10 PM — When it all boiled over:
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="You never showed the same level of trust and support to me. Never ever."
                                time="10:27 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="You're literally the worst !!! I trusted you sm mahajan"
                                time="10:26 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="I cant believe i chose you outta everyone to share my personal things"
                                time="10:25 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="Yes you shared your things, I put every ounce of mine to protect it. Now what about me?"
                                time="10:27 PM"
                                type="sent"
                            />
                        </div>
                        <div style={{ textAlign: 'center', margin: '24px 0 8px', padding: '16px', borderTop: '1px solid rgba(139, 157, 195, 0.1)' }}>
                            <p className="text-body text-muted" style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                                And by midnight, separately, both of us were breaking:
                            </p>
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="You"
                                message="My mom saw me crying"
                                time="11:55 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="I have been crying and no one knows."
                                time="11:56 PM"
                                type="sent"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* The longing messages — after it all */}
                <Reveal delay={2}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '28px',
                        margin: '24px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--ice-lavender)', fontSize: '1.1rem', marginBottom: '16px' }}>
                            October 8 — I sent her a video from Goa, reliving our memories. This is how she responded:
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="📹 [Video from Goa]"
                                time="Oct 8, 6:57 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="Emotional krdiyaa yaar"
                                time="Oct 8, 7:21 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="I miss goaaa and all the places we visited together"
                                time="Oct 8, 7:21 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="And trust me when i was w you everything was so simple and nice"
                                time="Oct 8, 7:22 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="Your presence made everything so easy and comfyyy"
                                time="Oct 8, 7:22 PM"
                                type="received"
                            />
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={3}>
                    <QuoteBlock
                        text='"No f tensions no rush… Thanks for giving me that"'
                        attribution="You, Aug 2025"
                    />
                </Reveal>

                {/* Monthly decline visual */}
                <Reveal>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '32px',
                        margin: '32px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--ice-lavender)', fontSize: '1.3rem', marginBottom: '20px', textAlign: 'center' }}>
                            📉 The numbers tell the story
                        </div>
                        {[
                            { month: 'Nov 2024', count: 2741, color: 'var(--sunset-coral)', width: '100%' },
                            { month: 'Dec 2024', count: 2073, color: 'var(--warm-amber)', width: '76%' },
                            { month: 'Jan 2025', count: 1924, color: 'var(--golden-hour)', width: '70%' },
                            { month: 'Feb 2025', count: 671, color: 'var(--deep-teal)', width: '24%' },
                            { month: 'Jun 2025', count: 744, color: 'var(--storm-blue)', width: '27%' },
                            { month: 'Aug 2025', count: 2063, color: 'var(--sunset-coral)', width: '75%' },
                        ].map((m, i) => (
                            <div key={i} style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>{m.month}</span>
                                    <span className="text-muted" style={{ fontSize: '0.8rem' }}>{m.count.toLocaleString()}</span>
                                </div>
                                <div style={{
                                    height: '6px',
                                    borderRadius: '3px',
                                    background: 'rgba(255,255,255,0.06)',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: m.width,
                                        background: m.color,
                                        borderRadius: '3px',
                                        transition: 'width 1.5s ease-out'
                                    }} />
                                </div>
                            </div>
                        ))}
                        <p className="text-muted" style={{ textAlign: 'center', marginTop: '16px', fontStyle: 'italic' }}>
                            From 2,741 → 671 → back to 2,063 → and then… silence.
                        </p>
                    </div>
                </Reveal>

                {/* 📸 June memories */}
                <Reveal>
                    <PhotoGallery columns={2}>
                        <PhotoCard
                            src="/images/vector/cocktail.png"
                            caption="Cocktails and that laugh"
                            date="June 5"
                        />
                        <PhotoCard
                            src="/images/vector/portrait.png"
                            caption="The version of you I remember"
                            date="June 9"
                        />
                    </PhotoGallery>
                </Reveal>

                {/* Jugraafiya — June 2025 */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <p className="text-handwritten" style={{ color: 'var(--ice-lavender)', marginBottom: '8px', fontSize: '1.2rem' }}>
                            June 2025 — we recorded this in the car, take after take ↓
                        </p>
                        <SpotifyEmbed trackId="2TYxwTH2HhL6OLVkZlsDLV" />
                    </div>
                </Reveal>

                {/* The car video */}
                <Reveal>
                    <VideoEmbed
                        src="/videos/IMG_3776_2.mp4"
                        caption="The recording session — June 2025"
                    />
                </Reveal>

                {/* By August... */}
                <Reveal>
                    <PhotoGallery columns={2}>
                        <PhotoCard
                            src="/images/IMG_4712_2.jpg"
                            caption="Summer drifting"
                            date="August 17"
                        />
                        <PhotoCard
                            src="/images/IMG_4720_2.jpg"
                            caption="Different places, same thoughts"
                            date="August 18"
                        />
                    </PhotoGallery>
                </Reveal>

                {/* Hidden Star 4 */}
                <HiddenStar id={4} style={{ position: 'absolute', bottom: '60px', right: '30px' }} />
            </div>
        </section>
    )
}
