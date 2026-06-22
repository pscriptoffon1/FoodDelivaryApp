import { FaArrowLeft, FaHome, FaBuilding } from "react-icons/fa";
import Bottomnav from "../components/bottomnav";

function Addres() {
    return (
        <div className="mobile-wrapper">

            <div className="page address-page">

                <div className="address-header">

                   <a href="/home"> <FaArrowLeft className="back-icon"/></a>

                    

                    <h1>Delivery Address</h1>

                </div>


                <div className="address-list">

                    <div className="address-card">

                        <div className="address-icon">
                            <FaHome/>
                        </div>

                        <div className="address-info">
                            <h3>My Home</h3>
                            <p>778 Locust View Drive Oakland, CA</p>
                        </div>

                        <div className="radio-circle"></div>

                    </div>


                    <div className="address-card">

                        <div className="address-icon">
                            <FaBuilding/>
                        </div>

                        <div className="address-info">
                            <h3>My Office</h3>
                            <p>778 Locust View Drive Oakland, CA</p>
                        </div>

                        <div className="radio-circle"></div>

                    </div>


                    <div className="address-card">

                        <div className="address-icon">
                            <FaHome/>
                        </div>

                        <div className="address-info">
                            <h3>Parent's House</h3>
                            <p>778 Locust View Drive Oakland, CA</p>
                        </div>

                        <div className="radio-circle"></div>

                    </div>

                </div>


             <a className="tt5" href="/newaddress">  <button className="add-address-btn">
                    + Add New Address
                </button></a> 

            </div>

            <Bottomnav/>

        </div>
    );
}

export default Addres;