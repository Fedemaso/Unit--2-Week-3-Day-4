function loadImages(query) {
  const apiKey = "367guVG6VAedRDSKn7pEWjxL2mBxFR7KOOji3dti11WLpLc5GagrrVl5";
  const url = `https://api.pexels.com/v1/search?query=${query}`;

  fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const images = data.photos;
      const cardElements = document.querySelectorAll(".card");

      cardElements.forEach((card, index) => {
        const image = images[index];
        const cardImage = card.querySelector(".bd-placeholder-img");

        const newImage = document.createElement("img");
        newImage.src = image.src.medium;
        newImage.alt = image.alt_description;
        newImage.className = "bd-placeholder-img card-img-top";

        card.replaceChild(newImage, cardImage);

        //modifico edit
        const editButton = card.querySelector(".btn-outline-secondary");
        editButton.innerText = "Hide";

        editButton.addEventListener("click", hideCard);
      });
    })
    .catch((error) => {
      console.log("Errore durante il caricamento delle immagini:", error);
    });
}

// Funzione "Hide"
function hideCard(event) {
  const card = event.target.closest(".card");
  card.style.display = "none";
}

const loadImagesButton = document.querySelector(".btn-primary");
const loadSecondaryImagesButton = document.querySelector(".btn-secondary");

loadImagesButton.addEventListener("click", () => {
  loadImages("gaming");
});

loadSecondaryImagesButton.addEventListener("click", () => {
  loadImages("dog");
});
