export type ActionType =
  | { type: 'add'; title: string }
  | { type: 'remove'; id: string }
  | { type: 'edit'; todo: Todo }
  | { type: 'toggle-all'; checked: boolean }

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export interface TodoProviderState {
  todos: Todo[]
  dispatch: React.Dispatch<ActionType>
}
