
const Exkey = () => {
    const items = ["apple", "banana", "mango"];
    return (
        <>
            <div>
                <ol>
                    {
                        items.map((item, index) => {
                            return <li key={index}>{item}</li>; // Ensure you return the <li> element
                        })
                    }
                </ol>
            </div>
        </>
    );
};

export default Exkey;
