/* 코드를 작성한 뒤 터미널에 순서대로
1. tsc src/index.ts
2. node src/index.ts 
라고 치면 결과를 확인해볼 수 있습니다. */
// type User = {
//   name: string;
//   email: string;
//   isAdmin: boolean;
// };

function sendEmail(user: { name: string; email: string; isAdmin: boolean }) {
  console.log(`안녕하세요, ${user.name}!`);
  if (user.isAdmin) {
    console.log(
      `
      권한이 admin이시군요.
      이메일은 ${user.email} 입니다.
      `
    );
  } else {
    console.log(
      `
      권한이 user이시군요.
      이메일은 ${user.email} 입니다.
      `
    );
  }
}

const kimcoding = {
  name: '김코딩',
  email: 'kimcoding@codestates.com',
  isAdmin: false,
};

const parkhacker = {
  name: '박해커',
  email: 'parkhacker@codestates.com',
  isAdmin: true,
};

sendEmail(kimcoding);
sendEmail(parkhacker);
