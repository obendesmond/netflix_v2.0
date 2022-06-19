import React from "react";

export default function Hero({ children }) {
  return (
    <div
      style={{
        height: "93vh",
        width: "100vw",
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100% ), url('https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/5657bf35-6c18-4918-ad47-dab5ebea3063/CM-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "200px 0 0 0",
      }}
    >
      {children}
    </div>
  );
}
