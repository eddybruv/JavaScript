//A proper random function
//This returns a random number between min(included) and max(excluded)
function getRndInt(min, max) {
    return Math.floor(Math.random * (max - min)) + min;
}

////This returns a random number between min(included) and max(included)
function getRndInt(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}