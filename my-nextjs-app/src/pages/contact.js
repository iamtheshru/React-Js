// pages/contact.js
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
       <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/contact">
        <span>Contact Us</span>
      </Link>
      <Link href="/aboutus">
        <span>About Us</span>
      </Link>
      <Link href="/team">
        <span>Team</span>
      </Link>
      <Link href="/login">
        <span>Login</span>
      </Link>
      <h1>Contact Us</h1>
      <p>You can reach us at example@email.com</p>
    </div>
  );
};

export default Contact;
