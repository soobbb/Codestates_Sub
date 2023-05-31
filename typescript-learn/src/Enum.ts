enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
let greenValue: number = Color.Green;
let blueValue: number = Color.Blue;

console.log(c);
console.log(greenValue);
console.log(blueValue);

enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

function makeRequest(url: string, method: HttpMethod) {
  // ...
}

makeRequest("/api/data", HttpMethod.Post);