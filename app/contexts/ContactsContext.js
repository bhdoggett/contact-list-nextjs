"use client";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import importedContacts from "../../public/contacts.json";

export const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(importedContacts);
  const [id, setId] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const getNextId = () => {
    const contactIds = contacts.map((contact) => parseInt(contact.id));
    return Math.max(...contactIds, 0) + 1;
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, addContact, getNextId }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
