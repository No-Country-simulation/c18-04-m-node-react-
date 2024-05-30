import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-black text-yellow-500">
            <div className="flex items-center">
                <img src="/src/images_Home/logo_legal_builder.svg" alt="Legal Builder Logo" className="h-10 w-10" />
                <h1 className="ml-4 text-2xl">Legal Builder</h1>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="hover:underline">Login</a>
                <a href="#" className="hover:underline">Register</a>
            </div>
        </header>
    );
};

export default Header;
