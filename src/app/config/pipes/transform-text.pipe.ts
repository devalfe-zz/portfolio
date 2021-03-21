import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformText'
})
export class TransformTextPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
