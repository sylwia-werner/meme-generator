import { MemeProvider } from "./hooks/useMemeContext";
import { MemeConnector } from "./pages/MemeConnector/MemeConnector";

function App() {
	return (
		<MemeProvider>
			<MemeConnector />
		</MemeProvider>
	);
}

export default App;
