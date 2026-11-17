function ListGroup() {
    const items = [
        "Peru",
        "Ecuador",
        "Chile",
        "Bolivia",
        "Colombia"
    ];

    const message = "Hello"
    const goodbye = (name: string) => {
        return <p>Goodbye {name}</p>
    }

    return (
        <>
            <h1>List</h1>
            {message}
            {goodbye("Marcelo")}
            {items.length === 0 ? <p>No items found</p> : null}
            <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;