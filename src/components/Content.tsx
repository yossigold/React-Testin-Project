import React from "react";

export default function Content(props: { head: string; body: string }) {
  return (
    <>
      <h1>{props.head}</h1>
      <div>{props.body}</div>;
    </>
  );
}
