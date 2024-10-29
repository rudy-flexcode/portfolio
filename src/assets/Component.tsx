interface ComponentsProps{
    name:string;
    image:string;
    lien:string;
}






function Components({name, image,lien} : ComponentsProps) {
    return (
        <div>
        <figcaption>{name}</figcaption>    
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
    
     
   
  
  
