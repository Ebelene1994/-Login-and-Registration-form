import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { database } from "./firebaseconfiguration.js";

const userTable = document.getElementById("userTable");

const usersRef = ref(database, "user/");

onValue(usersRef, (snapshot) => {
  userTable.innerHTML = ""; // Clear existing table rows

  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      const user = childSnapshot.val();

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.userid}</td>
      `;

      userTable.appendChild(row);
    });
  } else {
    userTable.innerHTML = `<tr><td colspan="4">No users found.</td></tr>`;
  }
});
