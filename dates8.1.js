const today = new Date();

console.log(today.toLocaleString("en-US", { timeZone: "America/Anchorage"}));
console.log(today.toLocaleString("ru-RU", { timeZone: "W-SU"}));
console.log(today.toLocaleString("is-IS", { timeZone: "Atlantic/Reykjavik"}));
console.log(today.toLocaleString("fr-BE", { timeZone: "Europe/Brussels"}));