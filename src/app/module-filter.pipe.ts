import { Pipe, PipeTransform } from '@angular/core';
import { Module } from './dto/module';

@Pipe({
  name: 'moduleFilter'
})
export class ModuleFilterPipe implements PipeTransform {


  transform(items: Module[],search :string): Module[] {
    if(!items)return[];
    if(!search) return items;
    search = search.toLowerCase();
    return items.filter(
      (module :Module)=>{
        return module.moduleDesc.toLowerCase().match(search)
      }

    );
  }
}
