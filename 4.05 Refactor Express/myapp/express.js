// Express v4.16.0 부터는 body-parser를 따로 설치하지 않고, 
// Express 내장 미들웨어인 express.json()을 사용합니다.
const jsonParser = express.json({strict: false});
// Object 형태가 아닌 String 형태도 받을 수 있게 하려면 아래와 가은 처리를 해줘야 합니다.
// express.json 속성 중 strict의 디폴트 값은 true로 되어있어 Object만 허용되어 있는 상태이기 때문입니다.

// 생략
app.post('/api/users', jsonParser, function (req, res) {
})


// Node.js HTTP 모듈을 이용한 코드에 CORS 헤더를 붙이려면, 응답 객체의 writeHead 메서드를 이용할 수 있습니다. Node.js에서는 이 메서드 등을 이용하여 라우팅마다 헤더를 매번 넣어주어야 합니다. 
// 그뿐만 아니라, OPTIONS 메서드에 대한 라우팅도 따로 구현해야 합니다. 하지만, cors 미들웨어를 사용하면 이 과정을 간단하게 처리할 수 있습니다.

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

// 생략
if (req.method === 'OPTIONS') {
  res.writeHead(200, defaultCorsHeader);
  res.end()
}

// npm install cors

// 모든 요청에 CORS 적용
const cors = require('cors');
// 생략
app.use(cors());

// 특정 요청에 CORS 적용
const cors = require('cors')

// 생략
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

