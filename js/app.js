import { getAllStudents } from "./load_all_data.js";
import { deleteRow } from "./editTable";

// getAllStudents().then(console.log);

async function appendAllStudents() {
  const tbody = document.querySelector("tbody");
  const allStudents = await getAllStudents();
  allStudents.forEach((StudentObj) => {
    console.log(StudentObj);
    const newTr = document.createElement("tr");
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
    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("id", `edit-${StudentObj.id}`);
    btnEdit.textContent = "edit";
    tdBtnEdit.appendChild(btnEdit);
    newTr.appendChild(tdBtnEdit);
    // remove:
    const tdBtnRemove = document.createElement("td");
    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("id", `remove-${StudentObj.id}`);
    btnRemove.textContent = "remove";
    tdBtnRemove.appendChild(btnRemove);
    newTr.appendChild(tdBtnRemove);
    // append:
    tbody.appendChild(newTr);
  });
}
appendAllStudents();
