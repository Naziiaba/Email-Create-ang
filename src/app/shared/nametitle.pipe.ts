import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlename'
})

export class TitleNamePipe implements PipeTransform {
    /**
     * transform method will take value as input string
     * and it will return transformed output.
     * second param (hypen in our case) will act as config option
     * we can use that to put some logic and based on that login we can 
     * do our transformation.
     */
    transform(value: string, hypen: boolean) {
        let name = 'Mr. ' + value;
        return hypen ? name.split(' ').join('-') : name;
    }
}
