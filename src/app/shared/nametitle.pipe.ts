import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlename'
})

export class TitleNamePipe implements PipeTransform {
    transform(value: string, hypen: boolean) {
        let name = 'Mr. ' + value;
        return hypen ? name.split(' ').join('-') : name;
    }
}
