import { TestCase } from './TestCase';

export class WasRun extends TestCase {
  private _wasRun = false;

  constructor(testMethod: string) {
    super(testMethod);
  }

  testMethod() {
    this._wasRun = true;
  }

  get wasRun(): boolean {
    return this._wasRun;
  }
}
