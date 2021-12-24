import React, { useState, useEffect /*useCallback*/ } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { ItemTodo } from "../../components/ItemTodo/ItemTodo";
import { v4 as uuidv4 } from "uuid";
// import { useDispatch } from "react-redux";
// import { addResponseFromServer } from "../../redux/actions";
import styles from "./Todos.module.scss";

export const Todos = () => {
  const [listTodos, setlistTodos] = useState([]);
  // const dispatch = useDispatch();
  const tasks = useSelector((state) => state.saveTodoReducer);

  // const addTodo = useCallback(
  //   (array) => dispatch(addResponseFromServer(array)),
  //   [dispatch]
  // );

  useEffect(() => {
    // console.log(1);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) =>
        data.map((item) => {
          item.id = uuidv4();
          return { ...item };
        })
      )
      .then((dataWithUpdateId) => setlistTodos(dataWithUpdateId));
  }, []);

  useEffect(() => {
    // console.log(2);
  }, [listTodos]);

  return (
    <>
      <NavBar />
      <ul className={styles.list}>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <ItemTodo
              key={task.id}
              task={task.title}
              status={task.completed}
              id={task.id}
            />
          ))}
      </ul>
    </>
  );
};

// .then((dataWithUpdateId) => console.log(dataWithUpdateId));
