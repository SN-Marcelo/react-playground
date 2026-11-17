import { useState } from "react";

function ListGroup() {
    const items = [
        "Peru",
        "Ecuador",
        "Chile",
        "Bolivia",
        "Colombia"
    ];

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const message = "Hello"
    const goodbye = (name: string) => {
        return <p>Goodbye {name}</p>
    }

    const log = (item: string, index: number) => {
        setSelectedIndex(index);
        console.log(item);
    }

    return (
        <>
            <h1>List</h1>
            {message}
            {goodbye("Marcelo")}
            {items.length === 0 ? <p>No items found</p> : null}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => log(item, index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;