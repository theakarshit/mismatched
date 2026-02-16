import { Reveal, StatCard, TimelineItem, Particles, HeroStat, SpotifyEmbed, PhotoCard, PhotoGallery, VideoEmbed } from '../components'

export default function GoldenPeriod() {
    return (
        <section className="section gradient-golden" id="golden-period">
            <Particles type="stars" count={10} />

            <div className="section-content">
                <Reveal>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        textTransform: 'uppercase',
                        color: 'var(--golden-hour)',
                        marginBottom: '12px'
                    }}>
                        Act II · December 2024 – May 2025
                    </div>
                    <h2 className="heading-display heading-lg" style={{ color: 'var(--golden-hour)' }}>
                        The Golden Period
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px' }}>
                        Six months of being the most important person in each other's lives.
                        Every city we traveled to, every 3am call, every inside joke —
                        we were building something without ever naming it.
                    </p>
                </Reveal>

                {/* Emotional Stats */}
                <Reveal delay={1}>
                    <div className="stat-grid">
                        <StatCard number="27" label='Times you said "miss"' sublabel="I said it 4 times — none emotional" />
                        <StatCard number="74" label='Times you called me "sir"' sublabel="with that smile" />
                        <StatCard number="1" label="Goa retreat" sublabel="where it all started" />
                        <StatCard number="94" label='Times you said "sorry"' sublabel="you never had to" />
                    </div>
                </Reveal>

                {/* Big vulnerability stat */}
                <Reveal delay={2}>
                    <HeroStat
                        number="1,040"
                        label="emotional words you used"
                        sub="miss, sorry, care, feel, trust, love, hope, numb, alone — vs my 457"
                    />
                    <p className="text-handwritten" style={{
                        textAlign: 'center',
                        color: 'var(--blush-pink)',
                        fontSize: '1.5rem',
                        marginTop: '-20px',
                        marginBottom: '40px'
                    }}>
                        You were 2.3x more emotionally vulnerable than me.
                        <br />
                        You wore your heart out. I kept mine locked.
                    </p>
                </Reveal>

                {/* Timeline */}
                <Reveal delay={3}>
                    <h3 className="heading-display heading-md" style={{ color: 'var(--warm-amber)', marginBottom: '24px' }}>
                        Our Geography
                    </h3>
                    <div className="timeline">
                        <TimelineItem date="September 2024" event="Chandigarh — The interview, meetings at Social & Starbucks, <em>it started here</em>" />
                        <TimelineItem date="October 2024" event="Goa Retreat — Dancing in rain, pool nights, then Delhi for Diwali" />
                        <TimelineItem date="January 2025" event="Mumbai & Hyderabad — City adventures, late nights, Bali dream planning" />
                        <TimelineItem date="February 2025" event="Jaipur — Traveling together, the fight that made us honest" />
                        <TimelineItem date="March–May 2025" event="Everywhere and nowhere — consistent, comfortable, <em>ours</em>" />
                        <TimelineItem date="August 2025" event="Bangalore — Mine after Thailand with friends, a different energy" />
                    </div>
                </Reveal>

                {/* 📸 Our Geography — in photos */}
                <Reveal>
                    <PhotoGallery columns={2}>
                        <PhotoCard
                            src="/images/vector/fairy_lights.png"
                            caption="That night with the fairy lights"
                            date="October 29"
                        />
                        <PhotoCard
                            src="/images/vector/photo_booth.png"
                            caption="Mirror selfie, shot on laptop"
                            date="January 11"
                        />
                    </PhotoGallery>
                </Reveal>

                <Reveal>
                    <PhotoCard
                        src="/images/vector/skywalk.png"
                        caption="City nights — our world after dark"
                        date="January 25"
                        hero
                    />
                </Reveal>

                <Reveal>
                    <PhotoGallery columns={2}>
                        <PhotoCard
                            src="/images/vector/bouquet.png"
                            caption="Red flowers, bigger smile"
                            date="February 16"
                        />
                        <PhotoCard
                            src="/images/vector/bhangarh.png"
                            caption="Bhangarh Fort, Rajasthan"
                            date="February 23"
                        />
                    </PhotoGallery>
                </Reveal>

                {/* Jaipur road trip — vectorized video */}
                <Reveal>
                    <VideoEmbed
                        src="/videos/jaipur_vectorized.mp4"
                        caption="The Jaipur road trip — February 2025"
                    />
                </Reveal>

                {/* Late Night Stats */}
                <Reveal>
                    <div style={{
                        background: 'rgba(255, 215, 61, 0.05)',
                        border: '1px solid rgba(255, 215, 61, 0.15)',
                        borderRadius: '16px',
                        padding: '32px',
                        marginTop: '32px',
                        textAlign: 'center'
                    }}>
                        <div className="text-handwritten" style={{ color: 'var(--golden-hour)', fontSize: '1.5rem', marginBottom: '16px' }}>
                            🌙 We lived at midnight
                        </div>
                        <p className="text-body">
                            Our top 5 active hours: <strong style={{ color: 'var(--golden-hour)' }}>11pm, 12am, 1am, 10pm, 2am</strong>
                        </p>
                        <p className="text-body" style={{ marginTop: '8px' }}>
                            We existed in a world that only started when everyone else fell asleep.
                        </p>
                        <div className="stat-grid" style={{ marginTop: '24px' }}>
                            <StatCard number="3,480" label="Your messages after midnight" />
                            <StatCard number="2,420" label="My messages after midnight" />
                        </div>
                    </div>
                </Reveal>

                {/* Ishq Bulaava — from the movie she recommended */}
                <Reveal>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <p className="text-handwritten" style={{ color: 'var(--blush-pink)', marginBottom: '8px', fontSize: '1.2rem' }}>
                            The song you dedicated to me ↓
                        </p>
                        <SpotifyEmbed trackId="1fkjRQA8wXPPyxqYLbxuqy" />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
