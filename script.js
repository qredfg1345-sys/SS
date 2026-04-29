/**
 * Role-Based Access Control and Page Logic
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check user role from browser storage
    const userRole = localStorage.getItem('userRole'); 
    
    // Select elements intended only for Administrators [cite: 47]
    const adminElements = document.querySelectorAll('.admin-only');
    
    if (userRole !== 'admin') {
        // Hide admin-specific features for Staff users
        adminElements.forEach(el => el.style.display = 'none');
    }
});

/**
 * Handle Login redirection and Role storage
 * @param {string} role - Selected role from the form
 */
function handleLogin(role) {
    localStorage.setItem('userRole', role); // Store for future pages
    alert("Welcome! Logging in as: " + role);
    
    // In your real project, change this to your dashboard file name
    // window.location.href = 'dashboard.html'; 
}
