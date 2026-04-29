/**
 * Real-time Synchronization and Role Management Script
 * Handles login redirection and UI adjustments based on user roles (Admin/Staff)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the user role from browser's local storage
    const userRole = localStorage.getItem('userRole'); 
    
    // Select all elements that should only be visible to administrators
    const adminOnlyElements = document.querySelectorAll('.admin-only');
    
    // Authorization Check: Hide admin features if the user is a Staff member
    if (userRole !== 'admin') {
        adminOnlyElements.forEach(element => {
            element.style.display = 'none'; // Apply CSS to hide restricted actions
        });
    }

    /* * Firebase Real-time Listener (Conceptual Example)
     * This function ensures that any data changes in Firestore reflect immediately in the UI.
     * Use this with "onSnapshot" to sync between Admin and Staff.
     */
    /*
    function startRealTimeSync(db) {
        onSnapshot(collection(db, 'schedules'), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "removed") {
                    console.log("A schedule was deleted by Admin. Removing from Staff view...");
                    document.getElementById(change.doc.id).remove();
                }
            });
        });
    }
    */
});

/**
 * Function to handle user login and store session data
 * @param {string} role - The selected user role (admin or staff)
 */
function handleLogin(role) {
    // Persist the user role for the current session [cite: 47]
    localStorage.setItem('userRole', role);
    
    // Redirect to the dashboard page after successful role assignment
    window.location.href = 'dashboard.html';
}
