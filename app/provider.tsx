"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) isNewUser();
  }, [user]);

  const isNewUser = async () => {
    await fetch("/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user?.fullName ?? "Anonymous",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
      }),
    });
  };

  return <div>{children}</div>;
}

export default Provider;
