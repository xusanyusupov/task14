///// Masala 01
// let arr = [1,2,3,4,5,6,7,8]
// function cenNUM(num){
//     let numLen = num.length
//     if(numLen % 2 === 0){
//         let result = num[numLen / 2 - 1]
//         let result2 = num[numLen / 2]
//         return (result + result2) / 2
//     }return num[Math.floor(numLen / 2)]
// }console.log(cenNUM(arr));

///// Masala 02
// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ]
// let res = products.filter(item => item.id !== 4)
// console.log(res);

///// Masala 03
// function isAlphabetic(str) {
//     return /^[a-zA-Z]+$/.test(str);
// }
//   console.log(isAlphabetic("Hello")); 
//   console.log(isAlphabetic("Hello World")); 

///// Masala 04
// let arr = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
// let result = {}
// arr.forEach((item) => {
//     if(result[item]){
//         result[item]++
//     }else{
//         result[item] = 1
//     }
// })
// console.log(result);

///// Masala 05
///// Ustozdan so'rash kerak 
///// String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map)
///// Input: "Hello world"
///// Outpu: [3, 9, 12]

///// Masala 06
// let str = 'hi my name is Xusan'
// let res = str.split('').some((item) => item === ' ')
// console.log(res);

///// Masala 07
// let obj = {
//     a:2,
//     b:3,
//     c:4,
//     d:5,
//     e:6
// }
// let res = []
// for (const key in obj) {
//     res.push(`${key}: ${obj[key]}`)
// }
// console.log(res);

///// Masala 08
// const pupils = [
//     {name: "Elbek", protcent: 95},
//     {name: "Zafar", protcent: 78},
//     {name: "Aziz", protcent: 83},
//     {name: "Jasur", protcent: 88},
//     {name: "Bobur", protcent: 66},
//     {name: "Kamron", protcent: 75},
// ];
// let res = pupils.map(item => 
//     item.protcent >= 80 ? `${item.name}: ${item.protcent} - Imtihondan o'tdingiz` : `${item.name}: ${item.protcent} - Imtihondan yiqildingiz, yaxshiroq harakat qiling`
// );
// console.log(res);

///// Masala 09
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6, 7];
// const cenNUM = (nums1, nums2) => {
//     const arrey3 = [...nums1, ...nums2].sort((a, b) => a - b)
//     const mid = arrey3.length / 2;
//     return arrey3.length % 2 === 0 ? (arrey3[mid - 1] + arrey3[mid]) / 2 : arrey3[Math.floor(mid)];
// };
// const result = cenNUM(nums1, nums2);
// console.log(result);

///// Masala 10
// function searchMatrix(matrix, target) {
    // return matrix.some(row => row.includes(target));
// }
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));  
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); 
