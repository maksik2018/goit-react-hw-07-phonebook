import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

export default function App() {
  return (
    <Container>
      <h1> Phonebook </h1>
      <h2>Add new contact</h2>
      {/* <ContactForm onSubmit={addContact} /> */}
      <ContactForm />
      <h2>Find contact</h2>
      <Filter />
      {/* <Filter value={filter} onChange={onFilterChange} /> */}
      <h2>Contact list</h2>
      {/* <ContactList contacts={filterByName()} onDeleteContact={deleteContact} /> */}
      <ContactList />
    </Container>
  );
}
