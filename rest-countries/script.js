const container = document.querySelector(".container");
const searchCountry = document.querySelector(".search");

searchCountry.addEventListener("input", function (event) {
  const searchValue = event.target.value;
  fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
    .then((ressponse) => ressponse.json())
    .then((r) => {
      container.innerHTML = "";
      r.forEach(({ name, flag, region }, idx) => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const p = document.createElement("p");
        p.append(btn);
        if(!localStorage.getItem(idx)){
          btn.textContent = "Add :";
          location.reload();
        }else{
          btn.textContent = "remove :";
          location.reload();
        }
        btn.setAttribute("id", idx);
        li.className = "list";
        li.textContent = name;

        const img = document.createElement("img");
        img.className = "img-flag";
        img.setAttribute("src", flag);
        div.append(...[li, img, p]);
        container.appendChild(div);
        btn.addEventListener("click", function (e) {
          console.log(6546);
        });
      });
    });
});
fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach(({ name, flag }, idx) => {
      const div = document.createElement("div");
      const li = document.createElement("li");

      li.className = "list";
      li.textContent = name;
      const btn = document.createElement("button");
      if(!localStorage.getItem(idx)){
        btn.textContent = "Add :";

      }else{
        btn.textContent = "remove :";

      }
      btn.setAttribute("id", idx);
      btn.addEventListener("click", function (e) {
        console.log(e.srcElement.id);
        if (!localStorage.getItem(e.srcElement.id)) {
          localStorage.setItem(e.srcElement.id, e.srcElement.id);
          location.reload();
        }else{
          localStorage.removeItem(e.srcElement.id)
          location.reload();
        }
      });
      const p = document.createElement("p");
      p.append(btn);

      const img = document.createElement("img");
      img.className = "img-flag";
      img.setAttribute("src", flag);

      div.append(...[li, img, p]);
      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));


  console.log(localStorage.getItem())