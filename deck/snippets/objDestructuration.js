const user = {
  firstName: "Pierre",
  lastName: "Chappaz",
  location: { city: "genève", countryCode: "ch" }
};

const {
  firstName, // "Pierre"
  location: { countryCode }, // "ch"
  gender = "male" // "male"
} = user;
