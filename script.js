var state = {
    todos: ['buy milk','complete assignment','buy vegetables'],
  };

var todoList = document.getElementById('todo-list');
var work = document.getElementById('work');
var btn = document.getElementById('btn-add');

btn.addEventListener('click', addTodoItem);

function addTodoItem(e) {
    e.preventDefault();
    if (work.value !== ""){
    state.todos.push(work.value);
    addItemShow(work.value);
    work.value = "";
    }
}

function addItemShow(item) {
    var div = document.createElement('div');
    div.className = 'list';
    div.innerHTML = `<span id="item-${item}">${item}</span>
    <button onclick="double('${item}')">Double</button>
    <button onclick="edit('${item}')">Edit</button>
    <i onclick="deleteItem('${item}')" class="fa fa-times" aria-hidden="true"></i>`;
    todoList.appendChild(div);
}

function deleteItem(item) {
  // console.log(item);
    var index = state.todos.indexOf(item);
    state.todos.splice(index, 1);
//   console.log(state.todos);
  renderArray();
}

function renderArray() {
    todoList.innerHTML = "";
    // console.log(state.todos);
    for (i in state.todos) {
        addItemShow(state.todos[i]);
    }
}

function double(item) {
  // console.log(item);
  var index = state.todos.indexOf(item);
  state.todos[index] = item+item;
  renderArray();
}

function edit(item) {
  console.log(item);
  var inp = document.createElement("input");
  var span = document.getElementById("item-${item}");
  var index = state.todos.indexOf(item);
  inp.innerText = item;
  // console.log(inp);
  span.appendChild(inp);

}

renderArray();
