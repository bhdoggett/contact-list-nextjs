"use client";
import { useState } from "react";
import ContactList from "../components/ContactList";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>
      <h1 className="title">Contacts Home</h1>
      <div className="search-bar">
        <input
          placeholder="Search Contacts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <ContactList search={search} />
      <Link href="/contacts/new">
        <div className="button-wrapper">
          <button className="add-contact-button">Add Contact</button>
        </div>
      </Link>
    </main>
  );
}
