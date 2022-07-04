class CallerManagerDto {
  _division="SELECT";
  _number="";
  _name="";
  _dept="";
  _status="";
  _memo="";

  get number() {
    return this._number;
  }

  set number(value) {
    this._number = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get dept() {
    return this._dept;
  }

  set dept(value) {
    this._dept = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get memo() {
    return this._memo;
  }

  set memo(value) {
    this._memo = value;
  }

  get division() {
    return this._division;
  }

  set division(value) {
    this._division = value;
  }

  changeDivisionBySelect(){
    this.division = "SELECT";
  }

  changeDivisionByUpdate(){
    this.division = "UPDATE";
  }
}

export default class {
  CreateOne(){
    const callerManager = new CallerManagerDto();
    callerManager.division = "INSERT";
    return callerManager;
  }
}
