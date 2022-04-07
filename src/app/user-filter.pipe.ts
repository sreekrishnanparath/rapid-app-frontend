import { Pipe, PipeTransform } from '@angular/core';
import { User } from './dto/user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(items: User[],search :string): User[] {
    if(!items)return[];
    if(!search) return items;
    search = search.toLowerCase();
    return items.filter(
      (user :User)=>{
        return user.userEmail.toLowerCase().match(search)
      }

    );
  }

}
