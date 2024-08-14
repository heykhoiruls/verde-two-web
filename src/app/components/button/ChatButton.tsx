import React, { useEffect } from "react";
import ComponentsNavBottom from "@/components/ComponentsNavBottom";

const ChatButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "6690e83a0b546ef70f50794b" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        autostart: true,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <button id="chat-button">
      <ComponentsNavBottom src="/logos/chat.svg" />
    </button>
  );
};

export default ChatButton;
