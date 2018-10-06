class TimeNowElement extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
      }

    constructor() {
        super();
        this.pollingObj = null;
    }

    get format() {
        return this.getAttribute('format') || 'Y-M-D H:M:S';
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
        const year = d.getFullYear().toString();
        const monthNum = d.getMonth().toString().padStart(2, '0');
        const dayNum = d.getDate().toString().padStart(2, '0');
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');

        let date = this.format;
        date = date.replace('Y', year);
        date = date.replace('M', monthNum);
        date = date.replace('D', dayNum);
        date = date.replace('H', hours);
        date = date.replace('M', minutes);
        date = date.replace('S', seconds);

        return date;
    }
}

if (window.customElements && window.customElements.define) {
    window.customElements.define('x-time-now', TimeNowElement);
}
