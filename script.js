const phoneInput = document.querySelector(".phone");
const emailInput = document.querySelector(".email");
const btnSubmit = document.querySelector(".btn-submit");
const submitText = document.querySelector(".submit-text");
const modal = document.getElementById("my_modal");
const errorMessagePhone = document.querySelector("#error-phone");
const errorMessageEmail = document.querySelector("#error-email");
const form = document.querySelector('.form')
console.log(submitText);

phoneInput.onblur = function (event) {
  const value = event.target.value;
  if (phoneInput.value !== "") {
    if (
      value
        .split("")
        .map((el) => Number(el))
        .includes(NaN)
    ) {
      errorMessagePhone.style.display = "block";
    }
  }
};
phoneInput.onfocus = function () {
  errorMessagePhone.style.display = "none";
};

emailInput.onblur = function () {
  if (emailInput.value !== "") {
    if (!emailInput.value.includes("@")) {
      errorMessageEmail.style.display = "block";
    }
  }
};

emailInput.onfocus = function () {
  errorMessageEmail.style.display = "none";
};

btnSubmit.addEventListener("click", function () {
  const isDisplayPhone = errorMessagePhone.style.display === "none";
  const isDisplayEmaile = errorMessageEmail.style.display === "none";
  if (isDisplayEmaile && isDisplayPhone) {
    form.setAttribute("action", "./rest-countries/index.htmlgit ");
    form.setAttribute("target", "_blank");
  }
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};