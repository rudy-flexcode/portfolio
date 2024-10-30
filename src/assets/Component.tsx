interface ComponentsProps{
    name:string;
    image:string;
    lien:string;
}






function Components({name, image,lien} : ComponentsProps) {
    return (
        <div className="card">
        <h3>{name}</h3>    
        <img 
         className="pixprojet"
         src={image}
         alt="projet1"
         />
         <button className="button">click here {lien}</button>
        
        </div> 
    )
    
  }

  export default Components 
    
     
   
  
  
