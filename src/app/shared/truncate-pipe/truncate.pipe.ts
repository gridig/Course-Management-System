import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 200, completeWord = true): string {
        if (completeWord) {
            limit = value.length > limit ? value.substr(0, limit).lastIndexOf(' ') : limit;
        }

        return value.length > limit ? value.substr(0, limit) + '...' : value;
    }
}