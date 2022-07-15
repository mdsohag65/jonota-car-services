import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    // const style = {
    //     marginTop: "90px",
    //     padding: '20px',
    //     position: "fixed",
    //     bottom: 0,
    //     left: 0,
    //     height: "30px",
    //     width: "100%"
    // }
    return (
        <footer className='text-center mt-5 p-5 bg-dark text-white'>
            <p><small>copyright@ {year} All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;