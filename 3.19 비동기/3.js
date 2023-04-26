let promise = new Promise(function(resolve, reject) {
	resolve("성공");
});

promise
.then(value => {
	console.log(value);
	// "성공"
})
.catch(error => {
	console.log(error);
})
.finally(() => {
	console.log("성공이든 실패든 작동!");
	// "성공이든 실패든 작동!"
})