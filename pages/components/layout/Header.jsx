import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
}
