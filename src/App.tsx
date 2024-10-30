import "./App.css";

import MyTitle from "./assets/MyTitle";
import  Component  from "./assets/Component";
import data from "./data/data.json"
import Prez from "./assets/prez";
import ContactForm from "./formulaire";
function App() {
  return (
    <div>

      <div className="background">

      <div className="divlien">
       
        <a href=""><img className="lien" src="./photos/in.png" alt="lien linkedin" /></a>
        <a href=""><img className="lien"src="./photos/gh.png" alt="lien github" /></a>
      </div>
      <img className="logo"src="./photos/logo2.png" alt="" />
      <h2>Rudy Robert</h2>
   
      <img className="pix1 "src="./photos/pix.png" alt="" />
    <section>
      <MyTitle />
    </section>

    <section className="divcomp">
      <img className="comp" src="./photos/n.webp" alt=""  />
      <img className="comp" src="./photos/v.png" alt=""  />
      <img className="comp" src="./photos/r.png" alt=""  />
    </section>

    <section className="prez"><Prez/></section>


  </div>
    
    <section className="container">
      {data.map((Components)=>(
        <Component
         name={Components.name} 
        image={Components.image}
        lien={Components.lien}/>
      ))}
     </section>

     <div>
      <h3>Formulaire de Contact</h3>
      <ContactForm />
    </div>



    <section className="header"><p className="p">© Tous droits réservés. Site créé par Rudy Robert☠️
    </p></section>


    </div>
  );
}

export default App;