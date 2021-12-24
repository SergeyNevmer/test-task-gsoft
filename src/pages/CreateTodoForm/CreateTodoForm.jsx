import React, { useState } from "react";
import styles from "./CreateTodoForm.module.scss";
import { NavBar } from "../../components/NavBar/NavBar";
import { TodoForm } from "../../components/TodoForm/TodoForm";

export const CreateTodoForm = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <NavBar />
      <main>
        <article>
          {isOpen === false && (
            <section className={styles.firstContainer}>
              <div className={styles.containerForText}>
                <p>Are you want to create a task now?</p>
                <p>Press the button!</p>
              </div>
              <button
                className={styles.btnCreateTodo}
                onClick={() => setOpen(!isOpen)}
              >
                Create Todo
              </button>
            </section>
          )}
          {isOpen && <TodoForm />}
        </article>
      </main>
    </>
  );
};
