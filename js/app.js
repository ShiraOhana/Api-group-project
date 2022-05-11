import { getAllStudents } from "./load_all_data.js";
import { editTable } from "./editTable";

getAllStudents().then(console.log);

const table = document.querySelector("table");
