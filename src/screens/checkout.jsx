import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaTrash, FaPen, FaMinus, FaPlus } from "react-icons/fa";

function Checkout() {
    return (
        <div className="mobile-wrapper">
            <div className="page checkout-page">

                {/* Header */}
                <div className="checkout-header">
                    <a href="/home"><FaArrowLeft className="back-icon"/></a>
                    <h1>Confirm Order</h1>
                </div>

                {/* Shipping */}
                <div className="shipping-section">
                    <div className="section-title">
                        <h2>Shipping Address</h2>
                        <FaPen />
                    </div>

                    <div className="address-box">
                        <span>778 Locust View Drive Oaklanda, CA</span>
                    </div>
                </div>

                {/* Order */}
                <div className="order-section">

                    <h3>Order Summary</h3>

                    {/* Item 1 */}
                    <div className="order-item">

                        <img
                            src="/strawberry.png"
                            alt="shake"
                        />

                        <div className="item-info">
                            <h4>Strawberry Shake</h4>
                            <p>29 Nov, 15:20 pm</p>

                            <button>Delivering</button>
                        </div>

                        <div className="item-right">
                            <FaTrash />

                            <span className="price">$20.00</span>

                            <div className="counter">

                                <button>
                                    <FaMinus />
                                </button>

                                <span>2</span>

                                <button>
                                    <FaPlus />
                                </button>

                            </div>

                            <FaPen />
                        </div>

                    </div>

                    <hr />

                    {/* Item 2 */}

                    <div className="order-item">

                        <img
                            src="/broccoli.png"
                            alt="lasagna"
                        />

                        <div className="item-info">

                            <h4>Broccoli Lasagna</h4>

                            <p>29 Nov, 12:00 pm</p>

                            <button>Delivering</button>

                        </div>

                        <div className="item-right">

                            <FaTrash />

                            <span className="price">$12.99</span>

                            <div className="counter">

                                <button>
                                    <FaMinus />
                                </button>

                                <span>1</span>

                                <button>
                                    <FaPlus />
                                </button>

                            </div>

                            <FaPen />

                        </div>

                    </div>

                </div>

                {/* Total */}

                <div className="total-section">

                    <div>
                        <span>Subtotal</span>
                        <span>$32.00</span>
                    </div>

                    <div>
                        <span>Tax and Fees</span>
                        <span>$5.00</span>
                    </div>

                    <div>
                        <span>Delivery</span>
                        <span>$3.00</span>
                    </div>

                    <hr />

                    <div className="total-final">
                        <span>Total</span>
                        <span>$40.00</span>
                    </div>

                </div>

             <a className="tt5" href="payment"> <button className="checkout-btn">
                    Checkout
                </button></a>  

            </div>

            <Bottomnav />
        </div>
    );
}

export default Checkout;