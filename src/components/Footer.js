import React from 'react';

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">© {year} Mesto Russia</p>
        </footer>
    );
}

export default Footer