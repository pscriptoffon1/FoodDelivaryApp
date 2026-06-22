import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaEyeSlash } from "react-icons/fa";

function Password() {
    return (
        <div className="mobile-wrapper">
            <div className="page settings-page">

                {/* Header */}
                <div className="password-header">
                    <a href="/home"><FaArrowLeft className="back-icon" /></a>
                    <h2>Password Setting</h2>
                </div>

                {/* Content */}
                <div className="password-content">

                    <div className="mb-4">
                        <label>Current Password</label>

                        <div className="password-input">
                            <input
                                type="password"
                                placeholder="Enter password"
                            />
                            <FaEyeSlash />
                        </div>

                        <p className="forgot">
                            Forgot Password?
                        </p>
                    </div>


                    <div className="mb-4">
                        <label>New Password</label>

                        <div className="password-input">
                            <input
                                type="password"
                                placeholder="Enter password"
                            />
                            <FaEyeSlash />
                        </div>
                    </div>


                    <div className="mb-5">
                        <label>Confirm New Password</label>

                        <div className="password-input">
                            <input
                                type="password"
                                
                                placeholder="Enter password"
                            />
                            <FaEyeSlash />
                        </div>
                    </div>


                    <button className="save-btn">
                        Save Password
                    </button>

                </div>

            </div>

            <Bottomnav />
        </div>
    );
}

export default Password;