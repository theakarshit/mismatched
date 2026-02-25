import IntroSplash from './sections/IntroSplash'
import TheSpark from './sections/TheSpark'
import GoldenPeriod from './sections/GoldenPeriod'
import TheDrift from './sections/TheDrift'
import TheUnraveling from './sections/TheUnraveling'
import TheGoodbye from './sections/TheGoodbye'
import KahaanHoTum from './sections/KahaanHoTum'
import { StarProgress, useSessionTracker } from './interactive'
import { PasswordGate } from './components/PasswordGate'
import { NewMessageBanner, NewMessageReveal } from './components/NewMessage'

export default function App() {
    useSessionTracker()

    return (
        <PasswordGate>
            <NewMessageBanner />
            <main>
                <StarProgress />
                <IntroSplash />
                <TheSpark />
                <GoldenPeriod />
                <TheDrift />
                <TheUnraveling />
                <TheGoodbye />
                <KahaanHoTum />
                <NewMessageReveal />
            </main>
        </PasswordGate>
    )
}
