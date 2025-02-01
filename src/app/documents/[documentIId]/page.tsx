import React from "react";
import Editor from "./editor";
import Toolbar from "./toolbar";

interface Props {
  params: Promise<{ documentId: string }>;
}

export default async function Page({ params }: Props) {
  const { documentId } = await params;
  console.log(documentId);
  return (
    <div className="min-h-screen">
      <Toolbar />
      <Editor />
    </div>
  );
}
