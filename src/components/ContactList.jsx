import React from 'react';
import { useSelector } from "react-redux";
import { getFilter } from '../selectors/contacts-selector';
// import { useDeleteContactsMutation, useFetchContactsQuery } from '../redux/reducers/contactsSlice';
import { useFetchContactsQuery } from '../redux/reducers/contactsSlice';
import PropTypes from "prop-types";
// import { Spinner } from "../components/Spinner/Spinner";
import { List } from "../components/ContactList.styled";
import { ContactItem } from "./ContactItem";

function ContactList() {
  const { data: contactList } = useFetchContactsQuery();
  // const [onDeleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
  const filterValue = useSelector((state) => getFilter(state));//получаем доступ к filter (store.js)
  const contacts = contactList?.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
  );

  
  
  return (
    <List >
      {contactList && contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact}/>
       
      ))}
      
    </List>
  );
  // return (
  //   <List>
  //     {contactList && contacts.map((contact) => (
  //     // {filtered.map((contact) => (
  //       <Item key={contact.id} >
  //         <p>{contact.name}</p>
  //         <p>{contact.number}</p>
  //         <button type="button" onClick={() => onDeleteContact(contact.id)}>
  //             {isDeleting && <Spinner size={20} />}
  //           Удалить</button>
  //       </Item>
  //     ))}
  //   </List>
  // );
}
ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;