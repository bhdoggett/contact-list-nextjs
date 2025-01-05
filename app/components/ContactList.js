"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";
import PropTypes from "prop-types";

const ContactList = ({ search }) => {
  const { contacts } = useContacts();

  let filterdContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );

  console.log("contacts:", contacts);

  return (
    <>
      <div className="contact-title">
        <div class="contact-column "></div>
        <div class="contact-column header">Name</div>
        <div class="contact-column header phone">Phone Number</div>
        <div class="contact-column header email">E-mail</div>
      </div>
      {filterdContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </>
  );
};

ContactList.propTypes = {
  search: PropTypes.string.isRequired,
};

export default ContactList;
