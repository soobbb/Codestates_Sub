function isPositiveP(number){
  const executor = (resolve, reject)=>{ // 비동기 실행자
      setTimeout(()=>{
          if(typeof number === 'number'){
              // resolve
              console.log(number);
              resolve(number >=0? "양수":"음수");
          }else{
              // reject
              reject("주어진 값이 숫자형 값이 아닙니다");
          }
      },2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}
const res = isPositiveP(3);

// promise 비동기 처리 결과 확인
res
.then((res)=> {
  console.log("작업 성공: ", res);
})
.catch((err)=>{
  console.log("작업 실패: ", err);
});

const printStringAsync1 = async (string) => {
  const executer = (resolve, reject) => {
    setTimeout(() => {
      if (typeof string === "string") {
        resolve(string);
      } else {
        reject("스트링이 아닙니다.");
      }
    }, Math.floor(Math.random() * 100) + 1);
  };
  const result = new Promise(executer);
  const output = await result;
  console.log(output);
};

printStringAsync1("Hello, world!");
printStringAsync1([]);
