import "./index.css";

import ReactDOM from "react-dom/client";
import TodoFooter from "./components/todo-footer";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import TodoProvider from "./components/todo-provider";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <TodoProvider>
      <div className="todoapp">
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </TodoProvider>,
  );
}
