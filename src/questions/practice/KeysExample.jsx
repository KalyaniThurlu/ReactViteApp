

const Exkeys = () => {
    let names = ["latha", "rama", "suma", "padhma"]
    return (
        <div>

            <ul>
                {
                    names.map((name, id) => (
                        <li key={id}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Exkeys