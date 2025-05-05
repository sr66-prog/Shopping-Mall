import React from "react";

const WomanCollection = (props) => {
    const {
        title,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        price1,
        price2,
        price3,
        price4,
        price5,
        price6,
    } = props.ladiesFashion;

    const { onAddToCart } = props;

    return (
        <div className="collectionSection">
            <h2>{title}</h2>
            <div className="bannerBox">
                <img src="assets/LadiesBanner.gif" alt="" />
            </div>

            <div className="menImages">
                <div>
                    <img src={image1} alt={title} />
                    <p>{price1}</p>
                    <button onClick={() => onAddToCart({ image: image1, price: price1 })}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <img src={image2} alt={title} />
                    <p>{price2}</p>
                    <button onClick={() => onAddToCart({ image: image2, price: price2 })}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <img src={image3} alt={title} />
                    <p>{price3}</p>
                    <button onClick={() => onAddToCart({ image: image3, price: price3 })}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <img src={image4} alt={title} />
                    <p>{price4}</p>
                    <button onClick={() => onAddToCart({ image: image4, price: price4 })}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <img src={image5} alt={title} />
                    <p>{price5}</p>
                    <button onClick={() => onAddToCart({ image: image5, price: price5 })}>
                        Add to Cart
                    </button>
                </div>
                <div>
                    <img src={image6} alt={title} />
                    <p>{price6}</p>
                    <button onClick={() => onAddToCart({ image: image6, price: price6 })}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WomanCollection;
