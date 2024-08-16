import React, { useCallback, useState } from "react";
import Button from "@/components/ComponentsButton";
import TagManager from "react-gtm-module";

const contactInfo = {
  whatsapp: {
    phoneNumber: "+6287781181180",
    message: `and I'm interested about the apartments available at Verde Two. Could you please provide me with additional information ?\n\nThank you!`,
  },
  email: {
    address: "verdetwo@gmail.com",
    subject: "Inquiry - Apartments at Verde Two",
    body: `and I'm interested about the apartments available at Verde Two. Could you please provide me with additional information ?\n\nThank you!`,
  },
};

const generateContactUrl = (type: any, name: any) => {
  const { phoneNumber, message } = contactInfo.whatsapp;
  const { address, subject, body } = contactInfo.email;
  switch (type) {
    case "whatsapp":
      return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi there! I am ${name}! ${message}`)}`;
    case "email":
      return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi there! I am ${name}! ${body}`)}`;
    default:
      return "";
  }
};
const ComponentsInput = () => {
  const [name, setName] = useState("");

  const openContactUrl = useCallback(
    (type: any) => {
      const url = generateContactUrl(type, name);
      if (url) {
        TagManager.dataLayer({
          dataLayer: {
            event: "ContactForm",
          },
        });
        window.location.href = url;
      }
    },
    [name],
  );
  return (
    <section>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-color-call bg-color mb-4 w-full rounded-md border-none bg-black bg-opacity-35 px-8 py-5 text-sm text-white placeholder-white backdrop-blur-sm backdrop-filter focus:outline-none"
        type="name"
        placeholder="Enter your name, and send us a message . . ."
      />
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          text="Send Email"
          route={() => openContactUrl("email")}
        />
        <p className="text-white">or</p>

        <Button
          variant="ghost"
          text="Start Whatsapp"
          route={() => openContactUrl("whatsapp")}
        />
      </div>
    </section>
  );
};

export default ComponentsInput;
