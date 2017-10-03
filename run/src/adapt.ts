import {Stream} from 'xstream';

declare var window: any;

function getGlobal(): any {
  if(typeof window !== undefined) {
    return window;
  }
  return global;
}

export interface AdaptStream {
  (s: Stream<any>): any;
}

getGlobal().adaptStream = (x => x) as AdaptStream;

export function setAdapt(f: AdaptStream): void {
  getGlobal().adaptStream = f;
}

export function adapt(stream: Stream<any>): any {
  return getGlobal().adaptStream(stream);
}
