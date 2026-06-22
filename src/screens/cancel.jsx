import Bottomnav from "../components/bottomnav";
import { FaArrowLeft } from "react-icons/fa";

function Cancel() {

    const reasons = [
        "Delay in delivery",
        "Wrong address",
        "Changed my mind",
        "Found cheaper option",
        "Payment issue"
    ];

    return (
        <div className="mobile-wrapper">

            <div className="cancel-page">

                <div className="cancel-header">

                  <a href="/orders">  <FaArrowLeft className="back-icon"/></a>

                    <h1>Cancel Order</h1>

                </div>


                <p className="cancel-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pellentesque congue lorem, vel tincidunt tortor.
                </p>


                <div className="reasons">

                    {reasons.map((item,index)=>(

                        <div className="reason-item" key={index}>

                            <span>{item}</span>

                            <div className="check-circle"></div>

                        </div>

                    ))}

                </div>


                <h4 className="other-title">
                    Others
                </h4>

                <div className="other-box">

                    <input
                    type="text"
                    placeholder="Others reason..."
                    />

                </div>


                <button className="submit-btn">
                    Submit
                </button>

            </div>

            <Bottomnav/>

        </div>
    );
}

export default Cancel;