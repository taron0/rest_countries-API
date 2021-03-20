const container = document.querySelector(".container");
const searchCountry = document.querySelector(".search");

searchCountry.addEventListener("input", function (event) {
  const searchValue = event.target.value;
  fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`)
    .then((ressponse) => ressponse.json())
    .then((r) => {
        
      container.innerHTML = "";
      r.forEach(({ name, flag }) => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        
        li.className = "list";
        li.textContent = name;
        console.log(name);
        const img = document.createElement("img");
        img.setAttribute("src", flag);
        div.append(li);
        div.append(img);
  

        container.appendChild(div);
       console.log(r) 
      });
    });
});
fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => {
      console.log(countries[0].region);
    countries.forEach(({ name, flag }) => {
      const div = document.createElement("div");
      const li = document.createElement("li");
      li.className = "list";
      li.textContent = name;
      console.log(name);
      const img = document.createElement("img");
      img.setAttribute("src", flag);
      div.append(li);
      div.append(img);

      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));

