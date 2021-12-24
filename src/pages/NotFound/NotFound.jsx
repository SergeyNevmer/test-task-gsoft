import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className={styles.container}>
    <p>Sorry, the page was not found.</p>
    <p>
      Please go to&nbsp;
      <Link className={styles.link} to="/">
        Create Todo Form
      </Link>
      &nbsp;page or&nbsp;
      <Link className={styles.link} to="/todos">
        Todos
      </Link>
      &nbsp;page.
    </p>
  </div>
);
