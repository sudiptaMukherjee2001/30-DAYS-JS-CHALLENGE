/* Default exports are imported without curly braces. */
/* import add from "./Day.13.export.mjs"; */


//  import { obj } from "./Day.13.export.mjs" 



/* import { func1, func2, func3, func4 } from "./Day.13.export.mjs"; */



/* import DefaultExport from "./Day.13.export.mjs" */




/* importing entire module */
/* import * as module from "./Day.13.export.mjs"
 */





/* const result = add(3, 2);
console.log("add=>", result); */

/* const { name, age, gender, address } = obj;
console.log("obj=>", name, age, gender, address()); */

/* console.log("func1==>", func1());
console.log("func2==>", func2());
console.log("func3==>", func3());
console.log("func4==>", func4()); */

// console.log("Default export==>", DefaultExport());

const { name, age, address } = module
console.log(name, age, address());