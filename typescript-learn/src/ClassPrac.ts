class Animal {
  protected name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  speak(sound = '왕왕!') {
    console.log(`${this.name}(은/는) ${sound}하고 웁니다.`);
  }
}

class Mouse extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(sound = '찍찍') {
    super.speak(sound);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(sound = '야옹') {
    super.speak(sound);
  }
}

let jerry = new Mouse('제리');
let tom = new Cat('톰');

jerry.speak();
tom.speak('냥냥');
