function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

User.prototype.getFullName = function () {
  return this.firstName + ` ` + this.lastName;
};
console.log(users);

const girlSchoolSelect = users.filter(
  (item) => item.isMale === false && item.age > 6 && item.age < 18
);
console.log(girlSchoolSelect);

const mailSelect = users.findIndex(
  (item) => item.email === "useremail5@gmail.com"
);

users.splice(mailSelect, 1);
console.log(users);

const mail99User = users.some((item) => item.email === "useremail99@gmail.com");
console.log(mail99User);

const everySub = users.every((item) => item.isSubscribed === true);
console.log(everySub);
