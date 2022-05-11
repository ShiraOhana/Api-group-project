// const editButton = document.querySelector("edit-button");
// const deleteButton = document.querySelector("delete-button");

export function editRow(element) {
  element.addEventListener("click", editRowCallBack);
}

export function confirm(element) {
  element.addEventListener("click", confirmCallBack);
}
// editButton.addEventListener("click", editTable);

export function deleteRow(element) {
  element.addEventListener("click", deleteRowCallBack);
}


function deleteRowCallBack(event) {
  const btn = event.target;
  const idBtn = btn.getAttribute("id");
  const id = idBtn.slice(7);
  const parent = document.getElementById(id);
  parent.remove();
}

function editRowCallBack(event) {
  const btnEdit = event.target;
  const container = btnEdit.parentElement;
  const btnConfirm = container.querySelector(".btn-confirm");
  
  btnEdit.setAttribute("data-display", "false");
  btnConfirm.setAttribute("data-display", "true");
}

function confirmCallBack(event) {
  const btnConfirm = event.target;
  const container = btnConfirm.parentElement;
  const btnEdit = container.querySelector(".btn-edit");
  
  btnConfirm.setAttribute("data-display", "false");
  btnEdit.setAttribute("data-display", "true");
}