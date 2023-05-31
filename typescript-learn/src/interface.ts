// Todo 인터페이스를 작성합니다.
interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

// Todo 인터페이스를 타입으로 받는 todos를 완성합니다.
let todos: Todo[] = [];

// Todo 인터페이스를 타입으로 받는 addTodo를 완성합니다.
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// Todo 인터페이스를 타입으로 받는 newTodo를 완성합니다.
const newTodo: Todo = {
  id: 1,
  content: 'learn typescript',
  isDone: false,
};

addTodo(newTodo);

console.log(todos);
