const container = document.querySelector(".container");

fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach(({ name, flag }, idx) => {
        if(+localStorage.getItem(idx)===idx){

      const div = document.createElement("div");
      const li = document.createElement("li");

      li.className = "list";
      li.textContent = name;
      const btn = document.createElement("button");
      btn.textContent = "remove :";
      btn.setAttribute("id", idx);
      btn.addEventListener("click", function (e) {
        console.log(e.srcElement.id);
        if (localStorage.getItem(e.srcElement.id)) {
          localStorage.removeItem(e.srcElement.id);
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
    }

    });
    
  })
  .catch((err) => console.log(err));

