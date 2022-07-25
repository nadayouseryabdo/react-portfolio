import Counter from "./counter"
const Inecrement = (props)=>{
    const incrementFn=()=>{props.IncreCount()}
    return <>
    <button className="btn btn-outline-success me-2" onClick={incrementFn}>+</button>
    </>
}
export default Inecrement