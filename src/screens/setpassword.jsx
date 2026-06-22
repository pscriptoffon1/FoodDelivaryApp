import Bottomnav from "../components/bottomnav";

function Signup() {
    return (
        <div className="mobile-wrapper">
            <div className="page signup-page">

                <a href="/login">    <div className="back-btn"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.77989 2L3.05906 4.13579C2.72964 4.39518 2.46281 4.72872 2.27918 5.11069C2.09555 5.49266 2 5.91284 2 6.33868C2 6.76452 2.09555 7.18463 2.27918 7.5666C2.46281 7.94857 2.72964 8.28211 3.05906 8.5415L5.77989 10.6744" stroke="#E95322" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div></a>
                <div className="signup-header">
                    <h1>New Account</h1>
                </div>

                <div className="signup-form-box">

                    <div className="input-group">
                        <label><b>Password</b></label>
                        <input type="text" placeholder="John Doe" />
                    </div>

                    <div className="input-group">
                            <label><b>Confirm Password</b></label>
                        <input type="password" placeholder="********" />
                    </div>


                   <a href="/Fingerprint"> <button className="create-btn">
                        Create New Password
                    </button>
                    </a>

                 
                

                </div>

            </div>

            <Bottomnav />

        </div>
    );
}

export default Signup;