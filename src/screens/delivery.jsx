import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

function Delivery() {
    return (
        <div className="delivery-page">

            <div className="delivery-header">
              <a href="/payment"> <FaArrowLeft className="back-icon" /></a> 
                <h2>Delivery Time</h2>
            </div>

            <div className="delivery-content">

                <h3>Shipping Address</h3>

                <div className="address-box">
                    778 Locust View Drive Oaklanda, CA
                </div>

                <div className="map-box">
                    <FaMapMarkerAlt className="map-marker"/>
                </div>

                <div className="buttons">
                    <button className="btn-light">
                        Delivery
                    </button>

                   <a href="/home"> <button className="btn-orange">
                        Pickup
                    </button></a>
                </div>

                <div className="delivery-info">

                    <div className="delivery-row">
                        <span>Estimated Delivery</span>
                        <b>25 mins</b>
                    </div>

                </div>

                <div className="timeline">

                    <div className="timeline-item">
                        <span className="circle"></span>
                        <p>Your order has been accepted</p>
                        <small>2 min</small>
                    </div>

                    <div className="timeline-item">
                        <span className="circle"></span>
                        <p>The restaurant is preparing your order</p>
                        <small>5 min</small>
                    </div>

                    <div className="timeline-item">
                        <span className="circle"></span>
                        <p>The delivery is on his way</p>
                        <small>10 min</small>
                    </div>

                    <div className="timeline-item">
                        <span className="circle"></span>
                        <p>Your order has been delivered</p>
                        <small>8 min</small>
                    </div>

                </div>

            </div>

            <Bottomnav />

        </div>
    );
}

export default Delivery;