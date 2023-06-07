const user = document.querySelector("#user");
const dark = document.querySelector("#dark-btn");
const light = document.querySelector("#light-btn");
const refresh = document.querySelector(".form__button-inner");
const form__input = document.querySelector(".form__input");
const deleteBtn = document.querySelector("#delete__btn");
const body = document.querySelector("body");
const clear__button = document.querySelector(".clear__button");

let namesF = [];
const api_link = "https://randomuser.me/api/?results=9";
form__input.addEventListener("input", () => {
  const filtered = namesF.filter((item) => {
    return item.name.title 
      .toLowerCase()
      .includes(form__input.value.toLowerCase().trim());
  });
  upDate(filtered);
});
function getData() {
  fetch(api_link)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      namesF = data.results;
      upDate(namesF);
    });
}
getData();
const upDate = (namesF) => {
  user.innerHTML = "";
  namesF.forEach((item) => {
    user.innerHTML += `
            <li class="user__item">
            <button id="delete__btn" class="user__delete--btn "  >
                <i class="fas fa-trash"></i>
            </button>
            <img class="user__img" alt="User photo" src="${item.picture.large}" />
            <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>-${item.name.title} ${item.name.first} ${item.name.last} </span>
            </div>
            <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>-${item.dob.age} years old.</span>
            </div>
            <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>- ${item.location.city}, ${item.location.country}</span>
            </div>
            <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${item.gender}</span>
            </div>
            </li>
       `;
  });
}; 
// events--->>>
// Dark
dark.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    dark.classList.add("hidden");
    light.classList.remove("hidden");
  });

  //  light
  light.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    light.classList.add("hidden");
    dark.classList.remove("hidden");
  });
  clear__button.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  user.classList.add("hidden");
});

window.addEventListener('click',({target})=>{
   if(target.className == "user__delete--btn "){
    target.parentElement.remove()
   }
})