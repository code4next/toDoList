const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const btn = document.getElementById("btn");
const orderList = document.getElementById("js-task");

const arrayObject = JSON.parse(localStorage.getItem("toDoTask")) || [];

console.log(arrayObject);

console.log();
console.log(arrayObject);

function updateLocalStorage() {
  localStorage.setItem("toDoTask", JSON.stringify(arrayObject));
}

/*=======================================================
================ collect and save data =================
=========================================================*/
function addInfo() {
  const Name = nameInput.value.trim();
  const DateOfAdd = dateInput.value.trim();
  const timeOfAdd = timeInput.value.trim();

  if (Name && DateOfAdd && timeOfAdd) {
    arrayObject.push({ Name, DateOfAdd, timeOfAdd });
    console.log(arrayObject);
    nameInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
  } else {
    console.log("Please fill in all fields.");
  }
  updateLocalStorage();
  GenarateHTML();
}

btn.addEventListener("click", addInfo);

/*=======================================================
====================== genarate html =====================
=========================================================*/

function GenarateHTML() {
  orderList.innerHTML = "";
  for (let i = 0; i < arrayObject.length; i++) {
    const fHtml = arrayObject[i];
    const userName = arrayObject[i].Name;
    const entryDate = arrayObject[i].DateOfAdd;
    const entriTime = arrayObject[i].timeOfAdd;
    const id = i;
    const li = document.createElement("li");
    li.innerHTML += `<h1>${userName}</h1> <div> <h3>${entryDate}</h3>     <h5>${entriTime} </h5>  <button onclick=" deleteItem(${i}) ">Delete</button> </div>`;
    orderList.prepend(li);
  }
}

function deleteItem(index) {
  arrayObject.splice(index, 1);
  updateLocalStorage();
  GenarateHTML();
}

GenarateHTML();
