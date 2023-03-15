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
  whereRUFrom(){
    return super.whereRUFrom() + this.race;
  }
}

let imfrom = new Asia('국적: SouthKorea ',"언어: Korean ","인종: Asian");
console.log(imfrom.whereRUFrom());
// 국적: SouthKorea 언어: Korean 인종: Asian