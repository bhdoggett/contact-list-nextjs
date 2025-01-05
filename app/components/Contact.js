"use client";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
  const url = contact?.image;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contacts/${contact.id}`);
  };

  return (
    <div className="contact-detail" onClick={handleClick}>
      <img src={url} className="img-fluid" />
      <div className="contact-column name">{contact?.name}</div>
      <div className="contact-column phone">{contact?.phone}</div>
      <div className="contact-column email">{contact?.email}</div>
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
