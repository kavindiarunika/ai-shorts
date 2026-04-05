"use client";

import React, { useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";

function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  const isNewUser = useCallback(async () => {
    try {
      const res = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user?.fullName ?? "Anonymous",
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl ?? "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("API Error:", data);
      } else {
        console.log("User created successfully:", data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }, [user]);

  useEffect(() => {
    // ✅ Only call API if email exists
    if (user?.primaryEmailAddress?.emailAddress) {
      isNewUser();
    }
  }, [user, isNewUser]);

  return <div>{children}</div>;
}

export default Provider;