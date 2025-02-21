
const KeyExample = () => {
    let arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            {arr.map((item, index) => (
                <h2 key={index}>
                    {item+2}
                </h2>
            ))
            }
        </div>
    )
}
export default KeyExample;