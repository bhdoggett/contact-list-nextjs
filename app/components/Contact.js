"use client";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useContacts } from "../contexts/ContactsContext";

const Contact = ({ contact }) => {
  const url = contact?.image;
  const router = useRouter();
  const { contacts, setContacts } = useContacts();

  const handleViewClick = () => {
    router.push(`/contacts/${contact.id}`);
  };

  const deleteContact = () => {
    const updatedContacts = contacts.filter(
      (checkContact) => checkContact !== contact
    );
    setContacts(updatedContacts); // Update the context/state

    router.push("/contacts");
  };
  return (
    <div className="contact-detail">
      <img src={url} className="img-fluid" />
      <div className="contact-column name">{contact?.name}</div>
      <div className="contact-column phone">{contact?.phone}</div>
      <div className="contact-column email">{contact?.email}</div>
      <button className="contact-column" onClick={handleViewClick}>
        View
      </button>
      <button className="contact-column delete" onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Contact;
