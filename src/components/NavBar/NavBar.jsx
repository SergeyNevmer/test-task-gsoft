import React from "react";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <header className={styles.container}>
    <nav>
      <ul className={styles.listOfItems}>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/"
          >
            Create Todo Form
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/todos"
          >
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
