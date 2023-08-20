let friends = ["4", "5", "34", "55"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += +friends[i] + ",";
}
console.log(string);
console.log(friends.join(","));

let cards = ["1", "2", "3", "4", "5"];
let cardToremove = cards.splice(2, 1);
let cardToinsert = cards.splice(5, 1, "6");
let cardToupdate = cards.splice(2, 1, "3");
console.log(cards);
