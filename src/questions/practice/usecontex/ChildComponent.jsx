
import { useContext } from "react";
import { MyContext } from "../../main"; 


const ChildComponent = () => {
 
    
    const obj = useContext(MyContext);

    return (
        <div>
            
            <h1>Name: {obj.name}</h1>
            <p>price: {obj.price}</p>


        </div>
    );
};

export default ChildComponent;
