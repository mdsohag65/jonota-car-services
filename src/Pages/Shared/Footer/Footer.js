import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer style={{ position: "fixed", bottom: 0, width: "100%" }} className='text-center mt-5 bg-dark text-white p-5'>
            <p><small>copyright@ {year} All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;