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
			<ListGroup items={items} heading={"Countries"} onSelectItem={ handleSelectItem } />
		</div>
	);
}

export default App;