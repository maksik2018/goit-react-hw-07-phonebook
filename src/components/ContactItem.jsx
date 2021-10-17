import { useDeleteContactsMutation } from '../redux/reducers/contactsSlice';
import { Spinner } from './Spinner/Spinner';
import { Item } from "./ContactList.styled";


export const ContactItem = ({ name, number, id } ) => {
    const [onDeleteContact, { isLoading: isDeleting }] = useDeleteContactsMutation();
       return (
            <Item>
            <p>{name}</p>
            <p>{number}</p> 
      <button onClick={() => onDeleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={20} />}
        Delete
      </button>
    </Item>
  );
};