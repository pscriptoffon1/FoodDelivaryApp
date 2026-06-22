import Bottomnav from "../components/bottomnav";
import { FaArrowLeft } from "react-icons/fa";

function Completed() {
    return (
        <div className="mobile-wrapper">

            <div className="orders-page">

                <div className="orders-header">

              <a href="/orders">  <FaArrowLeft className="back-btn" /></a>    

                    <h1>My Orders</h1>

                </div>

                <div className="orders-content">

                    <div className="order-filters">

                        <a href="/orders">  <button >
                            Active
                        </button></a>

                        <button className="active">
                            Completed
                        </button>

                        <a href="/cancel"> <button>
                            Cancel
                        </button></a>

                    </div>

                  <a className="tt5" href="/review"> <div className="empty-orders">


                        <div className="order-card">

                            <img
                                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699"
                                alt="" className="or1"
                            />

                            <div className="order-info">

                                <h3>Strawberry shake</h3>

                                <p>29 Nov, 01:20 pm</p>

                                <div className="order-buttons">

                                    <button className="track-btn">
                                        Cancel <br />            </button>

                                    <button className="details-btn">
                                        Details
                                    </button>

                                </div>

                            </div>

                            <div className="order-right">

                                <h2>$20.00</h2>

                                <span>2 items</span>

                            </div>

                        </div>
                    </div>
                    </a> 

                </div>

            </div>

            <Bottomnav />

        </div>
    );
}

export default Completed;