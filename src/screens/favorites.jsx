import Bottomnav from "../components/bottomnav";

function Favorites() {
    return (
        <div className="mobile-wrapper">

            <div className="favorites-page">

                <div className="favorites-header">

                   <a href="/home"> <button className="back-btn">
                        ←
                    </button></a>

                    <h1>Favorites</h1>

                    <p>
                        It's time to buy your favorite dish.
                    </p>

                </div>


                <div className="favorites-content">

                    <div className="favorite-card">

                        <img
                            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe"
                            alt=""
                        />

                        <button className="heart">
                            ♥
                        </button>

                        <h3>Chicken Curry</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>

                    </div>


                    <div className="favorite-card">

                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                            alt=""
                        />

                        <button className="heart">
                            ♥
                        </button>

                        <h3>Chicken Burger</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>

                    </div>


                    <div className="favorite-card">

                        <img
                            src="https://images.unsplash.com/photo-1619895092538-128341789043"
                            alt=""
                        />

                        <button className="heart">
                            ♥
                        </button>

                        <h3>Broccoli Lasagna</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>

                    </div>


                    <div className="favorite-card">

                        <img
                            src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f"
                            alt=""
                        />

                        <button className="heart">
                            ♥
                        </button>

                        <h3>Mexican Appetizer</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>

                    </div>

                </div>

            </div>

            <Bottomnav />

        </div>
    );
}

export default Favorites;