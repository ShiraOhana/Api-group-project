// const editButton = document.querySelector("edit-button");
// const deleteButton = document.querySelector("delete-button");

function editTable() {}
// editButton.addEventListener("click", editTable);

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
