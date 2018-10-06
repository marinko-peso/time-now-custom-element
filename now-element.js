class TimeNowElement extends HTMLElement {
    constructor() {
        super();
        this.pollingObj = null;
    }

    connectedCallback() {
        this.timePolling();
    }

    disconnectedCallback() {
        if (this.pollingObj)
            clearTimeout(this.pollingObj);
    }

    timePolling() {
        this.innerHTML = this.formattedTime;
        this.pollingObj = setTimeout(() => this.timePolling(), 1000);
    }

    get formattedTime() {
        const d = new Date();
        const year = d.getFullYear();
        const monthNum = d.getMonth().toString().padStart(2, '0');
        const dayNum = d.getDate().toString().padStart(2, '0');
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');

        return `${year}-${monthNum}-${dayNum} ${hours}:${minutes}:${seconds}`;
    }
}

if (window.customElements && window.customElements.define) {
    window.customElements.define('x-time-now', TimeNowElement);
}
