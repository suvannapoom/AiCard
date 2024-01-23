import React, { useEffect } from "react";

export default function ErrorNavigate() {
  useEffect(() => {
    window.parent.location.href = "https://ai-card-q.vercel.app/errorpage";

    //   return () => {
    //     second
    //   }
  }, [third]);

  return <div>Yoooooooooooooooooooooooooooooooooooooooooooooooooo</div>;
}
