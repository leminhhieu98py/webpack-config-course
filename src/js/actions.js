import todoItems from '../data.json';
import styles from '../css/style.module.scss';

let data = todoItems;

function getAllTodos() {
  return data;
}

function addTodo(todo) {
  data.push(todo);
}

function removeTodo(id) {
  data = data.filter(function (item) {
    return item.id !== id;
  });
}

function updateTodo(id, completed) {
  const itemIndex = data.findIndex(function (value) {
    return value.id === id;
  });
  data[itemIndex].completed = completed;
}

function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? 'completed' : '';
    const completionClass = todo.completed ? 'checked' : '';
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>
                    <input class="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
                <span class="${styles.red}"> module</span>
            </li>
        `;
  });
  document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');
}

function clearNewTodoInput() {
  document.querySelector('.new-todo').value = '';
}

function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function newTodoEventHandler(event) {
  let text = event.target.value;
  addTodo({
    id: Date.now(),
    text: text,
    completed: false
  });
  renderTodos(getAllTodos());
  clearNewTodoInput();
}

function removeTodoEventHandler(event) {
  const id = getTodoId(event.target);
  removeTodo(id);
  renderTodos(getAllTodos());
}

function toggleTodoEventListener(event) {
  const id = getTodoId(event.target);
  const isCompleted = event.target.checked;
  updateTodo(id, isCompleted);
  renderTodos(getAllTodos());
}

export {
  removeTodoEventHandler,
  toggleTodoEventListener,
  onLoadEventHandler,
  newTodoEventHandler
};
