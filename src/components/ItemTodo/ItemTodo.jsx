import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./ItemTodo.module.scss";
import { changeStatus } from "../../redux/actions";
import { removeTodo } from "../../redux/actions";

export const ItemTodo = ({ task, status, id }) => {
  const dispatch = useDispatch();

  const updateStatus = useCallback(
    (id) => dispatch(changeStatus(id)),
    [dispatch]
  );

  const remove = useCallback((id) => dispatch(removeTodo(id)), [dispatch]);

  const updateHandleClick = (event) => {
    updateStatus(event.target.id);
  };

  const removeHandleClick = (event) => {
    remove(event.target.id);
  };

  return (
    <li className={styles.container}>
      <div className={styles.containerForText}>
        <p>Task : {task}</p>
        <p>Status: {status ? "Done" : "In progress"}</p>
      </div>
      <div className={styles.containerForBtn}>
        <button
          className={styles.bthChange}
          id={id}
          onClick={updateHandleClick}
        >
          Change status
        </button>
        <button
          className={styles.btnRemove}
          id={id}
          onClick={removeHandleClick}
        >
          Remove task
        </button>
      </div>
    </li>
  );
};
