import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, length: number = 10, trial: string = '.....'): string {
    return text.length > length ? text.substring(0, length) + trial : text;
  }

}
