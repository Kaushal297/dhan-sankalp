import { ThemeProvider } from "@/components/ThemeProvider"
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Ledger from './ledger/Ledger'

function App() {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Header></Header>
				<Ledger></Ledger>
				<Footer></Footer>
			</ThemeProvider>
		</>
	)
}

export default App