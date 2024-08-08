const promiseOne = new Promise((res, rej) => {
  document.getElementById("btn").addEventListener("click", () => {
    res("resoved");
  });
  document.getElementById("btn2").addEventListener("click", () => {
    rej("Promises rejected");
  });
});

console.log(promiseOne);

promiseOne
  .then((res) => console.log(res, promiseOne))
  .catch((rej) => console.log(rej, promiseOne));
