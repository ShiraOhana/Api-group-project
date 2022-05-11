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
  let parent = event.target.parentElement();
  parent.remove();
}
