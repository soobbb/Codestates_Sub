import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	button {
		padding : 5px;
    margin : 2px;
    border-radius : 5px;
	}
`

function App() {
	return (
		<>
			<GlobalStyle />
			<Button>전역 스타일 적용하기</Button>
		</>
	);
}