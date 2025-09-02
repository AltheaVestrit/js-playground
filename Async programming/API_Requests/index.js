const img = document.querySelector("img");
const btn = document.querySelector("button");
const input = document.querySelector("input");

async function getImg() {
  let url;

  if (input.value) {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=9NqLA2gxHnCBcput71fWmPywQCvY1Ccr&s=${input.value}`;
  } else {
    url =
      "https://api.giphy.com/v1/gifs/random?api_key=9NqLA2gxHnCBcput71fWmPywQCvY1Ccr";
  }
  const response = await fetch(url, { mode: "cors" });
  const gifData = await response.json();

  img.src = gifData.data.images.orginal.url;
}

btn.addEventListener("click", getImg);
