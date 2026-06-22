import Bottomnav from "../components/bottomnav";
import { FaArrowLeft, FaHeart, FaPlus, FaMinus } from "react-icons/fa";

function Moremenu() {
    return (
        <div className="mobile-wrapper">
            <div className=" page">

                <div className="top-section">
                 <a href="menu1">  <FaArrowLeft className="back-icon" /></a> 

                    <div className=" meal-title">
                        <span>5.0 ⭐</span>
                    </div>

                    <h2 className="rating-box">
                        Fresh Prawn Ceviche
                    </h2>

                    <FaHeart className="favorite-icon" />

                </div>

                <div className="meal-image-box">
                    <img
                        src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=800"
                        alt="food"
                        className="meal-image"
                    />
                </div>

                <div className="meal-content">

                    <h3 className="food-name">
                        Shrimp Ceviche
                    </h3>

                    <p className="food-desc">
                        Shrimp marinated in zesty lime juice,
                        mixed with crisp onions,
                        tomatoes and cilantro.
                    </p>

                    <div className="price-counter">

                        <h2>$50.00</h2>

                        <div className="counter-box">
                            <button>
                                <FaMinus />
                            </button>

                            <span>1</span>

                            <button>
                                <FaPlus />
                            </button>
                        </div>

                    </div>

                    <hr />

                    <div className="ingredients">

                        <h3>Add on ingredients</h3>

                        <div className="ingredient-item">
                            <span>Shrimp</span>
                            <span>$2.99</span>
                            <input type="radio" />
                        </div>

                        <div className="ingredient-item">
                            <span>Crisp Onion</span>
                            <span>$3.99</span>
                            <input type="radio" checked />
                        </div>

                        <div className="ingredient-item">
                            <span>Sweet Corn</span>
                            <span>$3.99</span>
                            <input type="radio" />
                        </div>

                        <div className="ingredient-item">
                            <span>Pico de Gallo</span>
                            <span>$2.99</span>
                            <input type="radio" />
                        </div>

                    </div>

                  <a href="/pay"> <button className="add-cart-btn">
                        Add to Cart
                    </button></a> 

                </div>
                <br /><br /><br />
            </div>

            <Bottomnav />
        </div>
    );
}

export default Moremenu;