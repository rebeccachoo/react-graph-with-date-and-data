import VirusData from "./containers/VirusData/VirusData";
import Aux from "./hoc/Aux/Aux";
import Cockpit from "./components/Cockpit/Cockpit";

function App() {
	return (
		<Aux>
			<Cockpit />
			<VirusData />
		</Aux>
	);
}

export default App;
