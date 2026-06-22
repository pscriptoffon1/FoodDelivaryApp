import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaCamera } from "react-icons/fa";

function Profile() {
    return (
        <div className="mobile-wrapper">

            <div className="page profile-page">

                <div className="profile-header">
                 <a href="/home">  <FaArrowLeft className="back-icon" /></a> 
                    <h1>My Profile</h1>
                </div>

                <div className="profile-image-box">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt=""
                    />

                    <div className="camera-btn">
                        <FaCamera />
                    </div>
                </div>


                <div className="profile-field">
                    <h3>Full Name</h3>

                    <div className="field-box">
                        John Smith
                    </div>
                </div>


                <div className="profile-field">
                    <h3>Date of Birth</h3>

                    <div className="field-box">
                        09 / 10 / 1991
                    </div>
                </div>


                <div className="profile-field">
                    <h3>Email</h3>

                    <div className="field-box">
                        johnsmith@example.com
                    </div>
                </div>


                <div className="profile-field">
                    <h3>Phone Number</h3>

                    <div className="field-box">
                        +123 567 89000
                    </div>
                </div>


                <button className="update-btn">
                    Update Profile
                </button>
                <br /><br /><br /><br />

            </div>

            <Bottomnav />

        </div>
    );
}

export default Profile;