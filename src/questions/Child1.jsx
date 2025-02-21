
const Child1Component=({name,updatedName})=>{
 return (
    <div>
        <h1>tihs is updated name</h1>
        <p>{name}</p>
        <button onClick={()=>updatedName("latha")}></button>
    </div>
 )
}
export default Child1Component;