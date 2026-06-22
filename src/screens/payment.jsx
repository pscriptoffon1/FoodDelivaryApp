import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaCreditCard, FaPen } from "react-icons/fa";

function Payment() {
    return (
        <div className="mobile-wrapper">
            <div className="page payment-page">

                <div className="payment-header">
                    <a href="/checkout"><FaArrowLeft className="back-icon" /></a>
                    <h2>Payment</h2>
                </div>

                <div className="payment-content">

                    <div className="section">
                        <div className="section-title">
                            <span>Shipping Address</span>
                            <FaPen />
                        </div>

                        <div className="address-box">
                            <p>778 Locust View Drive Oaklanda, CA</p>
                            <button>Edit</button>
                        </div>
                    </div>


                    <div className="section">
                        <h3>Order Summary</h3>

                        <div className="order-item">
                            <div>
                                <p>Strawberry Shake</p>
                                <span>2 items</span>
                            </div>

                            <h4>$40.00</h4>
                        </div>

                        <div className="order-item">
                            <div>
                                <p>Broccoli Lasagna</p>
                                <span>1 item</span>
                            </div>

                            <h4>$12.00</h4>
                        </div>

                    </div>


                    <div className="section">

                        <h3>Payment Method</h3>

                        <div className="payment-card">

                            <FaCreditCard className="card-icon" />

                            <div>
                                <p>Credit Card</p>
                                <span>*** *** *** 43/00/000</span>
                            </div>

                            <button>Edit</button>

                        </div>

                    </div>


                <a className="tt6" href="/delivery">  <div className="section">

                        <h3>Delivery Time</h3>

                        <div className="delivery-box">
                            <span>Estimated Delivery <br />Confirm Order</span>

                            <h4>25 mins</h4>
                        </div>

                    </div></a> <br /><br />

                    

                </div>

                <br /><br /><br /><br /><br />
            </div>
            <br /><br /><br /><br /><br />
            <Bottomnav />

        </div>
    );
}

export default Payment;