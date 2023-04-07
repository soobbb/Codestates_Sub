function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let idx = 0;
  
  let newArr = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      newArr += ' ';
    }else{
      idx = alphabet.indexOf(str[i]);
      if(idx-secret >= 0){          //1-2 = -1
        newArr += alphabet[idx-secret];
      }else{
        newArr += alphabet[26+(idx-secret)];
      }
    }
  }
  return newArr;
}
