
const NestedNumberList = () => {
    const listItems = [];

    for (let i = 1; i <= 3; i++) { // Outer loop (Rows)
        const subItems = [];

        for (let j = 1; j <= 3; j++) { // Inner loop (Columns)
            subItems.push(<span key={j}> {j} </span>);
        }

        listItems.push(
            <li key={i}>
                Row {i}: {subItems}
            </li>
        );
    }

    return (
        <div>
            <h3>Nested Number List</h3>
            <ul>{listItems}</ul>y
        </div>
    );
};

export default NestedNumberList;
