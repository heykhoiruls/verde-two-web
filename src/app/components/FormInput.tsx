"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

// Importing Button dynamically to disable SSR for this component
const Button = dynamic(() => import("@/components/ComponentsButton"), {
  ssr: false,
});

const FormInput = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const download = async () => {
    if (email.trim() !== "" && isValidEmail) {
      await addDoc(collection(db, "users"), {
        email: email.trim(),
      });
      setEmail("");
      const pdfUrl =
        "https://firebasestorage.googleapis.com/v0/b/verde-two-web.appspot.com/o/E-Booklet%20Verde%20Two%202020.pdf?alt=media&token=3cffaa57-0edb-4e62-b5dc-422634f52934";
      if (typeof window !== "undefined") {
        window.open(pdfUrl, "_blank");
      }
    }
  };

  return (
    <div>
      <input
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="bg-color-call bg-color mb-4 w-full rounded-md border-none bg-black bg-opacity-35 px-8 py-5 text-sm text-white placeholder-white backdrop-blur-sm backdrop-filter focus:outline-none"
        type="email"
        placeholder="Enter your email, to get our e-booklet . . ."
      />
      <Button
        onClick={download}
        text="Get e-booklet"
        variant="secondary"
        disabled={!isValidEmail}
      />
    </div>
  );
};

export default FormInput;
