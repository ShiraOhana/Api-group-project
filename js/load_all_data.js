async function addAllPropertyToStudents(arr) {
    for (let obj of arr) {
        const response = await fetch(`https://capsules-asb6.herokuapp.com/api/user/${obj.id}`);
        const studentProperty = await response.json();
        obj.gender = studentProperty.gender;
        obj.hobby = studentProperty.hobby;
        obj.age = studentProperty.age;
        obj.city = studentProperty.city;
        obj.capsule = studentProperty.capsule;
    }
}

async function getMordyStudents() {
    try {
        const response = await fetch("https://capsules-asb6.herokuapp.com/api/teacher/mordi");
        const mordyStudents = await response.json();
        await addAllPropertyToStudents(mordyStudents);
        return mordyStudents;
    } catch (err) {
        console.error(err);
    }
}

async function getToamStudents() {
    try {
        const response = await fetch("https://capsules-asb6.herokuapp.com/api/teacher/toam");
        const toamStudents = await response.json();
        await addAllPropertyToStudents(toamStudents);
        return toamStudents;
    } catch (err) {
        console.error(err);
    }
}

export async function getAllStudents() {
    const mordyStudentsPromise = getMordyStudents();
    const toamStudentsPromise = getToamStudents();
    const mordyStudents = await mordyStudentsPromise;
    const toamStudents = await toamStudentsPromise;
    const allStudents = mordyStudents.concat(toamStudents);
    return allStudents;
}