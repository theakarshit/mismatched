import IntroSplash from './sections/IntroSplash'
import TheSpark from './sections/TheSpark'
import GoldenPeriod from './sections/GoldenPeriod'
import TheDrift from './sections/TheDrift'
import TheUnraveling from './sections/TheUnraveling'
import TheGoodbye from './sections/TheGoodbye'
import KahaanHoTum from './sections/KahaanHoTum'
import { StarProgress, UnsentLetter, useSessionTracker } from './interactive'

export default function App() {
    useSessionTracker()

    return (
        <main>
            <StarProgress />
            <IntroSplash />
            <TheSpark />
            <GoldenPeriod />
            <TheDrift />
            <TheUnraveling />
            <TheGoodbye />
            <KahaanHoTum />
            <UnsentLetter />
        </main>
    )
}
