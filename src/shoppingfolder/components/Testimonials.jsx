import React from 'react';

const Testimonials = ({ data }) => {
    return (
        <section style={{ textAlign: 'center', padding: '20px' }}>
            <h2>What Our Customers Say</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
                {data.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        style={{
                            width: '300px',
                            margin: '10px',
                            padding: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                        }}
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                marginBottom: '10px',
                            }}
                            loading="lazy"
                        />
                        <h3 style={{ margin: '10px 0' }}>{testimonial.name}</h3>
                        <p style={{ fontStyle: 'italic', color: '#555' }}>"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;