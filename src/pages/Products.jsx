import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

// icons
import { FaCartPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { addToCart } from "../app/productSlice";
import toast from "react-hot-toast";

function Products() {
    let { products, totalProducts } = useSelector((state) => state.products);

    let [addCart, setAddCart] = useState(false);

    if (products.length == 0) {
        return (
            <h1 className="no-products">No Products Yet...</h1>
        )
    }

    return (
        <div className='mt-[50px]'>
            <div className="speacial-container mb-[30px] px-[50px] flex justify-between items-center">
                <div>
                    <button className="btn btn-secondary flex items-center">
                        <p className="font-semibold text-lg">Create New</p> <FaPlus />
                    </button>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{totalProducts}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">Not yet</span>
                            </div>
                        </div>
                    </div></div>
            </div>

            <section className='speacial-container grid grid-cols-3 gap-[35px] mb-[70px]'>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} onClick={() => handleAdd(product.id)} className="card bg-base-100 w-96 shadow-xl cursor-pointer">
                                <figure className="w-full object-cover">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-[254px]"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {product.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-between mt-4">
                                        <div>
                                            <button onClick={() => {
                                                setAddCart(!addCart)
                                                toast.success(`Added to cart`)
                                            }} className="btn btn-sm">
                                                {!addCart ?
                                                    <FaCartPlus size={20} />
                                                    :
                                                    <FaCheckCircle size={20} />
                                                }
                                            </button>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="badge badge-outline">electronics</div>
                                            <div className="badge badge-outline font-semibold">{product.price} $</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export default Products;