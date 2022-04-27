import { TestCase } from './TestCase';

export class WasRun extends TestCase {
  private _wasRun = false;
  private _wasSetup = false;

  constructor(testMethod: string) {
    super(testMethod);
  }

  testMethod() {
    this._wasRun = true;
  }

  override setUp(): void {
    this._wasSetup = true;
  }

  get wasRun(): boolean {
    return this._wasRun;
  }

  get wasSetup(): boolean {
    return this._wasSetup;
  }
}
