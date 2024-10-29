import "./App.css";

import MyTitle from "./assets/MyTitle";
import  Component  from "./assets/Component";
import data from "./data/data.json"

function App() {
  return (
    <div>

<div className="background">
      <div className="divlien">
        <a href=""><img className="lien" src="./photos/in.png" alt="lien linkedin" /></a>
        <a href=""><img className="lien"src="./photos/gh.png" alt="lien github" /></a>
      </div>
     
      <h2>Rudy Robert</h2>
   
      <img className="pix1 "src="./photos/pix.png" alt="" />
    <section>
      <MyTitle />
    </section>

  </div>
    
    <section className="container">
      {data.map((Components)=>(
        <Component
         name={Components.name} 
        image={Components.image}
        lien={Components.lien}/>
      ))}
     
      

    </section>

    </div>
  );
}

export default App;