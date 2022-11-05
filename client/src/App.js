import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
// import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
// import HouseDetails from './components/PropertyDetails/HouseDetails';

import './App.css';

const Routing = ()=>{

  return(
    <Routes>
        <Route exact path='/' element={<Home />} />
        
    </Routes>
  )
}

function App() {
  return (
    <HouseProvider>
      <Container maxW='container.xl' px='6'>
        <Header />
        <Routing />
      </Container>
      <Footer />
    </HouseProvider>
  );
}

export default App;
