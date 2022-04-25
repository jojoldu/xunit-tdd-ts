export class WasRun {
  private _wasRun = false;
  private _name: string;

  constructor(testMethod: string) {
    this._name = testMethod;
  }

  testMethod() {
    this._wasRun = true;
  }

  get wasRun(): boolean {
    return this._wasRun;
  }

  run() {

  }
}
