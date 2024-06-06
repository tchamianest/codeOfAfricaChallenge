const bodyContainer = document.querySelector(".container");

const data = [
  {
    name1: "FENNEC",
    name2: "FOX",
    country: "India",
    img: "../images/Image1.png",
  },
  {
    name1: "HUMPBACK",
    name2: "WHALE",
    country: "South Africa",
    img: "../images/Image2.png",
  },
  {
    name1: "COMMON BROWN",
    name2: "BABOON",
    country: "South Africa",
    img: "../images/Image3.png",
  },
  {
    name1: "SPOTTED",
    name2: "DEER",
    country: "Amazon",
    img: "../images/Image4.png",
  },
];

//DISPLAY THREE IMAGES
const displaydata = (data) => {
  data.map((el) => {
    const template = `
          <div class="image">
          <img src=${el.img} />
          <div class="card">
            <div class="description">
              <div class="img-details">
                <h1>${el.name1} <br/>${el.name2}</h1>
                <p>${el.country}</p>
              </div>
              <div class="know-more-Button hidden">
                <p>know more</p>
                <embed src="../images/icons.svg" type="image/svg+xml" class="svg-icon">
              </div>
            </div>
          </div>
        </div>`;
    bodyContainer.insertAdjacentHTML("beforeend", template);
  });
};
displaydata(data);

const imageContainers = document.querySelectorAll(".image");
const hoverEffect = () => {
  imageContainers.forEach((container) => {
    const card = container.querySelector(".card");
    const Details = container.querySelector(".img-details");
    const KnowMore = container.querySelector(".know-more-Button");
    const image = container.querySelector("img");

    container.addEventListener("mouseenter", () => {
      card.style.backdropFilter = "blur(5px)";
      Details.style.transform = "translateY(10%)";
      image.style.transform = "scale(1.1)";
      image.style.filter = "grayscale(100%) brightness(25%)";
      KnowMore.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
      card.style.backdropFilter = "none";
      Details.style.transform = "translateY(40%)";
      image.style.transform = "scale(1)";
      image.style.filter = "none";
      KnowMore.style.opacity = "0";
    });
  });
};
hoverEffect();
