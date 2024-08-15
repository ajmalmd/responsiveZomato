const data = [
  { place: "Trivandrum", count: "140" },
  { place: "Kollam", count: "130" },
  { place: "Pathanamthitta", count: "120" },
  { place: "Alappuzha", count: "110" },
  { place: "Kottayam", count: "100" },
  { place: "Idukki", count: "90" },
  { place: "Ernakulam", count: "80" },
  { place: "Thrissur", count: "70" },
  { place: "Palakkad", count: "60" },
  { place: "Malappuram", count: "50" },
  { place: "Kozhikode", count: "40" },
  { place: "Wayanad", count: "30" },
  { place: "Kannur", count: "20" },
  { place: "Kasaragod", count: "10" },
];
const placeRow = document.querySelector("#place-row");

document.addEventListener("click", (e) => {
  const item = e.target;

  //see less
  if (item.classList.contains("less-div")) {
    const items = document.querySelectorAll(".box .locality-title");
    data.forEach((place) => {
      items.forEach((viewingPlc) => {
        if (place.place === viewingPlc.innerHTML) {
          console.log(viewingPlc.innerHTML);
          viewingPlc.parentElement.parentElement.parentElement.remove();
        }
      });
    });

    //adding see more button
    const finalbox = document.createElement("div");
    finalbox.classList.add("col");
    finalbox.innerHTML = `  <div
                class="box align-items-center flex-row justify-content-center more-div"
              >
                <div class="locality-title">see more</div>
                <i class="more-icon fa-solid fa-angle-down"></i>
              </div>
            </div>`;

    placeRow.appendChild(finalbox);

    // remove seeless button
    const seeless = document.querySelector(".less-div");
    seeless.parentElement.remove();
  }

  //see more
  if (item.classList.contains("more-div")) {
    data.forEach((item) => {
      const divItem = document.createElement("div");
      divItem.classList.add("col");
      divItem.innerHTML = `<div class="box">
                  <div>
                    <div class="locality-title">${item.place}</div>
                    <div class="locality-description">${item.count} Places</div>
                  </div>
                  <div class="arrow-right">&#8250;</div>
                </div>`;
      placeRow.appendChild(divItem);
    });

    //adding see less button
    const finalbox = document.createElement("div");
    finalbox.classList.add("col");
    finalbox.innerHTML = `  <div
                  class="box align-items-center flex-row justify-content-center less-div"
                >
                  <div class="locality-title">see less</div>
                  <i class="more-icon fa-solid fa-angle-up"></i>
                </div>
              </div>`;

    placeRow.appendChild(finalbox);

    //removing see more button
    const seemore = document.querySelector(".more-div");
    seemore.parentElement.remove();
  }
});
