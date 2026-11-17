import ListGroup from "./Components/ListGroup";
function App() {
	const items = [
		"Peru",
		"Ecuador",
		"Chile",
		"Bolivia",
		"Colombia"
	];
	
	return <div>
		<ListGroup items={items} heading={"Countries"} />
	</div>;
}

export default App;