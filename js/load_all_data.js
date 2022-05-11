export async function getAllStudents() {
    // const mordiStudents = await getMordiStudents();
    // const toamStudents = await getToamStudents();
    // const allStudents = mordiStudents.concat(toamStudents);
    // const arrPromises = [];
    // for (let obj of allStudents) {
    //     const promise = await fetch(`https://capsules-asb6.herokuapp.com/api/user/${obj.id}`);
    //     const data = await promise.json();
    //     arrPromises.push(data);
    // }
    // // const allStudentsArr = await Promise.all();
    // console.log(allStudentsArr);
    // return allStudentsArr;

    // ours:
    // Promise.all(arrPromises).then(responses => Promise.all(responses.map(res => res.json())).then((array) => {
    //     for (let obj of array){
    //     allStudentsArr.push(obj);
    // }
    // }));

    // gil:
    async function getFetchData(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }


    const shortPeopleURLMordi = "https://capsules-asb6.herokuapp.com/api/teacher/mordi";
    const shortPeopleURLToam = "https://capsules-asb6.herokuapp.com/api/teacher/toam";
    const peopleShortDataMordi = await getFetchData(shortPeopleURLMordi);
    const peopleShortDataToam = await getFetchData(shortPeopleURLToam);
    const peopleShortDataAll = peopleShortDataMordi.concat(peopleShortDataToam);
    const personAPI = "https://capsules-asb6.herokuapp.com/api/user/";
    const peopleFullData = await Promise.all(peopleShortDataAll.map((person) => getFetchData(personAPI + person.id)));
    return peopleFullData;


}

// async function getMordiStudents() {
//     try {
//         const response = await fetch("https://capsules-asb6.herokuapp.com/api/teacher/mordi");
//         const mordiStudents = await response.json();
//         // await addAllPropertyToStudents(mordiStudents);
//         return mordiStudents;
//     } catch (err) {
//         console.error(err);
//     }
// }

// async function getToamStudents() {
//     try {
//         const response = await fetch("https://capsules-asb6.herokuapp.com/api/teacher/toam");
//         const toamStudents = await response.json();
//         // await addAllPropertyToStudents(toamStudents);
//         return toamStudents;
//     } catch (err) {
//         console.error(err);
//     }
// }

// export async function getAllStudents() {
//     const mordiStudentsPromise = getMordiStudents();
//     const toamStudentsPromise = getToamStudents();
//     const mordiStudents = await mordiStudentsPromise;
//     const toamStudents = await toamStudentsPromise;
//     const allStudents = mordiStudents.concat(toamStudents);
//     return allStudents;
// }