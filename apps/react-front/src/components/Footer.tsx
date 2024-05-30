import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full flex justify-end p-4 bg-gray-800 text-gray-400">
            <div className="flex space-x-4">
                <a href="#"><img src="/src/images_Home/libro_footer.svg" alt="Icon 1" /></a>
                <a href="#"><img src="/src/images_Home/apilados.svg" alt="Icon 2" /></a>
                <a href="#"><img src="/src/images_Home/templo.svg" alt="Icon 3" /></a>
            </div>
        </footer>
    );
};

export default Footer;
