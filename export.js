
//////////////////export
function sum(a,b){
    return a+b;
}
function difference(a,b){
    return a-b;
}

export {sum,difference};
export {sum as add ,difference as minus}; //aliasing


//import 
import {sum,difference} from 'common_method'
console.log(sum(2,3)); //5
console.log(difference(5,6));//-1

/// import as method
import 'common_method' as utils;
console.log(utils.sum(3,4)); // 7




//// default export 
// in a file there will be only 1 default export
var utils1={
    sum: function(a,b){ return a+b;},
    difference : function(a,b){ return a-b;}
};

export default utils1;

///
import utils1 from 'above_filename';
console.log(utils1.sum(1,9));//10
export default utils1;