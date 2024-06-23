import React from "react";
import { Link } from "react-router-dom";

export default function CustomLink({ to, children, className, ...props }) {
  return (
    <Link to={to} className={`${styles.link} ${className}`} {...props}>
      {children}
    </Link>
  );
}
