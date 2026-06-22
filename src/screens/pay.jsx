import { FaArrowLeft, FaHome, FaBuilding } from "react-icons/fa";
import Bottomnav from "../components/bottomnav";

function Pay() {
    return (
        <div className="mobile-wrapper">

            <div className="page page-pay">

                <div className="ll">


                    <div className="pay-title">Payment Methods</div>

                    <div className="back-btn">
                      <a href="/home" className="tt3"> <FaArrowLeft /></a> 
                    </div>
                </div><br /><br />

                <div className="pay-content">

                    <div className="pay-list">

                        <div className="pay-item">
                            <div className="pay-left">
                                <FaBuilding className="pay-icon" />
                                <span className="pay-name">*** *** *** 43</span>
                            </div>
                            <div className="radio active"></div>
                        </div>

                        <div className="pay-item">
                            <div className="pay-left">
                                <FaHome className="pay-icon" />
                                <span className="pay-name">apple pay</span>
                            </div>
                            <div className="radio"></div>
                        </div>

                        <div className="pay-item">
                            <div className="pay-left">
                                <FaBuilding className="pay-icon" />
                                <span className="pay-name">paypal</span>
                            </div>
                            <div className="radio"></div>
                        </div>

                        <div className="pay-item">
                            <div className="pay-left">
                                <FaHome className="pay-icon" />
                                <span className="pay-name">google pay</span>
                            </div>
                            <div className="radio"></div>
                        </div>

                       <a href="/addcard"> <button className="add-payment">
                            Add New
                        </button></a>

                    </div>

                </div>
            </div>

            <Bottomnav />

        </div>
    );
}

export default Pay;