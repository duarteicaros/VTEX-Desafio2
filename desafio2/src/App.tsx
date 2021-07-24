import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';


const App: React.FC = () => {
  return (
    <>
    <Header/>
    <Routes/>
    <Footer/>
    </>
  );
}

export default App;
