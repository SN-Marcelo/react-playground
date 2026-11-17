import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";
function App() {
	const items = [
		"Peru",
		"Ecuador",
		"Chile",
		"Bolivia",
		"Colombia"
	];

	const handleSelectItem = (item: string) => {
		console.log(item);
	}

	return (
		<div>
			<Alert children={<h1>Hello World</h1>}/>
			{/*<ListGroup items={items} heading={"Countries"} onSelectItem={ handleSelectItem } />*/}
		</div>
	);
}

export default App;