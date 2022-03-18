import { Pipe, PipeTransform } from '@angular/core';
import { Module } from './dto/module';

@Pipe({
  name: 'moduleFilter'
})
export class ModuleFilterPipe implements PipeTransform {

  transform(module: Module, searchText: string):any {

  }

}
