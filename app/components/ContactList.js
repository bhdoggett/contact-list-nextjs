"use client";
import { useContacts } from "../contexts/ContactsContext";
import Contact from "./Contact";
import PropTypes from "prop-types";

const ContactList = ({ search }) => {
  const { contacts } = useContacts();

  let filterdContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );

  return (
    <>
      <div className="contact-title">
        <div className="contact-column "></div>
        <div className="contact-column header">Name</div>
        <div className="contact-column header phone">Phone Number</div>
        <div className="contact-column header email">E-mail</div>
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
