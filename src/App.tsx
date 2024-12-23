import { MemeProvider } from "./context/useMemeContext";
import { TextEditorProvider } from "./context/useTextEditorContext";
import { MemeConnector } from "./pages/MemeConnector/MemeConnector";

function App() {
	return (
		<MemeProvider>
			<TextEditorProvider>
				<MemeConnector />
			</TextEditorProvider>
		</MemeProvider>
	);
}

export default App;
