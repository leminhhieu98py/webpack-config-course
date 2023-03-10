import {
  removeTodoEventHandler,
  toggleTodoEventListener,
  onLoadEventHandler,
  newTodoEventHandler
} from './actions';

import '../css/index.css';

window.addEventListener('load', onLoadEventHandler);

document.addEventListener('change', function (event) {
  if (event.target.classList.contains('new-todo')) {
    newTodoEventHandler(event);
  }
});
// hello3
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    removeTodoEventHandler(event);
  }
  if (event.target.classList.contains('real-checkbox')) {
    toggleTodoEventListener(event);
  }
});
