"use client";
import Image from "next/image";

const Contact = ({ contact }) => {
  const url = contact.image;

  return (
    <div className="contact-detail">
      <img src={url} className="img-fluid" />
      <div className="col-md-2">{contact.name}</div>
      <div className="col-md-2">{contact.phone}</div>
      <div className="col-md-2">{contact.email}</div>
    </div>
  );
};

export default Contact;
