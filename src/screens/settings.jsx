import {
  FaArrowLeft,
  FaBell,
  FaKey,
  FaUserAlt,
  FaChevronRight
} from "react-icons/fa";

import Bottomnav from "../components/bottomnav";


function Settings() {
  return (
    <div className="mobile-wrapper">

      <div className="page settings-page">

        <div className="settings-header">
          <FaArrowLeft className="back-icon" />

          <h1>Settings</h1>
        </div>

        <div className="settings-content">

         <a className="tt5" href="/settings2"> <div className="settings-item">
            <FaBell className="settings-icon" />

            <span>Notification Setting</span>

            <FaChevronRight className="right-icon" />
          </div>
</a>
        <a className="tt5" href="/password"> <div className="settings-item">
            <FaKey className="settings-icon" />

            <span>Password Setting</span>

            <FaChevronRight className="right-icon" />
          </div></a> 

          <div className="settings-item">
            <FaUserAlt className="settings-icon" />

            <span>Delete Account</span>

            <FaChevronRight className="right-icon" />
          </div>

        </div>

      </div>

      <Bottomnav />

    </div>
  );
}

export default Settings;