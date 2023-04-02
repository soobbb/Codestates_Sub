// const [isLoading, setIsLoading] = useState(true);

// // 생략, LoadingIndicator 컴포넌트는 별도로 구현했음을 가정합니다
// return {isLoading ? <LoadingIndicator /> : <div>로딩 완료 화면</div>}

useEffect(() => {
  setIsLoading(true);
  fetch(`http://서버주소/proverbs?q=${filter}`)
    .then(resp => resp.json())
    .then(result => {
      setProverbs(result);
      setIsLoading(false);
    });
}, [filter]);