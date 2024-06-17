class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }

    isAllowed() {
        const now = Date.now();
        this.requests = this.requests.filter(timestamp => now - timestamp < this.timeWindow);
        if (this.requests.length < this.maxRequests) {
            this.requests.push(now);
            return true;
        }
        return false;
    }
}

const rateLimiter = new RateLimiter(100, 60000); // 100 requests per minute

window.rateLimiter = rateLimiter; // Expose it globally if needed
