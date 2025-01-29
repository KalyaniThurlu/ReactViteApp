
const Exprops = (props) => {
    return <p>{props.name}</p>;
};

const Exfun = () => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Exprops name="Priya" />
            <Exprops name="Latha" />
            <Exprops name="Madhu" />
        </div>
    );
};

export default Exfun;
