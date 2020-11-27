import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
if(!images || images.length === 0 ) return 'assests/img/no-image.png'
return images[0].url;
  //   if(!images){
  //     return 'assets/img/3ae17816-621e-403b-a910-538cdab6429a.jpg';
  //   }
  //   if(images.length > 0){
  //     return images[0].url;
  //   }
  //   else{
  //     return 'assets/img/3ae17816-621e-403b-a910-538cdab6429a.jpg';
  //   }
  }

}
