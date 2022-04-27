import { TestCase } from './TestCase';
import { WasRun } from './WasRun';

export class TestCaseTest extends TestCase{

  constructor(testMethod: string) {
    super(testMethod);
  }

  testRunning(): void {
    const wasRun = new WasRun('testMethod');
    console.log(wasRun.wasRun); // false여야함
    wasRun.run();
    console.log(wasRun.wasRun); // true여야함
  }
}
