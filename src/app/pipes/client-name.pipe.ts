import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clientName'
})
export class ClientNamePipe implements PipeTransform {

  transform(email:string): string[] {
    return email.split('@',1);
  }

}
