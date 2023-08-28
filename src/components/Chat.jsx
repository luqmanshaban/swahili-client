import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    // Paste the Tawk.to script here
    // var Tawk_API = Tawk_API || {};
    // var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/64e620ddcc26a871b030f02f/1h8hf0pb1';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
      {/* Your component's content */}
    </div>
  );
}

export default Chat;
