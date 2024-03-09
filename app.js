const linkBtn = document.getElementById("link-btn");
const infoBtn = document.getElementById("info-btn");
const linkForm = document.getElementById("link-form");
const infoForm = document.getElementById("info-form");

linkBtn.addEventListener("click", () => {
  if (!linkBtn.classList.contains("active")) {
    linkBtn.classList.add("active");
  }
  infoBtn.classList.remove("active");

  linkForm.classList.remove("hidden");
  if (!infoForm.classList.contains("hidden")) {
    infoForm.classList.add("hidden");
  }
});

infoBtn.addEventListener("click", () => {
  if (!infoBtn.classList.contains("active")) {
    infoBtn.classList.add("active");
  }
  linkBtn.classList.remove("active");

  infoForm.classList.remove("hidden");
  if (!linkForm.classList.contains("hidden")) {
    linkForm.classList.add("hidden");
  }
});

const navBtns = document.querySelectorAll(".btn-nav");
const iconWrappers = document.querySelectorAll(".icon-avatar-wrapper");
const inputWrappers = document.querySelectorAll(".input-wrapper");

navBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    iconWrappers[index].classList.toggle("active");
    inputWrappers[index].classList.toggle("active");
  });
});

const inputs = document.querySelectorAll("input");
const bindedFields = document.querySelectorAll(".binded-field");
const bindedFieldMap = new Map();
bindedFields.forEach((field) => bindedFieldMap.set(field.id, field));

const handleChangeLink = (inputName, value) => {
  const iconLink = bindedFieldMap.get(inputName);
  iconLink.setAttribute("href", value);
};

const handleChangeInfo = (inputName, value) => {
  const infoField = bindedFieldMap.get(inputName);
  infoField.textContent = value;
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.name.split("_")[0] === "link") {
      handleChangeLink(e.target.name, e.target.value);
    } else {
      handleChangeInfo(e.target.name, e.target.value);
    }
  });
});
