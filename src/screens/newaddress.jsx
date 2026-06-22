import { FaArrowLeft, FaHome, FaBuilding } from "react-icons/fa";
import Bottomnav from "../components/bottomnav";

function newaddres() {
    return (
        <div className="mobile-wrapper">

            <div className="page">

                <div className="new-address-page">

                    <div className="address-header">

                        <FaArrowLeft className="back-icon" />

                        <h1>Add New Address</h1>

                    </div>

                    <div className="home-big-icon">
                        <FaHome />
                    </div>


                    <div className="input-group">

                        <label>Name</label>

                        <input
                            type="text"
                            placeholder="Anna House"
                        />

                    </div>


                    <div className="input-group">

                        <label>Address</label>

                        <textarea
                            placeholder="778 Locust View Drive Oaklanda, CA"
                        ></textarea>

                    </div>


                   <a className="tt5" href="/home"><button className="save-address-btn">
                        Save Address
                    </button>
</a> 
                </div>
            </div>

            <Bottomnav />

        </div>
    );
}

export default newaddres;