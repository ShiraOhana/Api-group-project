// const editButton = document.querySelector("edit-button");
// const deleteButton = document.querySelector("delete-button");

export function editTable(element) {
  element.addEventListener("click", editRow);
}

function editRow(event) {
  let row = event.target.parentElement();
  row.setAtribute = "a";
}

export function deleteRow(element) {
  element.addEventListener("click", removeParent);
}

function removeParent(event) {
  const btn = event.target;
  const idBtn = btn.getAttribute("id");
  const id = idBtn.slice(7);
  const parent = document.getElementById(id);
  parent.remove();
}
