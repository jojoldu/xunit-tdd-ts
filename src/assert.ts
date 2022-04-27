export function assertEquals(expected:any, actual: any):void {
  if(expected !== actual) {
    throw new Error(`expected <${expected}> but was <${actual}>`);
  }
}
