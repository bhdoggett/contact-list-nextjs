"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";

const ContactList = () => {
  const { contacts, get } = useContacts();

  return (
    <div>
      {contacts &&
        contacts.map((contact) => {
          return <Contact key={contact.email} contact={contact} />;
        })}
    </div>
  );
};

export default ContactList;
