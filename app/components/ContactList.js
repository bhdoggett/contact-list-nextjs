"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";

const ContactList = () => {
  const { contacts, isLoading } = useContacts();
  !isLoading && console.log("contacts:", contacts);

  return (
    <div>
      {!isLoading &&
        contacts.map((contact) => {
          return <Contact key={contact.email} contact={contact} />;
        })}
    </div>
  );
};

export default ContactList;
