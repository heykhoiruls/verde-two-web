"use client";
import Button from "@/components/ComponentsButton";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

const FormInput = () => {
  const [email, setEmail] = useState("");

  const addItemsAndDownloadPDF = async () => {
    // Add items to Firestore
    // if (email.trim() !== '') {
    // 	await addDoc(collection(db, 'users'), {
    // 		email: email.trim(),
    // 	})
    // 	setEmail('')
    // }
    // // Open PDF in a new tab/window
    // const pdfUrl =
    // 	'https://firebasestorage.googleapis.com/v0/b/verde-two-web.appspot.com/o/E-Booklet%20Verde%20Two%202020.pdf?alt=media&token=3cffaa57-0edb-4e62-b5dc-422634f52934'
    // window.open(pdfUrl, '_blank')
  };

  return (
    <div>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-color-call bg-color mb-4 w-full rounded-md border-none bg-black bg-opacity-35 px-8 py-5 text-sm text-white placeholder-white backdrop-blur-sm backdrop-filter focus:outline-none"
        type="email"
        placeholder="Enter your email, to get our e-booklet . . ."
      />
      <Button
        onClick={addItemsAndDownloadPDF}
        text="Get e-booklet"
        variant="secondary"
      />
    </div>
  );
};

export default FormInput;
