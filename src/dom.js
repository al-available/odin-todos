
import { store,Info,addToStore,loadUp,saveUp } from "./appLogic";

const title = document.getElementById("title");
const details = document.getElementById("details");
const submit = document.getElementById("submit");
const addBtn = document.getElementById("add");
const viewBtn = document.getElementById("view");
const formContainer = document.getElementById("formContainer");
const mainContainer = document.getElementById("mainContainer");
const display = document.createElement("div");
const titleChange=document.querySelector('titleFormat')
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
function titleColor(){
  titleChange.style.color='red'
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
     <input type="checkbox" name="ticked" class="checkbox" data-index="${index}"  > 
     <strong>TITLE:</strong><strong class="titleFormat"> ${item.title}</strong> <br>
      <strong>DETAILS:</strong> ${item.details}
      <button class="delBtn" data-index="${index}">Delete</button>
      <hr>
    `;
    display.appendChild(itemDiv);
  });

  document.querySelectorAll(".delBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      store.splice(index, 1);
      saveUp()
      displayStore();
    });
  });
  document.querySelectorAll('.checkbox').forEach(checkBox =>{
    checkBox.addEventListener('change',()=>{
      const index =parseInt(checkBox.dataset.index)
      store[index].completed=!!checkBox.checked
    })
  });
  
}

function clearForm() {
  title.value = "";
  details.value = "";
}

// Submit
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value.trim() && details.value.trim()) {
    const userInfo = new Info(title.value.trim(), details.value.trim());
    addToStore(userInfo);
    saveUp()
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
loadUp()
displayStore();






export{submit,addBtn,viewBtn}