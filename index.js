
const cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat () {
    cats.push("Ralph");
    return cats;
};

function destructivelyPrependCat () {
    cats.unshift("Bob");
    return cats;
};

function destructivelyRemoveLastCat () {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat () {
    cats.shift();
    return cats;
}

function appendCat () {
    let copyCats = [...cats, "Broom"];
    return copyCats; 
};

function prependCat () {
    let copyCats = ["Arnold", ...cats];
    return copyCats;
};

function removeLastCat () {
    let copyCats = cats.slice(0, 2);
    return copyCats;
};


function removeFirstCat () {
    let copyCats = cats.slice(1);
    return copyCats;
};



























/*

function destructivelyAppendCat () {
    cats.push("Ralph");
    return cats;
};

function destructivelyPrependCat () {
    cats.unshift("Bob");
    return cats;
};

function destructivelyRemoveLastCat () {
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat () {
    cats.shift();
    return cats;
};

function appendCat () {
    let copyCats = [...cats, "Broom"];
    return copyCats;
};

function prependCat () {
    let copyCats = ["Arnold", ...cats];
    return copyCats;
};

function removeLastCat () {
    let copyCats = cats.slice(0, 2);
    return copyCats;
};

function removeFirstCat () {
    let copyCats = cats.slice(1);
    return copyCats;
};

*/



























/*

let cats = ["Milo", "Otis", "Garfield"]; 

cats.length = 0

cats.push("Milo", "Otis", "Garfield"); 

function destructivelyAppendCat () {
    return cats.push("Ralph");
};

function destructivelyPrependCat () {
    return cats.unshift("Bob");
};

function destructivelyRemoveLastCat () {
    return cats.pop();
}

function destructivelyRemoveFirstCat () {
    return cats.shift();
}

function appendCat () {
    return [...cats, "Broom"];
};

function prependCat () {
    return ["Arnold", ...cats];
};

function removeLastCat () {
    let copyOfCats = cats.slice(0, 2);
    return copyOfCats;
};

function removeFirstCat () {
    let copyOfCats = cats.slice(1);
    return copyOfCats;
};

*/