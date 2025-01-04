"use client";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import importedContacts from "../../public/contacts.json";

export const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(importedContacts);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
