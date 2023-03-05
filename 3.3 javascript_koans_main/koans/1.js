// const Subject = function () {
//   const observers = [];

//   return {
//     subscribeObserver: function (observer) { observers.push(observer); },
//     unsubscribeObserver: function (observer) {
//       const index = observers.indexOf(observer);
//       if (index > -1) { observers.splice(index, 1); }
//     },
//     notifyObserver: function (observer) {
//       const index = observers.indexOf(observer);
//       if (index > -1) { observers[index].notify(); }
//     },
//     notifyAllObservers: function () { 
// 			for (let i = 0; i < observers.length; i += 1){
// 				observers[i].notify()
// 			}
// 		},
//   };
// };

// const Observer = function (observerName) {
//   let name = observerName;
//   return {
//     getName: function (name) { console.log("Observer Name:" + name); },
//     notify: function () { console.log("Observer " + name + " is notified!"); },
//   };
// };

// console.log(Observer("kincoding"));




// const kimcoding = Observer('kimcoding');
// const parkhacker = Observer('parkhacker');


// // subject.subscribeObserver(kimcoding,parkhacker); // [kimkoding]    =>  
// // console.log(observers); // [kimcoding, parkhacker]
// subject.subscribeObserver(kimcoding);
// console.log(observers); // [kimcoding]
// subject.subscribeObserver(parkhacker); 
// console.log(observers); // [parkhacker]

// subject.unsubscribeObserver(kimcoding); // []
// subject.notifyAllObservers();
function solution(my_string) {
  var answer = '';
  
  for(let i = 0; i < my_string.length; i++){
      if(my_string[i] === my_string[i].toUpperCase())
         return my_string[i].toLowerCase();
      else
          return my_string[i].toUpperCase();
  }
}
let my_string = "aaaAAA";
console.log(solution(my_string));