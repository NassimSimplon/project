 import test from "./test.scss"
import Button from "./HOC/Button";
import FirstSection from "./FirstSection";
import About from "./About";
import Product from "./Product";
 


function App() {
  

   return (
    <div className="conatiner-fluid"   >
  <FirstSection />
  <About/>
  <Product/>
       </div>
  );
}

export default App;
