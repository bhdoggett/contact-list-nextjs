"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className="title">Contacts Home</h1>
        <form>
          <input
            placeholder="Search Contacts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button>Search</button>
        </form>
        <ContactList />
        <Link href="/add-contact">Add Contact</Link>
      </div>
    </main>
  );
}
