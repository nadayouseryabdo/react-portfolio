import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
    const urlParams = useParams()
    const [singleProduct, setsingleProduct] = useState({})

    useEffect(() => { fetchProduct() }, [])

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res => res.json())
            .then(json => setsingleProduct(json))
    }

    return (
        <>
            {singleProduct.id ? <div className="card border-3 w-75 mx-auto mt-5 p-4">
                <div className="row" key={singleProduct.id}>
                    <div className="col-4">
                        <img src={singleProduct.image} className='img-fluid rounded-start w-75' alt="" />
                    </div>
                    <div className="col-8 my-auto">
                        <div>
                            <h3 className="card-title">{singleProduct.title}</h3>
                            <p className="fw-light fs-6">{singleProduct.description}</p>
                            <p className="fw-normal">{singleProduct.category}</p>
                            <p className="text-success">{singleProduct.price} EGP</p>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
                :
                <div className="spinner-border text-success mx-auto mt-5 d-block " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </>
    );
}
export default Product;