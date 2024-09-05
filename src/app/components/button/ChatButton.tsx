import { useEffect } from "react";

const ChatButton = () => {
  useEffect(() => {
    (function (d, t) {
      const v = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: "6690e83a0b546ef70f50794b" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          autostart: true,
          assistant: {
            stylesheet: "verde.css",
          },
        });
      };

      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      if (s && s.parentNode) {
        s.parentNode.insertBefore(v, s);
      }
    })(document, "script");
  }, []);

  return null;
};

export default ChatButton;
