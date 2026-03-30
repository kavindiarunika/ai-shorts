"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EmptyState from "./_components/EmptyState";

type Video = {
  id: string;
  title: string;
  // add more fields if needed
};

function Dashboard() {
  const [videoList, setVideoList] = useState<Video[]>([]);

  return (
    <div className="p-5">

      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>

        <Button className="bg-[#8338ec]">+ Create New</Button>
      </div>

      {/* Empty State */}
      {videoList.length === 0 && (
        <div className="mt-10">
          <EmptyState />
        </div>
      )}
    </div>
  );
}

export default Dashboard;