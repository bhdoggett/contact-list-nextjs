"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";

const ContactList = ({ search }) => {
  const { contacts } = useContacts();

  let filterdContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );

  console.log("contacts:", contacts);

  return (
    <div>
      {filterdContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
