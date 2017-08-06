import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectFilter'
})

export class ObjectFilterPipe implements PipeTransform {
  transform(pipeData, pipeModifier) {
		
		if (pipeData==null) {
      return null;
    }

    if (pipeModifier==null || pipeModifier=="") {
      return null;
    }
		
    return  pipeData.filter((eachItem)=> {

      if (eachItem['objectName'] === pipeModifier) {

        return null;

      }

      else{
        
        return  eachItem['objectName'].toLowerCase().includes(pipeModifier.toLowerCase());

      }
    });
  }
}