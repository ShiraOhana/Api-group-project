async function addAllPropertyToStudents(arr) {
    // const arrPromises = [];
    // for (let obj of arr) {
    //     arrPromises.push(fetch(`https://capsules-asb6.herokuapp.com/api/user/${obj.id}`));
    // }
    
    
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

async function getMordiStudents() {
    try {
        const response = await fetch("https://capsules-asb6.herokuapp.com/api/teacher/mordi");
        const mordiStudents = await response.json();
        await addAllPropertyToStudents(mordiStudents);
        return mordiStudents;
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
    const mordiStudentsPromise = getMordiStudents();
    const toamStudentsPromise = getToamStudents();
    const mordiStudents = await mordiStudentsPromise;
    const toamStudents = await toamStudentsPromise;
    const allStudents = mordiStudents.concat(toamStudents);
    return allStudents;
}