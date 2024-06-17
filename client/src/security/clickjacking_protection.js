function addClickjackingProtection() {
    // JavaScript-based frame buster
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // Additional framebusting technique
    document.addEventListener('DOMContentLoaded', function () {
        if (window.top !== window.self) {
            document.body.style.display = 'none';
        }
    });
}

// Execute clickjacking protection
addClickjackingProtection();
