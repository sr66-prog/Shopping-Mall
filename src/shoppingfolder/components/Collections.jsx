const Collections = ({ gentsFashion, onAddToCart }) => {
    const { title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6 } = gentsFashion;

    const items = [
        { image: image1, price: price1, title },
        { image: image2, price: price2, title },
        { image: image3, price: price3, title },
        { image: image4, price: price4, title },
        { image: image5, price: price5, title },
        { image: image6, price: price6, title },
    ];

    return (
        <div className='collectionSection'>
            <h2>{title}</h2>
            <div className="menImages">
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={title} />
                        <p>{item.price}</p>
                        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;
