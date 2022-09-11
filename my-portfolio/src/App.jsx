import Footer from "./component/Footer";
import Hero from "./component/Hero";

import head from "./assets/head.jpeg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={head} />
      </div>
	  <br/> 
      <br/> 
      <div className="card1">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
