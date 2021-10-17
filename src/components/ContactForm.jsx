import { React, useState } from 'react';
import { useCreateContactsMutation, useFetchContactsQuery } from '../redux/reducers/contactsSlice';
import { Spinner } from "../components/Spinner/Spinner";
import PropTypes from 'prop-types';

function ContactForm() {
  const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const [createContact,  { isLoading: isCreating }] = useCreateContactsMutation();
  const { data: contacts } = useFetchContactsQuery();
  
 
  const onChange = e => {
       const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
     const checkOnContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkOnContact) {
      alert(`${name} is already in contacts`);
      setName("");
      setNumber("");
      return;
    }
     if (name === "" && number === "") {
      alert("Please fill empty fields");
      return;
    }
    createContact({ name, number });
    setName("");
    setNumber("");
      };

    
    return (
      <form onSubmit={handleSubmit}>
         <input
          placeholder="indicate your name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
        />
           <input
          placeholder="indicate your phone number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChange}
        />
        <button type='submit'>
           {isCreating && <Spinner size={20} />}
          Add contact</button>
        
      </form>
    );
  }


ContactForm.propTypes = {
    contacts: PropTypes.func,
};

export default ContactForm;
