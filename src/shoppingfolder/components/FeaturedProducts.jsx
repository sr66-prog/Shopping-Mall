import React from 'react';

const FeaturedProducts = ({ products }) => {
    return (
        <section style={{ textAlign: 'center', padding: '20px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }}>Featured Products</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            width: '250px',
                            padding: '15px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            transition: 'transform 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                marginBottom: '10px',
                            }}
                            loading="lazy"
                        />
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{product.name}</h3>
                        {product.isOnSale && (
                            <div>
                                <p style={{ textDecoration: 'line-through', color: '#888' }}>{product.price}</p>
                                <p style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>{product.discountPrice}</p>
                            </div>
                        )}
                        {!product.isOnSale && <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{product.price}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;