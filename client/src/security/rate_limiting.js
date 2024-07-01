class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests; // Maximum number of requests allowed
        this.timeWindow = timeWindow; // Time window in milliseconds
        this.requests = []; // Array to store request timestamps
    }

    isAllowed() {
        const now = Date.now();
        // Filter out timestamps that are outside the time window
        this.requests = this.requests.filter(timestamp => now - timestamp < this.timeWindow);
        if (this.requests.length < this.maxRequests) {
            this.requests.push(now);
            return true;
        }
        return false;
    }
}

const rateLimiter = new RateLimiter(100, 60000); // Allow 100 requests per minute
window.rateLimiter = rateLimiter; // Expose the rate limiter globally if needed
