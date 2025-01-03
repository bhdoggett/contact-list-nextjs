"use client";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

export const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const get = async () => {
    try {
      const result = await axios.get("./contacts.json");
      setContacts(result.data);
      console.log(contacts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => get, []);

  console.log(contacts);

  const add = async (contact) => {
    try {
      setContacts([...contacts, contact]);
      axios.post("./contacts.json", contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactsContext.Provider value={{ contacts, add, get }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
