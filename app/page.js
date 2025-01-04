"use client";
// import styles from "./page.module.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <h1 className="title">Contacts Home</h1>
      <div className="search-bar">
        <form>
          <input
            placeholder="Search Contacts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button>Search</button>
        </form>
      </div>
      <ContactList />
      <Link href="/add-contact">
        <div className="button-wrapper">
          <button className="add-contact-button">Add Contact</button>
        </div>
      </Link>
    </main>
  );
}
