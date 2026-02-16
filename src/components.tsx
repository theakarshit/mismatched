import { useEffect, useRef, ReactNode } from 'react'

/* ===========================
   Shared Components
   =========================== */

// --- Scroll Reveal Wrapper ---
export function Reveal({ children, className = '', delay = 0 }: {
    children: ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('visible')
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

    return (
        <div ref={ref} className={`reveal ${delayClass} ${className}`}>
            {children}
        </div>
    )
}

// --- Chat Bubble ---
export function ChatBubble({ sender, message, time, type }: {
    sender: string
    message: string
    time: string
    type: 'sent' | 'received'
}) {
    return (
        <div className={`chat-bubble ${type}`}>
            <div className="chat-sender">{sender}</div>
            <div dangerouslySetInnerHTML={{ __html: message }} />
            <div className="chat-time">{time}</div>
        </div>
    )
}

// --- Stat Card ---
export function StatCard({ number, label, sublabel }: {
    number: string
    label: string
    sublabel?: string
}) {
    return (
        <div className="stat-card">
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
            {sublabel && <div className="stat-sublabel">{sublabel}</div>}
        </div>
    )
}

// --- Hero Stat ---
export function HeroStat({ number, label, sub }: {
    number: string
    label: string
    sub?: string
}) {
    return (
        <div className="stat-hero">
            <div className="stat-hero-number">{number}</div>
            <div className="stat-hero-label">{label}</div>
            {sub && <div className="stat-hero-sub">{sub}</div>}
        </div>
    )
}

// --- Quote Block ---
export function QuoteBlock({ text, attribution }: {
    text: string
    attribution?: string
}) {
    return (
        <div className="quote-block">
            <div className="quote-text">{text}</div>
            {attribution && <div className="quote-attribution">— {attribution}</div>}
        </div>
    )
}

// --- Section Divider ---
export function SectionDivider({ icon = '✦' }: { icon?: string }) {
    return (
        <div className="section-divider">
            <span className="section-divider-icon">{icon}</span>
        </div>
    )
}

// --- Spotify Embed ---
export function SpotifyEmbed({ trackId }: { trackId: string }) {
    return (
        <div className="spotify-embed">
            <iframe
                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}
            />
        </div>
    )
}

// --- Floating Particles ---
export function Particles({ type = 'hearts', count = 15 }: {
    type?: 'hearts' | 'stars' | 'fireflies'
    count?: number
}) {
    const icons = {
        hearts: ['💕', '♥', '✦', '💗'],
        stars: ['✦', '⭒', '✧', '⋆'],
        fireflies: ['·', '•', '✦', '⋆']
    }

    const items = icons[type]

    return (
        <div className="particles-container">
            {Array.from({ length: count }, (_, i) => (
                <span
                    key={i}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        fontSize: `${0.5 + Math.random() * 1}rem`,
                        animationDuration: `${8 + Math.random() * 12}s`,
                        animationDelay: `${Math.random() * 8}s`,
                        opacity: type === 'fireflies' ? 0.3 : undefined
                    }}
                >
                    {items[i % items.length]}
                </span>
            ))}
        </div>
    )
}

// --- Timeline Item ---
export function TimelineItem({ date, event }: {
    date: string
    event: string
}) {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{date}</div>
            <div className="timeline-event" dangerouslySetInnerHTML={{ __html: event }} />
        </div>
    )
}

// --- Photo Card ---
export function PhotoCard({ src, caption, date, hero = false }: {
    src: string
    caption?: string
    date?: string
    hero?: boolean
}) {
    return (
        <div className={`photo-card ${hero ? 'photo-card-hero' : ''}`}>
            <div className="photo-card-img-wrap">
                <img src={src} alt={caption || 'Memory'} loading="lazy" />
                <div className="photo-card-overlay" />
            </div>
            {(caption || date) && (
                <div className="photo-card-info">
                    {date && <span className="photo-card-date">{date}</span>}
                    {caption && <span className="photo-card-caption">{caption}</span>}
                </div>
            )}
        </div>
    )
}

// --- Photo Gallery ---
export function PhotoGallery({ children, columns = 2 }: {
    children: ReactNode
    columns?: number
}) {
    return (
        <div className="photo-gallery" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {children}
        </div>
    )
}

// --- Video Embed ---
export function VideoEmbed({ src, caption, autoplay = true }: {
    src: string
    caption?: string
    autoplay?: boolean
}) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const el = videoRef.current
        if (!el || !autoplay) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.play().catch(() => { })
                } else {
                    el.pause()
                }
            },
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [autoplay])

    return (
        <div className="video-embed">
            <video
                ref={videoRef}
                src={src}
                muted={autoplay}
                loop={autoplay}
                playsInline
                controls={!autoplay}
                preload="metadata"
            />
            {caption && <p className="video-caption text-handwritten">{caption}</p>}
        </div>
    )
}
