console.log('This is mod.js');
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports={
//     name:'Harry',
// avg:average,
// repo:'Github'
// };
// module.exports=average;
module.exports.name='Harry';

