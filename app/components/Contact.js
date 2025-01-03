"use client";

const Contact = ({ contact }) => {
  return (
    <div className="contact-detail">
      <div className="row">
        <div className="col-md-2">{contact.image}</div>
        <div className="col-md-2">{contact.name}</div>
        <div className="col-md-2">{contact.phone}</div>
        <div className="col-md-2">{contact.email}</div>
      </div>
    </div>
  );
};

export default Contact;
