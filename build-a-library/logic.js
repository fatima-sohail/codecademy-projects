
class Media {
  constructor(title) {
    //parameter is used only inside the constructor, it has limited scope
    //by saving para in a property, we can access param outside of the class
    //prepended _ to differenciate the property from getters and setters
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }
  //_ means this property should not be publically accessed-its private and protected
  //it still works BUT dicouraged practice to access property directly by this._property
  //instead, to access it publically, use getters to access property and setter to change the property
  //create getters for every property
  get isCheckedOut() {
    return this._isCheckedOut
  }

  get title() {
    return this._title
  }

  get ratings() {
    return this._ratings
  }

  //setter changes a property hence imp to assign a value, while getter returns a property
  set isCheckedOut(value) {
    this._isCheckedOut = value
  }

  //tamper the checkout status:if its originally false, make it true
  //toggle means to change the current state to opposite 
  toggleCheckOutStatus() {
    //setter = getter??
    //this.property instead of this._property cz accessed getter/setter
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {

    //reduce will find sum of the array
    let ratingSum = this._ratings.reduce((currentSum, rating) =>
      currentSum + rating, 0
    );
    let result = ratingSum / this._ratings.length
    return result;
  }

  addRating(add) {
    //add value to the end of the array using push
    this._ratings.push(add);
  }
}

//child class
class Book extends Media {
  constructor(author, title, pages) {
    //pass any argument that parent cons has
    super(title)
    this._author = author
    this._title = title
    this._pages = pages
  }

  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
}

//child class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

//Book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus()

//can't print togglechecOutStatus() cz it doesnt return anything
//prints the status using getter 
console.log(historyOfEverything.isCheckedOut) //prints: true

//call .addRating() three times on the above instance
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

//call getAverageRating() on the instance
historyOfEverything.getAverageRating()

//log it to the console
console.log(historyOfEverything.getAverageRating()) //prints: 4.6666

//create a movie instance
const speed = new Movie('Jan de Bont', 'speed', 116);
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut); //prints: false

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating()) //prints: 2.333

//child class
class CD extends Media {
  constructor(title, movieCast, songs) {
    super(title)
    this._movieCast = movieCast;
    this._songs = songs;
  }
  
  get movieCast() {
    return this._movieCast
  }

  get songs() {
    return this._songs
  }

  addRatings(inputRating) {
    //rating should be between 1 and 5
    if (inputRating <= 5 && inputRating >= 1) {
      this._rating = inputRating
    }
  }

  shuffle() {
    //sort() shuffles the array randomly
    //subtract from 0.5 means introducing random value from -0.5 to +0.5 
    this._songs.sort(() => Math.random() - 0.5)
  }
}

//instance of the CD class
const testCD = new CD('Diamond', ['Lady Gaga', 'Cooper'], ['fly me to the moon', 'levitating', 'baby']);

testCD.shuffle();
//print songs shuffle using testCD.songs instead of shuffle() because shuffle() doesnt return anything
console.log(testCD.songs) //prints: [ 'fly me to the moon', 'baby', 'levitating' ]