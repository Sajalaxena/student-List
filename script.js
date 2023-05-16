// Load existing data from local storage
var modal = document.getElementById("details-modal");
var closeButton = document.getElementById("close-button");
var btn = document.getElementById("btn");
var viewButton = document.getElementById("view-button");


let data = localStorage.getItem('studentData');
if (data) {
  data = JSON.parse(data);
} else {
  data = [];
}

// Render table rows with existing data
function renderTable() {
  const table = document.getElementById('student-table');
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Class</th>
      <th>Attendance</th>
      <th></th>
    </tr>
  `;
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data[i].name}</td>
      <td>${data[i].age}</td>
      <td>${data[i].class}</td>
      <td>${data[i].attendance}</td>
      <td><button class="button" onclick="viewRecord(${i})">View</button></td>
    `;
    table.appendChild(row);
  }
}

// Save data to local storage
function saveRecord() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const classValue = document.getElementById('class').value;
  const attendance = document.getElementById('attendance').value;

  const record = {
    name: name,
    age: age,
    class: classValue,
    attendance: attendance
  };

  data.push(record);
  localStorage.setItem('studentData', JSON.stringify(data));
  renderTable();
  closeForm();
}

// Open the form to add a new record
function addRecord() {
  const formPopup = document.getElementById('form-popup');
  formPopup.style.display = 'block';
}

// Close the form
function closeForm() {
  const formPopup = document.getElementById('form-popup');
  formPopup.style.display = 'none';
}

// View details of a specific record
function viewRecord(index) {
  // Access the record using the index and display the details as desired
  const record = data[index];
  alert(`Name: ${record.name}\nAge: ${record.age}\nClass: ${record.class}\nAttendance: ${record.attendance}`);

   
}

// Load existing data and render the table
window.onload = function () {
  renderTable();
};

// btn.addEventListener("click", function () {
//      modal.style.display = "block";

//   });

 closeButton.addEventListener("click", function () {
    // Hide the modal
    modal.style.display = "none";
  });

  viewButton.addEventListener("click", function () {
    // Get the selected row
    var selectedRow = document.querySelector("#students tr.selected");

    // If a row is selected
    if (selectedRow) {
      // Get the student details from the selected row
      var cells = selectedRow.getElementsByTagName("td");
      var id = cells[0].textContent;
      var name = cells[1].textContent;
      var age = cells[2].textContent;
      var studentClass = cells[3].textContent;

      // Update the student details in the modal
      studentId.textContent = id;
      studentName.textContent = name;
      studentAge.textContent = age;
      studentClass.textContent = studentClass;

      // Show the modal
      modal.style.display = "block";
    }
  });
  document.getElementById('btn').addEventListener('click', function() {
  document.getElementById('form-popup').classList.remove('hidden');
});