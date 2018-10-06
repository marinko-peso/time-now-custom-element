class TimeNowElement extends HTMLElement {
    static get observedAttributes() {
        return ['format'];
      }

    constructor() {
        super();
        this.pollingObj = null;
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.rules = {
            Y: 'year',
            M: 'monthNum',
            B: 'monthName',
            D: 'dayNum',
            h: 'hours',
            m: 'minutes',
            s: 'seconds'
        };
    }

    get format() {
        return this.getAttribute('format') || 'Y-M-D h:m:s';
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
        const dateElements = {
            year: d.getFullYear().toString(),
            monthNum: d.getMonth().toString().padStart(2, '0'),
            monthName: this.months[d.getMonth()],
            dayNum: d.getDate().toString().padStart(2, '0'),
            hours: d.getHours().toString().padStart(2, '0'),
            minutes: d.getMinutes().toString().padStart(2, '0'),
            seconds: d.getSeconds().toString().padStart(2, '0')
        };

        let date = this.format;
        Object.entries(this.rules).forEach(r => date = date.replace(r[0], dateElements[r[1]]));
        return date;
    }
}

if (window.customElements && window.customElements.define) {
    window.customElements.define('x-time-now', TimeNowElement);
}
