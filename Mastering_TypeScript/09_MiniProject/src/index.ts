// non null assertion operator
// const btn = document.getElementById("btn")!; This only exists in TS
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

interface Todo {
  text: string;
  completed: boolean;
}

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
};

const saveTodos = (): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todos: Todo[] = readTodos();

const createTodoElement = (todo: Todo) => {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed

  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
};

todos.forEach(createTodoElement);

const handleSubmit = (e: SubmitEvent): void => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodoElement(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
};

form.addEventListener("submit", handleSubmit);
