function getData () {
    const myData = {
        name: "valor",
        age: 33,
        favorites: ["Movie1", "Movie2"]
    };

    return myData;
}

const results = getData();
console.log(results.name);

const { name } = getData();
console.log(name);