// task_0/js/main.ts

// 1. Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 23,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Lee",
  age: 26,
  location: "Seattle",
};

// 3. Array of students
const studentsList: Student[] = [student1, student2];

// 4. Render table when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  // Optional: Add header
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Location"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid #ccc";
    th.style.padding = "10px";
    th.style.backgroundColor = "#f4f4f4";
    headerRow.appendChild(th);
  });
  tbody.appendChild(headerRow);

  // Add student rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid #ccc";
    nameCell.style.padding = "8px";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #ccc";
    locationCell.style.padding = "8px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);

  // Center table
  table.style.margin = "40px auto";
  table.style.borderCollapse = "collapse";
  table.style.fontFamily = "Arial, sans-serif";
});