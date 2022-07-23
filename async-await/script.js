// async -> sadece fonksiyonlarda kullanılır.
// await -> sadece async fonksiyonlarda kullanılır.

// async function hello() {
//   //   return new Promise((resolve) => resolve("Hello world"));
//   return "Hello world";
// }

// const text = await hello();

// // text.then((response) => console.log(response));
// // console.log(text)

// document.querySelector("button").addEventListener("click", async () => {
//   //   Notification.requestPermission().then((response) => console.log(response));

//   const result = await Notification.();
//   console.log(result);requestPermission
// });

document.querySelector("button").addEventListener("click", async () => {
  const post = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  ).json();

  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    )
  ).json();
  console.log(post, comments);
});