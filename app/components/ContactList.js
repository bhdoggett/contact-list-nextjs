"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";

const ContactList = ({ search }) => {
  const { contacts, isLoading } = useContacts();
  !isLoading && console.log("contacts:", contacts);

  let filterdContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );

  return (
    <div>
      {filterdContacts.map((contact) => {
        return <Contact key={contact.email} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
