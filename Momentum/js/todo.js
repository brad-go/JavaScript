const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

const TODOS_KEY = 'todos';
const HIDDEN_CLASS = 'hidden';

// todo들이 담길 배열
let todos = [];

// save todo //
function saveTodos() {
  // localStorage에는 string만 저장할 수 있다. 그래서 todos를 그냥 보내면 id나 text를 확인할 수 없다. 객체를 string으로 변환하기 위해 JSON.stringify 활용하기
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// delete todo //
function deleteTodo(e) {
  // 일어난 이벤트를 통해서 삭제할 todo의 li를 찾기
  const li = e.target.parentElement;
  li.remove();
  // 새로고침 시, 삭제되지 않은 로컬스토리지에 의해서 다시 생성되는 todo를 지우기. li.id는 string이므로 parseInt를 통해서 정수로 변환해주기
  // 클릭한 li인 todo의 id와 todos배열에 있는 todo들의 id값이 다른지를 비교. 다르면 true => 배열에 저장, 틀리면 false => 삭제
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

// paint todo //
function paintTodos(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  btn.innerText = '❌';
  btn.addEventListener('click', deleteTodo);

  li.append(span, btn);
  todoList.appendChild(li);
}

// create todo //
function createTodo(e) {
  e.preventDefault();

  const newTodoText = todoInput.value;
  todoInput.value = "";

  const newTodo = {
    // todo들을 구별할 수 있게 id를 생성해서 부여
    id: Date.now(),
    text: newTodoText
  }

  // todos 배열에 새로 만들어진 todo를 넣어주기
  todos.push(newTodo);

  paintTodos(newTodo);
  saveTodos();
}

// todo들이 로컬 스토리지에 저장은 되지만 새로고침 시 화면에 보이지 않는다. 저장된 아이들을 화면에 재출력해주기
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  // string으로 저장된 todo들을 사용하기 위해 객체로 변환해주기
  const parsedTodos = JSON.parse(savedTodos);
  // parsedTodos의 각 todo들을 화면에 그려준다. 
  parsedTodos.forEach(paintTodos);
  // 새로 고침 시, localstorage에 있던 기존 todo들이 사라지는 것을 막기 위해 todos(새로고침시 빈 상태)에 값을 넣어준다. 
  todos = parsedTodos;
}

todoForm.addEventListener('submit', createTodo);