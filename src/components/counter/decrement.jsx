import Counter from "./counter"

const Decrement = (props)=>{
    const decrementFn=()=>{props.DcreCount()}
    return <>
    <button className="btn btn-outline-success" onClick={decrementFn}>-</button>
    </>
}
export default Decrement