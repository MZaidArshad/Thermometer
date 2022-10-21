const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = `<i class="fa fa-thermometer-empty" aria-hidden="true"></i>`;
  temp.style.color = "#ffffff";

  setTimeout(() => {
    temp.innerHTML = `<i class="fa fa-thermometer-quarter" aria-hidden="true"></i>`;
    temp.style.color = "#f8b627";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = `<i class="fa fa-thermometer-half" aria-hidden="true"></i>`;
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = `<i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i>`;
  }, 3000);

  setTimeout(() => {
    temp.innerHTML = `<i class="fa fa-thermometer-full" aria-hidden="true"></i>`;
    temp.style.color = "#d63031";
  }, 4000);
};

setInterval(() => {
  tempLoad();
}, 5000);

tempLoad();
