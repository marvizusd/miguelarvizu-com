import '../styles/globals.css'
import { ThemeProvider } from '../providers/ThemeProvider'
// import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App