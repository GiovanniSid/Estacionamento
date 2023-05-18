// Data storage
let data = [];

// Function to create a new entry
function createEntry(Carro, Placa) {
  data.push({ Carro, Placa });
}

// Function to update the table with data
function updateTable() {
  const tableBody = document.getElementById("dataTable");
  tableBody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data[i].Carro}</td>
      <td>${data[i].Placa}</td>
      <td>
        <button onclick="editEntry(${i})">Edit</button>
        <button onclick="deleteEntry(${i})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  }
}

// Function to handle form submission
document.getElementById("crudForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const CarroInput = document.getElementById("Carro");
  const PlacaInput = document.getElementById("Placa");

  createEntry(CarroInput.value, PlacaInput.value);
  updateTable();

  CarroInput.value = "";
  PlacaInput.value = "";
});

// Function to edit an entry
function editEntry(index) {
  const CarroInput = document.getElementById("Carro");
  const PlacaInput = document.getElementById("Placa");

  CarroInput.value = data[index].Carro;
  PlacaInput.value = data[index].Placa;

  data.splice(index, 1);
  updateTable();
}

// Function to delete an entry
function deleteEntry(index) {
  data.splice(index, 1);
  updateTable();
}