// const editButton = document.querySelector("edit-button");
// const deleteButton = document.querySelector("delete-button");

function editTable() {}
// editButton.addEventListener("click", editTable);

export function deleteRow(element) {
  element.addEventListener("click", removeParent);
}

function removeParent(event) {
  let parent = event.target.parentElement();
  parent.remove();
}
