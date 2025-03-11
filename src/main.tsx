import "./index.css";

import { PostHogProvider } from "posthog-js/react";
import ReactDOM from "react-dom/client";
import TodoFooter from "./components/todo-footer";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import TodoProvider from "./components/todo-provider";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <PostHogProvider
      apiKey={import.meta.env.VITE_POSTHOG_API_KEY}
      options={{
        api_host: import.meta.env.VITE_POSTHOG_API_HOST,
      }}
    >
      <TodoProvider>
        <div className="todoapp">
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </div>
      </TodoProvider>
    </PostHogProvider>,
  );
}
