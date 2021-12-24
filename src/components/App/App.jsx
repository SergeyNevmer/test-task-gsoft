import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateTodoForm } from "../../pages/CreateTodoForm/CreateTodoForm";
import { Todos } from "../../pages/Todos/Todos";
import { NotFound } from "../../pages/NotFound/NotFound";

export const App = () => (
  <Routes>
    <Route path="/" exact element={<CreateTodoForm />} />
    <Route path="/todos" element={<Todos />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
