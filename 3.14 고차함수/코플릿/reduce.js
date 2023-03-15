// function joinName(resultStr, user) {
//   resultStr = resultStr + user.name + ":"+ user.age + " ,";
//   return resultStr;
// }

// let users = [
//   { name: 'Tim', age: 40 },
//   { name: 'Satya', age: 30 },
//   { name: 'Sundar', age: 50 }
// ];

// users.reduce(joinName, "");

// console.log(users.reduce(joinName, ""));

function makeAddressBook(addressBook, user) {
  let firstLetter = user.name[0];

  if (firstLetter in addressBook) {
    addressBook[firstLetter].push(user);
  } else {
    addressBook[firstLetter] = [];
    addressBook[firstLetter].push(user);
  }

  return addressBook;
}

let users = [
  { name: "Tim", age: 40 },
  { name: "Satya", age: 30 },
  { name: "Sundar", age: 50 },
];

console.log(users.reduce(makeAddressBook, {}));
