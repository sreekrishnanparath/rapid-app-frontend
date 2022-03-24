import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './dto/company';
@Pipe({
  name: 'companyFilter'
})
export class CompanyFilterPipe implements PipeTransform {

  transform(items: Company[],search :string): Company[] {
    if(!items)return[];
    if(!search) return items;
    search = search.toLowerCase();
    return items.filter(
      (c :Company)=>{
        return c.companyName.toLowerCase().match(search)
      }

    );
  }


}
