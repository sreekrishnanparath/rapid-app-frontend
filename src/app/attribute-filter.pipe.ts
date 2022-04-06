import { Pipe, PipeTransform } from '@angular/core';
import { Attribute } from './dto/attribute';

@Pipe({
  name: 'attributeFilter'
})
export class AttributeFilterPipe implements PipeTransform {

  transform(items: Attribute[],search :string): Attribute[] {
    if(!items)return[];
    if(!search) return items;
    search = search.toLowerCase();
    return items.filter(
      (attribute :Attribute)=>{
        return attribute.attrDesc.toLowerCase().match(search)
      }

    );
  }

}
