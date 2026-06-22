import { FaArrowLeft } from "react-icons/fa";
import Bottomnav from "../components/bottomnav";

function Settings2() {
  return (
    <div className="mobile-wrapper">

      <div className="page settings2-page">

        <div className="settings2-header">
         <a href="/settings"> <FaArrowLeft className="back-icon"/></a>

          <h1>Notification Setting</h1>
        </div>

        <div className="settings2-content">

          <div className="notify-item">
            <span>General Notification</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="notify-item">
            <span>Sound</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="notify-item">
            <span>Sound Call</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="notify-item">
            <span>Vibrate</span>
            <input type="checkbox" />
          </div>

          <div className="notify-item">
            <span>Special Offers</span>
            <input type="checkbox" />
          </div>

          <div className="notify-item">
            <span>Payments</span>
            <input type="checkbox" />
          </div>

          <div className="notify-item">
            <span>Promo and discount</span>
            <input type="checkbox" />
          </div>

          <div className="notify-item">
            <span>Cashback</span>
            <input type="checkbox" />
          </div>

        </div>

      </div>

      <Bottomnav />

    </div>
  );
}

export default Settings2;