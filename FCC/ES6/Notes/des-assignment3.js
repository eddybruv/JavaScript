/**
 * @brief : Use destructuring assignment to Pass an object as a function's parameters
 * In some cases, you can destructure the object in a function argument itself
 */

//consider:

const profileData = {
    name: "Edwin Ajong",
    age: 20,
    nationality: "Cameroonian",
    location: "Buea, Cameroon"
};

const profileUpdate = (profileData) => {
    const {name, age, nationality, location} = profileData;
}

//is the same as 
const ProfileUpdate = ({name, age, nationality, location}) => {
    console.log(name);;
}

ProfileUpdate(profileData);