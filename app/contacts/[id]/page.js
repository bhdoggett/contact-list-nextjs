"use client";
import { useContacts, setContacts } from "@/app/contexts/ContactsContext";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const ContactDetail = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [showEditDetail, setShowEditDetail] = useState(false);
  const { contacts, setContacts } = useContacts();
  const { id } = useParams();
  const idNum = Number(id);

  if (!contacts.find((contact) => contact.id === idNum)) {
    return (
      <div>
        <h2>No contact matches ID: {id}</h2>
        <Link href="/contacts">
          <button>Back to Contacts</button>
        </Link>
      </div>
    );
  }

  const contact = contacts.filter((contact) => contact.id === idNum)[0];

  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");
  const [image, setImage] = useState(contact?.image || "");

  const updateContact = (e) => {
    e.preventDefault();

    setContacts(
      contacts.map((contact) =>
        contact.id === idNum
          ? { id: idNum, name, email, phone, image }
          : contact
      )
    );

    setShowDetail(true);
    setShowEditDetail(false);
  };

  return (
    <div>
      {showDetail && !isDeleted && (
        <div class="contact-card-container">
          <div className="contact-card">
            <img src={contact?.image} />
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
            <Link href="/">
              <button className="back-to-list">Back to Contacts</button>
            </Link>
          </div>
        </div>
      )}

      {showEditDetail && (
        <div className="contact-edit">
          <h1 className="title">Edit Contact</h1>
          <form onSubmit={updateContact}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                required
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
                required
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
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label for="image-url">Image URL</label>
              <input
                type="url"
                id="image-url"
                placeholder="Enter Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
