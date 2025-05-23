// ========== To-Do List ==========
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    };
    list.appendChild(li);
  });
}

displayTasks();

// ========== Product Listing ==========
const products = [
  { name: "Smartphone", category: "electronics", price: 299 },
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Book A", category: "books", price: 19 },
  { name: "Book B", category: "books", price: 25 }
];

function displayProducts(items) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - $${p.price}`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const criterion = document.getElementById("sort").value;
  const category = document.getElementById("filter").value;
  let filtered = category === "all" ? [...products] : products.filter(p => p.category === category);

  filtered.sort((a, b) => {
    if (criterion === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });

  displayProducts(filtered);
}

displayProducts(products);

// ========== Form Validation ==========
function validateForm(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Invalid email!");
    return;
  }
  alert("Form submitted successfully!");
}
