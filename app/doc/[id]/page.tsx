"use client";

function DocumentPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <b>Document ID:</b> {id}
    </div>
  );
}

export default DocumentPage;
