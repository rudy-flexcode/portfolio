import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log({ name, email, message });
  
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
