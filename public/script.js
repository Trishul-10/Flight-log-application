const loginButton = document.querySelector('#login-form button');
const flightLogContainer = document.getElementById('flight-log-container');
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const logoutButton = document.getElementById('logout-button');
const addFlightLogButton = document.getElementById('add-flight-log-button');
const flightLogTable = document.getElementById('flight-log-table');
const flightLogTbody = document.getElementById('flight-log-tbody');

// Sample user credentials
const users = [
  { username: 'john', password: 'password123' },
  { username: 'jane', password: 'password456' }
];

// Sample flight log data
const flightLogs = [
  { tailNumber: 'N12345', flightID: 'FL001', takeoff: '2022-01-01 08:00', landing: '2022-01-01 10:00', duration: '2 hours' },
  { tailNumber: 'N67890', flightID: 'FL002', takeoff: '2022-01-15 09:00', landing: '2022-01-15 11:00', duration: '2 hours' }
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission behavior
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password match a user in the users array
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // Show the flight log entries
    flightLogContainer.style.display = 'block';
    loginForm.style.display = 'none';
    renderFlightLogTable();
  } else {
    // Show an error message
    errorMessage.textContent = 'Invalid username or password';
  }
});

logoutButton.addEventListener('click', () => {
  // Hide the flight log entries and show the login form
  flightLogContainer.style.display = 'none';
  loginForm.style.display = 'block';
  // Clear the username and password fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});

addFlightLogButton.addEventListener('click', () => {
  // Add a new flight log entry
});

function renderFlightLogTable() {
  // Render the flight log table
  const tableRows = flightLogs.map((flightLog) => {
    return `
      <tr>
        <td>${flightLog.tailNumber}</td>
        <td>${flightLog.flightID}</td>
        <td>${flightLog.takeoff}</td>
        <td>${flightLog.landing}</td>
        <td>${flightLog.duration}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    `;
  }).join('');
  flightLogTbody.innerHTML = tableRows;
}