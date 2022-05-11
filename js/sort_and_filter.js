import { getAllStudents } from "./load_all_data.js";
import { appendAllStudents } from "./app.js";

getAllStudents();


export async function sortToEvent(event) {
    const title = event.target;
    const data = await getArrayFilter();
    const currentSort = title.getAttribute("data-sort");
    const titleName = title.getAttribute("data-name");

    if (currentSort === "ascending") {
        data.sort(function (a, b) {
            const valueA = (a[titleName] + "").toUpperCase();
            const valueB = (b[titleName] + "").toUpperCase();
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });
        title.setAttribute("data-sort", "descending");
    } else {
        data.sort(function (a, b) {
            const valueA = a[titleName].toUpperCase();
            const valueB = b[titleName].toUpperCase();
            if (valueA < valueB) {
                return 1;
            }
            if (valueA > valueB) {
                return -1;
            }
            return 0;
        });
        title.setAttribute("data-sort", "ascending");
    }
    await appendAllStudents(data);
}

export async function filterToEvent() {
    const allStudents = await getArrayFilter();
    await appendAllStudents(allStudents);
}

async function getArrayFilter() {
    const allStudents = [];
    const input = document.getElementById("search-text").value;
    const data = await getAllStudents();
    const category = document.getElementById("category");
    const categoryValue = category.value;

    for (let obj of data) {
        const valueObj = obj[categoryValue] + "";
        let inputIn = true;
        for (let i = 0; i < input.length; i++) {
            if (input.charAt(i) !== valueObj.charAt(i)) {
                inputIn = false;
                break;
            }
        }
        if (inputIn) allStudents.push(obj);
    }
    return allStudents;
}