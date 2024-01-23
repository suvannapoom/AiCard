import React, { useEffect } from "react";
import Loading from "../../layouts/Loading";

export default function ErrorNavigate() {
  useEffect(() => {
    // window.parent.location.href = "https://ai-card-q.vercel.app/errorpage";
    //   return () => {
    //     second
    //   }
  }, []);

  return <Loading />;
}
