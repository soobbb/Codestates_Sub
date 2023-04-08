// const jsonParser = express.json({strict: false}); // 원래 객체로만 받는 데 false로하면 배열 같은 걸로 받을 수 있게 됨
// morgan 미들웨어가 세팅되어 있습니다.
// HTTP 요청 logger를 편리하게 사용할 수 있는 미들웨어 입니다.
app.use(morgan('tiny')); // 로그(log)를 관리하기 위한 별도의 서드파티 라이브러리 -> tiny (로그의 포맷)


app.use(cors(
  // {origin: '*', // 출처 허용 옵션
  // credential: 'true' // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근}
));

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.send(discussionsData); // json과 차이점은 send는 알맞은 Contnet-Type을 지정
  }
}