import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./containers/Header/Header";
import ProductListing from "./containers/ProductListing/ProductListing";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import Footer from './containers/Footer/Footer';
import "./App.css";


function App(){
    return (
        <Router>
        <div className="App">
           <Header />
           <div className="container">
           <Routes>
              <Route exact path="/" element= {<ProductListing/>}/> 
              <Route exact path="/product/:productId" element= {<ProductDetails/>}/>
              <Route>404 Not FOUND!!</Route>
           </Routes>
           </div>
           <Footer />
        </div>
          </Router>
       
    );
}

export default App;