/* 기존에는 파일의 최상위에서 import 지시자를 이용해 라이브러리 및 파일을 불러왔습니다. */
import moduleA from "library";

form.addEventListener("submit", e => {
  e.preventDefault();
  someFunction();
});

const someFunction = () => {
  /* 그리고 코드 중간에서 불러온 파일을 사용했습니다. */
}

// Dynamic Import
form.addEventListener("submit", e => {
  e.preventDefault();
	/* 동적 불러오기는 이런 식으로 코드의 중간에 불러올 수 있게 됩니다. */
  import('library.moduleA')
    .then(module => module.default)
    .then(someFunction())
    .catch(handleError());
});

const someFunction = () => {
    /* moduleA를 여기서 사용합니다. */
}