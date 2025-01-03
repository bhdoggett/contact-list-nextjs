"use client";
import Image from "next/image";

const Contact = ({ contact }) => {
  return (
    <div className="contact-detail">
      <div className="row">
        <div className="col-md-2">
        <Image
        src={contact.image}
        width={50}
        height={30}
        style={{ borderRadius: '10px' }}
      />
        <div className="col-md-2">{contact.name}</div>
        <div className="col-md-2">{contact.phone}</div>
        <div className="col-md-2">{contact.email}</div>
      </div>
    </div>
  );
};

export default Contact;
