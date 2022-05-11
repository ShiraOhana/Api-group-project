import { getAllStudents } from "./load_all_data.js";
import { deleteRow, confirm, editRow } from "./edit-table.js";

// getAllStudents().then(console.log);

async function appendAllStudents(category, text) {
  const tbody = document.querySelector("tbody");
  const allStudents = await getAllStudents();
  allStudents.forEach((StudentObj) => {
    const newTr = document.createElement("tr");
    newTr.setAttribute("id", StudentObj.id);
    // capsule:
    const tdCapsule = document.createElement("td");
    tdCapsule.textContent = StudentObj.capsule;
    newTr.appendChild(tdCapsule);
    // city:
    const tdCity = document.createElement("td");
    tdCity.textContent = StudentObj.city;
    newTr.appendChild(tdCity);
    // hobby:
    const tdHobby = document.createElement("td");
    tdHobby.textContent = StudentObj.hobby;
    newTr.appendChild(tdHobby);
    // age:
    const tdAge = document.createElement("td");
    tdAge.textContent = StudentObj.age;
    newTr.appendChild(tdAge);
    // gender:
    const tdGender = document.createElement("td");
    tdGender.textContent = StudentObj.gender;
    newTr.appendChild(tdGender);
    // last name:
    const tdLastName = document.createElement("td");
    tdLastName.textContent = StudentObj.lastName;
    newTr.appendChild(tdLastName);
    // first name:
    const tdFirstName = document.createElement("td");
    tdFirstName.textContent = StudentObj.firstName;
    newTr.appendChild(tdFirstName);
    // id:
    const tdId = document.createElement("td");
    tdId.textContent = StudentObj.id;
    newTr.appendChild(tdId);
    // edit:
    const tdBtnEdit = document.createElement("td");
    const editBtnContainer = document.createElement("div");
    editBtnContainer.setAttribute("id", `edit-${StudentObj.id}`);
    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("data-display", "true");
    btnEdit.setAttribute("class", "btn-edit");
    btnEdit.textContent = "edit";
    editRow(btnEdit);
    editBtnContainer.appendChild(btnEdit);
    const btnConfirm = document.createElement("button");
    btnConfirm.setAttribute("data-display", "false");
    btnConfirm.setAttribute("class", "btn-confirm");
    btnConfirm.textContent = "confirm";
    confirm(btnConfirm);
    editBtnContainer.appendChild(btnConfirm);
    tdBtnEdit.appendChild(editBtnContainer);
    newTr.appendChild(tdBtnEdit);
    // remove:
    const tdBtnRemove = document.createElement("td");
    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("id", `remove-${StudentObj.id}`);
    btnRemove.textContent = "remove";
    deleteRow(btnRemove);
    tdBtnRemove.appendChild(btnRemove);
    newTr.appendChild(tdBtnRemove);
    // append:
    tbody.appendChild(newTr);
  });
}
appendAllStudents();
