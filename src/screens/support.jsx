import Bottomnav from "../components/bottomnav";

function Support() {
  return (
    <div className="mobile-wrapper">

      <div className="page support-page">

        <div className="support-content"></div>

        <h1 className="support-title">
          Support
        </h1>

        <div className="message-right">
          Hello!
        </div>

        <span className="time-right">
          09:00
        </span>

        <div className="message-left">
          Hello!, please choose the number corresponding to your needs for a more efficient service.
        </div>

        <div className="message-left second">
          <p>1. Order Management</p>
          <p>2. Payments Management</p>
          <p>3. Account management</p>
          <p>4. About order tracking</p>
          <p>5. Safety</p>
        </div>

        <span className="time-left">
          09:00
        </span>

        <div className="message-right second-right">
          1
        </div>

        <span className="time-right second-time">
          09:03
        </span>

        <div className="message-left third">
          You have a current order Strawberry Shake and Broccoli Lasagna Order No.0054752 29 Nov, 01:20 pm
        </div>

      

        <div className="support-bottom">

          <div className="attach-icon">
            📎
          </div>

          <input
            type="text"
            placeholder="Write Here..."
            className="support-input"
          />

          <div className="micro-icon">
            🎤
          </div>

          <div className="send-icon">
            ➤
          </div>

        </div>

      </div>

      <Bottomnav/>

    </div>
  );
}

export default Support;