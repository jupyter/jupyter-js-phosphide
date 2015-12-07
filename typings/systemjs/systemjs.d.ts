// Type definitions for SystemJS 1.6
// Project: https://github.com/systemjs/systemjs
// Definitions by: Steven Silvester <https://github.com/blink1073/>

interface System {
  delete(name: string): void;
  has(name: string): boolean;
  get(name: string): any;
  import(name: string, parentName?: string): Promise<any>;
  normalize(name: string, parentName?: string, parentAddress?: string): Promise<string>;
  locate(load: { name: string, metadata: any }): Promise<string>;
  fetch(load: { name: string, address: string, metadata: any }): Promise<string>;
  translate(load: { name: string, address: string, source: string, metadata: any }): Promise<string>;
  instantiate(load: { name: string, address: string, source: string, metadata: any }): Promise<any>;
}

declare var System: System;

declare module 'systemjs' {
  export = System;
}
