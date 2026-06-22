import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaChevronRight, FaSearch } from "react-icons/fa";

function Faq() {
  return (
    <div className="mobile-wrapper">
      <div className="page faq-page">

        <div className="faq-header">
         <a href="/contactus"> <FaArrowLeft className="back-icon" /></a>

          <h1>Help & FAQs</h1>
          <p>how can we help you?</p>
        </div>

        <div className="faq-content">

          <div className="faq-tabs">
            <button className="active">FAQ</button>
           <a href="/contactus"><button>Contact Us</button></a> 
          </div>

          <div className="faq-categories">
            <button className="active-category">General</button>
            <button>Account</button>
            <button>Service</button>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>
              <FaSearch />
            </button>
          </div>

          <div className="faq-item">
            <span>Lorem ipsum dolor sit amet?</span>
            <FaChevronRight />
          </div>

          <div className="faq-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent pellentesque congue lorem, vel tincidunt tortor.
          </div>

          <div className="faq-item">
            <span>Lorem ipsum dolor sit amet?</span>
            <FaChevronRight />
          </div>

          <div className="faq-item">
            <span>Lorem ipsum dolor sit amet?</span>
            <FaChevronRight />
          </div>

          <div className="faq-item">
            <span>Lorem ipsum dolor sit amet?</span>
            <FaChevronRight />
          </div>

          <div className="faq-item">
            <span>Lorem ipsum dolor sit amet?</span>
            <FaChevronRight />
          </div>

        </div>

      </div>

      <Bottomnav />
    </div>
  );
}

export default Faq;