import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-yellow-400 font-marcellus">
      <Header />
      <main className="flex flex-col items-center text-center flex-grow">
        <div className="">
          <div className="mb-8">
            <img src="/src/images_Home/logo_legal_builder.svg" alt="Legal Builder Logo" className="h-24 w-24" />
          </div>
          <h2 className="text-4xl mb-2">Legal Builder</h2>
          <p className="text-sm text-gray-400">Descripción general de la aplicación en pocas palabras</p>
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
