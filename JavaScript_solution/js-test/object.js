// title : "Mercedes",
// price :20000,
// color:[`white`,`red`],
// model:2022,


// let car = {
//  title : "Mercedes",
//  price :20000,
//  color:[`white`,`red`],
//  model:2022,
// }

// console.log(car);
// console.log(car.title);
// console.log(car.color);
// console.log(car.color[1]);

// let user = {
//   // proparityes
// firstName : `groub`,
// lastName : `two`,
// age : 25,
// skills : ["html","css","js"],
// email:`test@gmail.com`,
// gender:`male`,
// active:false,
// phoneNumber :{
//   first: `000000000000000`,
//   second:`075156131316161`,
// },
// adress:{  // nested object from user
//   first:`aqaba`,
//   second:`amman`,
//     egypt: { // nested object fron adress
//         one :  `jeza`  ,
//         two :   `cairo` ,
//     }
// },

// //method
// isActive:function(){
//   if (user.active === true){ //لحتى يميز الشرط بيتكلم عن مين   objectمهم تكتب اسم ال 
//    return `hello user`
//   }
//   else {
// return`iam sorry your not active`
//   }
// }
// };
// console.log(user);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills[1]);  //access with index
// console.log(user.skills.join("|"));
// console.log(user.adress);
// console.log(user.adress.egypt.one);
// console.log(user.adress.first);
// console.log(user["adress"]); //bracket notation
// console.log(user["adress"]["egypt"]["two"]);
// console.log(user.isActive());

// let user = {
//     age : 30,
// };
// console.log(user)

// //add property

// user.age = 24 ;
// user["usaerName"]="mohammad";

// console.log (user)
// user.sayHallo=function(){
//  return "hello"
// }
// console.log (user.sayHallo())
// console.log (user)

//------------------------------------------

/*
  Object
  - Create Object With Create Method
*/

// let user = {
//     age: 20,
//     doubleAge: function () {
//       return this.age * 2;
//     },
//   };
  
//   console.log(user);
//   console.log(user.age);
//   console.log(user.doubleAge());
  
//   let obj = Object.create({});
  
//   obj.a = 100;
  
//   console.log(obj);
  
//   let copyObj = Object.create(user);
  
//   copyObj.age = 50;
//   copyObj.pass = 60;
  
//   console.log(copyObj);
//   console.log(copyObj.age);
//   console.log(copyObj.doubleAge());

//-----------------------------------------

/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
      return this.prop1;
    },
  };
  
  let obj2 = {
    prop2: 2,
    meth2: function () {
      return this.prop2;
    },
  };
  
  let targetObject = {
    prop1: 100,
    prop3: 3,
  };
  
  let finalObject = Object.assign(targetObject, obj1, obj2);
  //راح ياخذ اول وحدة بقابلها prop1 لو ما حطيت قيمة ل 
  finalObject.prop1 = 200;
  finalObject.prop4 = 4;
  
  console.log(finalObject);
  
  let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
  
  console.log(newObject);
      