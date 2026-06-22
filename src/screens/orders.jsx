import Bottomnav from "../components/bottomnav";
import { FaArrowLeft } from "react-icons/fa";

function Orders() {
    return (
        <div className="mobile-wrapper">

            <div className="orders-page">

                <div className="orders-header">

                    <a href="/home"><FaArrowLeft className="back-btn"/></a>

                    <h1>My Orders</h1>

                </div>

                <div className="orders-content">

                    <div className="order-filters">

                        <button className="active">
                            Active
                        </button>

                       <a href="/completed"> <button>
                            Completed
                        </button></a>

                        <button>
                            Cancelled
                        </button>

                    </div>

                    <div className="empty-orders">

                        <div className="empty-icon">
                            📄
                        </div>

                        <h2>
                            You don't have any active orders at this time
                        </h2>

                    </div>

                </div>

            </div>

            <Bottomnav/>

        </div>
    );
}

export default Orders;