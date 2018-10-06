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
        this.innerHTML = new Date();
        this.pollingObj = setTimeout(() => this.timePolling(), 1000);
    }
}

if (window.customElements && window.customElements.define) {
    window.customElements.define('x-time-now', TimeNowElement);
}
