import { TestCase } from './TestCase';
import { WasRun } from './WasRun';
import { assertEquals } from './assert';

export class TestCaseTest extends TestCase {

  private wasRun: WasRun;

  constructor(testMethod: string) {
    super(testMethod);
  }

  override setUp() {
    this.wasRun = new WasRun('testMethod');
  }

  override tearDown() {
    console.log('프로젝트 종료');
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

  testTearDown(): void {
    assertEquals(false, this.wasRun.tearDown);
    this.wasRun.run();
    assertEquals(true, this.wasRun.tearDown);
  }
}
