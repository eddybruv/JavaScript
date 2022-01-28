function titleCase(str){
    const newStr = str.split(' ');
    const updatedTitle = [];

    for(let i in newStr) {
        updatedTitle[i] = newStr[i].toLowerCase().replace(newStr[i].charAt(0), newStr[i].charAt(0).toUpperCase);
    }

    console.log(updatedTitle);
}

titleCase("The boys played!");