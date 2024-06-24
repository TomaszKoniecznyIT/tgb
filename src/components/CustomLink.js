import React from "react";
import { Link } from "react-router-dom";
import styles from "./CustomLink.module.css";

export default function CustomLink({ to, children, className, ...props }) {
  return (
    <Link to={to} className={`${styles.link} ${className}`} {...props}>
      {children}
    </Link>
  );
}
