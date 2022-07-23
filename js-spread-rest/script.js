// 3 dots syntax ( ... )

// spread -> ( Objeyi ya da diziyi yay )

// örnek 1
// const user = ["Tayfun", "Mehmet", "Gökhan", "Nuri"];
// function getName(name1, name2, name3, name4) {
//   console.log(name1);
//   console.log(name2);
//   console.log(name3);
//   console.log(name4);
// }
// getName(...user);

// örnek 2
// const personel = {
//   name: "Nuri",
//   surname: "Demir",
// };

// const newPersonel = {
//   ...personel,
//   surname: "Koç",
// };

// console.log(personel);
// console.log(newPersonel);

// örnek 3
// function request(opts = {}) {
//   const options = {
//     error: true,
//     success: true,
//     ...opts,
//   };
//   console.log(options);
// }

// request({
//   error: false,
// });

// request({
//   success: false,
// });

// request({});

// örnek 4
// const numbers = [1, 2, 3, 4];
// console.log([0, ...numbers, 5]);

// örnek 5
// const titles = document.querySelectorAll("h1");
// // diziye çevirmek için ... operetörünü kullandık yoksa hata verir
// [...titles].map((title) => console.log(title));

// rest -> ( Objeyi ya da diziyi birleştirmek )
// örnek 1
// const user2 = ["Tayfun", "Mehmet", "Gökhan", "Nuri", "Ahmet", "Ali"];

// function getName2(name1, name2, ...otherNames) {
//   console.log(name1);
//   console.log(name2);
//   console.log(otherNames);
// }

// getName2(...user2);
