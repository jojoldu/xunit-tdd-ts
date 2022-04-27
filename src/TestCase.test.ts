import { TestCase } from './TestCase';
import { WasRun } from './WasRun';
import { assertEquals } from './assert';

export class TestCaseTest extends TestCase {

  constructor(testMethod: string) {
    super(testMethod);
  }

  private wasRun: WasRun;

  override setUp() {
    this.wasRun = new WasRun('testMethod');
  }

  testRunning(): void {
    assertEquals(false, this.wasRun.wasRun);
    this.wasRun.run();
    assertEquals(true, this.wasRun.wasRun);
  }

  testSetup(): void {
    assertEquals(false, this.wasRun.wasSetup);
    this.wasRun.run();
    assertEquals(true, this.wasRun.wasSetup);
  }
}
