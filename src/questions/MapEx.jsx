const Mapex = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <h1>hello</h1>

            <ol>
                {arr.map((item) => (
                    <li key={item}>{item + 2}</li>
                ))}
            </ol>
        </div>
    )
}
export default Mapex