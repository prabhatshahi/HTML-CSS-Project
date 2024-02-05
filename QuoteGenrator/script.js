const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apiKey = "bTFKQCrMQIZMulKWsxqEqg==PSBN2lBBVCZYfKPU";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokes() {
  const response = await fetch(apiURL, options);
  const data = await response.json();

  jokeEl.innerText = data.data[0].joke;

  // .then((response) => response.json())
  // .then((data) => {
  //   jokeEl.innerText = data.data[0].joke;
  // })
  // .catch((error) => {
  //   console.error("Error fetching data:", error);
  // });
}

btnEl.addEventListener("click", getJokes);
