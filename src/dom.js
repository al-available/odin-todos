
import { store,Info,addToStore } from "./appLogic";

const title = document.getElementById("title");
const details = document.getElementById("details");
const submit = document.getElementById("submit");
const addBtn = document.getElementById("add");
const viewBtn = document.getElementById("view");
const formContainer = document.getElementById("formContainer");
const mainContainer = document.getElementById("mainContainer");

const display = document.createElement("div");
display.classList.add("display");
mainContainer.appendChild(display);







//  toggle function
function toggleForm() {
//   const isHidden = formContainer.style.display === "none" || !formContainer.style.display;
//   formContainer.style.display = isHidden ? "block" : "none";

  if(formContainer.style.display ==='none'|| !formContainer.style.display){
    formContainer.style.display='block'
  }
  else{
    formContainer.style.display='none'
  }
}

function toggleMain() {
  const isHidden = mainContainer.style.display === "none" || !mainContainer.style.display;
  mainContainer.style.display = isHidden ? "block" : "none";
}

function displayStore() {
  display.innerHTML = "";
  if (store.length === 0) {
    display.innerHTML = "<p class='p1'>No items yet. Add one!</p>";
    return;
  }

  store.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add('itemList')
    itemDiv.innerHTML = `
      <strong>TITLE:</strong> ${item.title} <br>
      <strong>DETAILS:</strong> ${item.details} <br><br>
      <button class="delBtn" data-index="${index}">Delete</button>
      <hr>
    `;
    display.appendChild(itemDiv);
  });

  document.querySelectorAll(".delBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      store.splice(index, 1);
      displayStore();
    });
  });
}

function clearForm() {
  title.value = "";
  details.value = "";
}

// Submit
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value.trim() && details.value) {
    const userInfo = new Info(title.value.trim(), details.value);
    addToStore(userInfo);
    clearForm();
    toggleForm(); // hide form after submit
    displayStore();
  }
});

// Add button - show form
addBtn.addEventListener("click", () => {
  clearForm();
  toggleForm();

});

// View button - toggle main list
viewBtn.addEventListener("click", () => {
  toggleMain();
  displayStore(); // refresh in case data changed while hidden
});

// Initial state
displayStore();

export{submit,addBtn,viewBtn}