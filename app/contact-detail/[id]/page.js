"use client";
import { useContacts, setContacts } from "@/app/contexts/ContactsContext";
import { useParams } from "next/navigation";
import { useState } from "react";

const ContactDetail = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [showEditDetail, setShowEditDetail] = useState(false);
  const { contacts, setContacts } = useContacts();

  const { id } = useParams();
  const idNum = Number(id);

  console.log("contacts:", contacts, "| id:", idNum);
  const contact = contacts.filter((contact) => contact.id === idNum)[0];

  console.log("contact:", contact);

  return (
    <div>
      {showDetail && (
        <div className="contact-card">
          <img src={contact.image} />
          <h3>{contact.name}</h3>
          <h4>{contact.email}</h4>
          <h4>{contact.phone}</h4>
          <button
            onClick={() => {
              setShowDetail(false);
              setShowEditDetail(true);
            }}
          >
            Edit Contact
          </button>
        </div>
      )}
      {showEditDetail && (
        <div className="contact-edit">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <button
            onClick={() => {
              setShowDetail(true);
              setShowEditDetail(false);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
