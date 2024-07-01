function addClickjackingProtection() {
    // JavaScript-based frame buster to prevent clickjacking
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // Additional framebusting technique to hide the body if framed
    document.addEventListener('DOMContentLoaded', function () {
        if (window.top !== window.self) {
            document.body.style.display = 'none';
        }
    });
}

// Execute clickjacking protection
addClickjackingProtection();
