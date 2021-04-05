const container = document.querySelector(".container");
const searchCountry = document.querySelector(".search");

searchCountry.addEventListener("input", function (event) {
  const searchValue = event.target.value;
  fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
    .then((ressponse) => ressponse.json())
    .then((r) => {
      container.innerHTML = "";
      r.forEach(({ name, flag, region }) => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        const btn = document.createElement('button');
        const p = document.createElement('p')
        p.append(btn)
        btn.textContent = "Add :" ;
        li.className = "list";
        li.textContent = name;

        const img = document.createElement("img");
        img.setAttribute("src", flag);
        // div.append(li);
        // div.append(img);
        // div.append(p);
        div.append(...[li, img, p])
        container.appendChild(div);
        console.log(r);
      });
    });
});
fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    console.log(countries);
    countries.forEach(({ name, flag }) => {
      const div = document.createElement("div");
      const li = document.createElement("li");
      li.className = "list";
      li.textContent = name;
      const btn = document.createElement("button");
      btn.textContent = "Add :" ;
      const p = document.createElement('p')
      p.append(btn)
      //   console.log(name);
      const img = document.createElement("img");
      img.setAttribute("src", flag);
      // div.append(li);
      // div.append(img);
      div.append(...[li, img, p])
      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));