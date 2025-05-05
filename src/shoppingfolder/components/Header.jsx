import React from 'react';

const Header = ({ cartCount = 0 }) => {
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${e.target.value}`);
        }
    };

    return (
        <div className="headerSection">
            <div className="left">
                <div className="title">
                    <h2>Shopping Mall</h2>
                </div>
            </div>

            <div className="center">
                <ul>
                    <li>Woman</li>
                    <li>Men</li>
                    <li>Children</li>
                    <li>Beauty</li>
                </ul>
            </div>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search..."
                    onKeyDown={handleSearch}
                />
            </div>

            <div className="right">
                <div className="signin">
                    Signin / Signup
                </div>

                <div className="cart">
                    Cart
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
