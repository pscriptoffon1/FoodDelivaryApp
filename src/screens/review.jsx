import Bottomnav from "../components/bottomnav";
import { FaArrowLeft } from "react-icons/fa";


function Review() {
    return (
        <div className="mobile-wrapper">

            <div className="page">
                <div className="review-page">
                    <FaArrowLeft className="back-btn1" />
                    <div className="review-header">
                        <h1>Leave a Review</h1>
                    </div>

                    <div className="food-image">

                        <img
                            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
                            alt=""
                        />

                    </div>

                    <h2 className="food-name">
                        Chicken Curry
                    </h2>

                    <p className="review-text">
                        We'd love to know what you think of your dish.
                    </p>


                    <div className="stars">


                    </div>


                    <h3 className="comment-title">
                        Leave us your comment!
                    </h3>


                    <div className="review-box">

                        <textarea
                            placeholder="Write Review..."
                        ></textarea>

                    </div>


                    <div className="review-buttons">

                     <a href="/home">  <button className="cancel-btn">
                            Cancel
                        </button>
</a> 
                        <button className="submit-btn">
                            Submit
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Review;