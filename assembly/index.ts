// The entry file of your WebAssembly module.

import * as console from  'bindings/console'

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function sayHello(s: string): void {
  console.log(null); // see Example 3
}
