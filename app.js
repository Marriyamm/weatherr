function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input").value;
  let city = document.querySelector(".city");
  city.innerHTML = `${searchInput}`;
}

let form = document.querySelector(".search");
form.addEventListener("submit", search);
