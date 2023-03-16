class World {
  constructor(nation,language){
      this.nation = nation;
      this.language = language;
  }

  whereRUFrom(){
    return this.nation + this.language;
  }
}

class Asia extends World {
  constructor(nation,language,race){
      super(nation,language);
      this.race = race;
  }
  whereRUFrom1(){
    return super.whereRUFrom() + this.race;
  }
}
let imfrom = new Asia('국적: SouthKorea ',"언어: Korean ","인종: Asian");
console.log(imfrom.whereRUFrom1());

// const Asia = Object.create(World);
// Asia.race = race;
// Asia.whereRUFrom1 = function(){
//   return whereRUFrom() + Asia.race;
// }

// let imfrom = new Asia('국적: SouthKorea ',"언어: Korean ","인종: Asian");
// console.log(imfrom.whereRUFrom1());
// 국적: SouthKorea 언어: Korean 인종: Asian