const keysEx = () => {
    let arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            this is keys  example

            <ol>
                {arr.map((item) => (
                    <li key={item}></li>
                ))}
            </ol>
        </div>
    )
}
export default keysEx;