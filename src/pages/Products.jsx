import { FaPlus, FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
import { addToCart, deleteProd, removeFromCart } from "../app/productSlice";
import toast from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function Products() {
    const { products, totalProducts, cartProducts } = useSelector((state) => state.products);
    const [cartState, setCartState] = useState({});
    const dispatch = useDispatch();

    const handleAdd = (productId) => {
        setCartState((prev) => {
            const newState = {
                ...prev,
                [productId]: !prev[productId],
            };

            const product = products.find((product) => product.id === productId);

            if (newState[productId]) {
                // Agar mahsulot savatga qo'shilgan bo'lsa
                dispatch(addToCart(product));
                toast.success(`Added to cart`);
            } else {
                // Agar mahsulot savatdan olib tashlangan bo'lsa
                dispatch(removeFromCart(productId));
                toast.error(`Removed from cart`);
            }

            return newState;
        });
    };



    if (products.length === 0) {
        return <h1 className="no-products">No Products Yet...</h1>;
    }

    let handleDelete = (id) => {
        dispatch(deleteProd(id));
    }

    return (
        <div className="mt-[50px]">
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
                                <FaCartShopping size={25} />
                                <span className="badge badge-sm indicator-item">{cartProducts.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                        >
                            {cartProducts.length == 0 ?
                                <div className="card-body">
                                    <span className="text-lg font-bold">Not yet</span>
                                </div>
                                :
                                <div className="card-body">
                                    {cartProducts.map((prod) => {
                                        return (
                                            <div>
                                                <h1 className="text-lg border-b-2 pb-2">{prod.name}</h1>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <section className="speacial-container grid grid-cols-3 gap-[35px] mb-[70px]">
                {products.map((product) => {
                    const isAdded = cartState[product.id];

                    return (
                        <div
                            key={product.id}
                            className="card bg-base-100 w-96 shadow-xl cursor-pointer"
                        >
                            <figure className="w-full object-cover">
                                <img src={product.image} alt={product.name} className="h-[254px]" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {product.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleAdd(product.id)}
                                            className="btn btn-sm"
                                        >
                                            {!isAdded ? (
                                                <FaCartPlus size={20} />
                                            ) : (
                                                <FaCheckCircle size={20} />
                                            )}
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            <FaDeleteLeft />
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
                })}
            </section>
        </div>
    );
}

export default Products;