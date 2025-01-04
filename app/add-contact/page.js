"use client";
import { useState, useEffect } from "react";
import { useContacts } from "../contexts/ContactsContext";
import { useRouter } from "next/navigation";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();
  const { addContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, image, phone, email });
    router.push("/");
  };

  return (
    <div className="add-contact">
      <h1 className="title">Add Contact</h1>
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
    </div>
  );
};

export default AddContact;
