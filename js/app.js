import { getAllStudents } from "./load_all_data.js";

getAllStudents().then(console.log);

const table = document.querySelector("table");