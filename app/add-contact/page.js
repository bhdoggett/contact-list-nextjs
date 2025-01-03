"use client";
import { useState, useEffect } from "react";
import { useContacts } from "../contexts/ContactsContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  const { add } = useContacts();

  return (
    <div className="add-contact-form m-4">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            class="form-control"
            placeholder="Enter email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onSubmit={(e) => {
            e.preventDefault();
            add({ name, image, phone, email });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
