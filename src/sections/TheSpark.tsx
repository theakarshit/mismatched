import { Reveal, ChatBubble, StatCard, QuoteBlock, SpotifyEmbed, Particles, PhotoCard, PhotoGallery, VideoEmbed } from '../components'
import { HiddenStar } from '../interactive'

export default function TheSpark() {
    return (
        <section className="section gradient-warm" id="the-spark">
            <Particles type="hearts" count={12} />

            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--warm-amber)',
                        marginBottom: '12px'
                    }}>
                        Act I · September – October 2024
                    </div>
                    <h2 className="heading-display heading-lg" style={{ color: 'var(--sunset-coral)' }}>
                        The Spark
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px' }}>
                        It started as an interview. A formal meeting for a Goa retreat
                        I was organizing through Leader's League. She showed up,
                        professional and confident — and somehow, within a month,
                        she wasn't just a team member. She was the person
                        I was texting at 3 AM.
                    </p>
                </Reveal>

                {/* The first message */}
                <Reveal delay={1}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '28px',
                        margin: '24px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--whisper-gray)', fontSize: '1.1rem', marginBottom: '16px' }}>
                            September 19, 2024 — The very first text:
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="Akarshit"
                                message="Hi Harshika, Akarshit here. We had a talk today at 2 pm."
                                time="Sep 19, 7:05 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="Hey!"
                                time="Sep 19, 7:05 PM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="So you will be coming at around 12 pm tomorrow, right?"
                                time="Sep 19, 7:06 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="Should I bring my laptop, or is this just an informal meeting to discuss further?"
                                time="Sep 19, 7:08 PM"
                                type="received"
                            />
                        </div>
                        <p className="text-muted" style={{ textAlign: 'center', marginTop: '16px', fontStyle: 'italic', fontSize: '0.85rem' }}>
                            That's it. That's how 15,025 messages started. A scheduling text.
                        </p>
                    </div>
                </Reveal>

                {/* Stats */}
                <Reveal delay={2}>
                    <div className="stat-grid">
                        <StatCard number="744" label="Messages on this number" sublabel="Sep – Oct 2024" />
                        <StatCard number="398" label="Were after midnight" sublabel="53% of all messages" />
                        <StatCard number="6" label='Times she called me "sir"' sublabel="from the very start" />
                    </div>
                </Reveal>

                {/* The Goa Retreat */}
                <Reveal delay={3}>
                    <div style={{
                        background: 'rgba(255, 167, 81, 0.05)',
                        border: '1px solid rgba(255, 167, 81, 0.12)',
                        borderRadius: '16px',
                        padding: '32px',
                        margin: '32px 0'
                    }}>
                        <h3 className="heading-display heading-md" style={{ color: 'var(--warm-amber)', marginBottom: '16px' }}>
                            The Goa Retreat
                        </h3>
                        <p className="text-body" style={{ marginBottom: '20px' }}>
                            October 2–6. What was supposed to be a professional retreat
                            became the place where everything shifted. Dancing in the rain,
                            pool moments nobody recorded, midnight conversations that had
                            nothing to do with work.
                        </p>
                        <div className="chat-container">
                            <ChatBubble
                                sender="You"
                                message="I regret not recording any videos while I was in the pool"
                                time="Oct 11, 12:18 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="And obviously us dancing in the rain"
                                time="Oct 11, 12:19 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="Instead of getting those weird flashbacks randomly... try to get flashbacks of you dancing in the rain. Enjoying that moment."
                                time="Oct 11, 12:20 AM"
                                type="sent"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* The flirty shift — Oct 12 */}
                <Reveal>
                    <div style={{
                        background: 'rgba(255, 181, 181, 0.04)',
                        border: '1px solid rgba(255, 181, 181, 0.1)',
                        borderRadius: '16px',
                        padding: '28px',
                        margin: '24px 0'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--blush-pink)', fontSize: '1.1rem', marginBottom: '16px', textAlign: 'center' }}>
                            October 12, 1:37 AM — Things shifted.
                        </div>
                        <div className="chat-container">
                            <ChatBubble
                                sender="You"
                                message="But i have felt everything"
                                time="1:39 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="You"
                                message="Every inch of you"
                                time="1:39 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message={'It\'s all about the "if" statement'}
                                time="1:44 AM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="You can change it ."
                                time="1:44 AM"
                                type="received"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* Mismatched + London + iPad */}
                <Reveal>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        padding: '28px',
                        margin: '24px 0'
                    }}>
                        <h3 className="heading-display heading-md" style={{ color: 'var(--warm-amber)', marginBottom: '16px' }}>
                            October 15 — The Day Everything Accelerated
                        </h3>
                        <p className="text-body" style={{ marginBottom: '20px' }}>
                            The day I left for London. I gave her my iPad, my sweatshirt,
                            my Starbucks card, and her bracelet back. She gave me movie
                            recommendations — Hasee Toh Phasee, Khoobsurat, and one show
                            in particular.
                        </p>
                        <div className="chat-container">
                            <ChatBubble
                                sender="You"
                                message="Make sure to give me your iPad and sweatshirt before you leave ;)"
                                time="Oct 15, 8:34 AM"
                                type="received"
                            />
                            <ChatBubble
                                sender="Akarshit"
                                message="Downloaded Mismatched season 1"
                                time="Oct 15, 11:30 PM"
                                type="sent"
                            />
                            <ChatBubble
                                sender="You"
                                message="Wow!! Impressive. Have fun sir"
                                time="Oct 15, 11:31 PM"
                                type="received"
                            />
                        </div>
                        <QuoteBlock
                            text="She told me to watch Mismatched. I didn't know then that we were about to live it."
                            attribution="— the irony"
                        />
                    </div>
                </Reveal>

                {/* 📸 Goa memories */}
                <Reveal>
                    <PhotoCard
                        src="/images/vector/goa_villa.png"
                        caption="The Goa villa — where it all started"
                        date="October 6, 2024"
                        hero
                    />
                </Reveal>

                <Reveal>
                    <PhotoGallery columns={2}>
                        <PhotoCard
                            src="/images/vector/car_selfie.png"
                            caption="Flying back from Goa"
                            date="October 9"
                        />
                        <VideoEmbed
                            src="/videos/IMG_3205_3.mp4"
                            caption="Goa, October 2024"
                        />
                    </PhotoGallery>
                </Reveal>

                {/* Raat Bhar — our late night anthem */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <p className="text-handwritten text-lavender" style={{ marginBottom: '8px', fontSize: '1.2rem' }}>
                            The night this played in Goa, everything changed ↓
                        </p>
                        <SpotifyEmbed trackId="3ctaMit7CuiHIPVYrRvm15" />
                    </div>
                </Reveal>

                {/* Metro candid */}
                <Reveal>
                    <PhotoCard
                        src="/images/vector/metro_candid.png"
                        caption="Delhi metro — the quiet moments"
                        date="October 25"
                    />
                </Reveal>

                {/* Transition to next number */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
                        <div className="chat-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <ChatBubble
                                sender="Akarshit"
                                message="And yeah, I will be mostly using WA on this number: +447440197477"
                                time="Oct 15, 6:41 PM"
                                type="sent"
                            />
                        </div>
                        <p className="text-muted" style={{ marginTop: '16px', fontStyle: 'italic', fontSize: '0.85rem' }}>
                            A new number. A new chapter. 19,070 more messages to go.
                        </p>
                    </div>
                </Reveal>

                {/* Hidden Star 2 */}
                <HiddenStar id={2} style={{ position: 'absolute', bottom: '40px', left: '20px' }} />
            </div>
        </section>
    )
}
