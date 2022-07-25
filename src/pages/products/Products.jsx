import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/productSlice'


function Products() {
    const {productArray ,loading} = useSelector(state => state.pReducer)
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(fetchProducts())
    }, [])
    // const loading = useSelector(state=> state.loading)

    // const [productArray, setproductArray] = useState([])
    // const fetchProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setproductArray(json))
    // }

    return (
        <>
            {!loading ? <div className="row mx-auto justify-content-center">
                {productArray.map((item, i) => {
                    return (
                        <div key={item.id} className='shadow-lg border-1 border-success card col-3 m-2 text-decoration-none text-muted'>
                            <img src={item.image} className='w-75 mx-auto mt-2' style={{ height: '250px' }} alt="" />
                            <div className="card-body" key={item.id}>
                                <p className="fw-normal fs-6" style={{ height: '80px' }}>{item.title}</p>
                                <p className="fw-normal">{item.category}</p>
                                <p className="text-success fw-normal">{item.price} EGP</p>
                                <button className="btn btn-warning">Add to Cart</button>
                                <Link to={`/product/${item.id}`}><button className="btn btn-success ms-3">Show Details</button></Link>

                            </div>
                        </div>
                    )
                })}
            </div> :
                <div class="spinner-border text-success mx-auto mt-5 d-block " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
        </>

    );
}
export default Products;