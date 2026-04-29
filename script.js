/**
 * Train Management System Logic
 * Handles Authentication and Role Assignment (Admin vs Staff)
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the page from refreshing on submit
            event.preventDefault();

            // Get selected role and username
            const role = document.getElementById('userRole').value;
            const username = document.getElementById('username').value;

            // Save session data in LocalStorage for synchronization [cite: 11, 16]
            localStorage.setItem('userRole', role);
            localStorage.setItem('currentUser', username);

            // Real-time Feedback
            alert(`Welcome ${username}! Logged in as ${role.toUpperCase()}`);

            // Redirect to the system dashboard (to be created in Sprint 1) [cite: 71, 73]
            // window.location.href = 'dashboard.html';
        });
    }
});

/**
 * Note: For Sprint 2 & 3, we will add Firebase listeners (onSnapshot) 
 * here to sync data updates between Admin and Staff in real-time.
 */
