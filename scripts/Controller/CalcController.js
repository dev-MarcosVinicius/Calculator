class CalcController {
    constructor() {
        this._locale = "pt-BR"
        this._displayCalcEl = document.querySelector("#display");
        this._dateCl = document.querySelector("#data");
        this._timeCl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){
        this.setdisplayDateTime();
        setInterval(()=>{
            this.setdisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    initButtonEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach(btn => {
            this.addEventListenerAll(btn, 'click drag', e=>{
                console.log(btn.className.baseVal.replace('btn-',""));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            })
        });
    }

    setdisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayDate(){
        return this._dateCl.innerHTML;
    }

    set displayDate(value){
        this._dateCl.innerHTML = value;
    }

    get displayTime(){
        return this._timeCl.innerHTML;
    }

    set displayTime(value){
        this._timeCl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}