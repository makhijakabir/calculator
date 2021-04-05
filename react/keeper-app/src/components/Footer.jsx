import React from "react";

function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer>
            <p>Kabir Makhija {currentYear}</p>
        </footer>
    );
}

export default Footer;