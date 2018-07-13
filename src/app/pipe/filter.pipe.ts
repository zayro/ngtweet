import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], filters: Object) {


    if (!arr) { return []; }
    if (!filters) { return arr; }


      console.log(filters);
      const filterKeys = Object.keys(filters);

      return arr.filter(eachObj => {
        return filterKeys.every(eachKey => {
          if (!filters[eachKey].length) {
            return true; // passing an empty filter means that filter is ignored.
          }
          return filters[eachKey].includes(eachObj[eachKey]);
        });
      });

  }
}

// export class FilterPipe implements PipeTransform {
//   transform(value: any, input: string, searchableList: any) {
//       if (input) {
//           input = input.toLowerCase();
//           return value.filter(function (el: any) {
//               let isTrue = false;
//               // tslint:disable-next-line:forin
//               for (const k in searchableList) {
//                   if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
//                       isTrue = true;
//                   }
//                   if (isTrue) {
//                       return el;
//                   }
//               }
//           });
//       }
//       return value;
//   }
// }

// export class FilterPipe implements PipeTransform {

//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;

//     searchText = searchText.toLowerCase();

//       return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });

//    }
// }
