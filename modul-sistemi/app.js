// import * as Utils from "./utils.js";

// console.log(Utils.default()); // Hello()
// console.log(Utils.Hello2());
// console.log(Utils.sayHi("Nuri Demir"));
// console.log(Utils.name);
// console.log(Utils.array);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  import("./utils.js").then((module) => console.log(module));
});
