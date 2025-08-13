const img = document.querySelector("img");
const btn = document.querySelector("button");
const input = document.querySelector("input");

function getImg() {
  const resolve = (response) => {
    img.src = response.data.images.original.url;
    //   console.log(response);
  };
  const reject = (response) => console.log("Rejected", response);

  let url;

  if (input.value) {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=9NqLA2gxHnCBcput71fWmPywQCvY1Ccr&s=${input.value}`;
  } else {
    url =
      "https://api.giphy.com/v1/gifs/random?api_key=9NqLA2gxHnCBcput71fWmPywQCvY1Ccr";
  }
  fetch(url, { mode: "cors" })
    .catch((error) => reject(error)) //catch errors with wrong url etc...
    .then((response) => {
      return response.json(); // returns promise object
    })
    .then((response) => {
      if (response) {
        resolve(response);
      } else {
        reject("No GIFs found with given keyword");
      }
    })
    .catch((err) => console.log(err));
}

btn.addEventListener("click", getImg);
