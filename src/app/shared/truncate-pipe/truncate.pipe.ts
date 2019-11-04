import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 200): string {

        if (value.length > limit) {
            return value.substr(0, limit);
        } else {
            return value
        }

        return ''
    }
}