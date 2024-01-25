import React, { useEffect } from "react";

export default function ErrorNavigate() {
  useEffect(() => {
    window.parent.location.href = "https://ai-card-q.vercel.app/errorpage";
  }, []);

  return <div className="w-screen h-screen bg-white"></div>;
}
