export class WasRun {
  private _wasRun = false;

  testMethod() {
    this._wasRun = true;
  }

  get wasRun(): boolean {
    return this._wasRun;
  }
}
