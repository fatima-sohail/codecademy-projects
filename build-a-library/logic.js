
class Media {
    constructor (title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = []
    }
  
    get isCheckedOut(){
      return this._isCheckedOut
    }
  
    get title (){
      return this._title
    }
  
    get ratings (){
      return this._ratings
    }
  
    set isCheckedOut(value){
      this._isCheckedOut = value
    }
    toggleCheckOutStatus(){
      this.isCheckedOut =! this.isCheckedOut;
    }
    getAverageRating (){
      let ratingSum = this._ratings.reduce((currentSum, rating)=>
        currentSum + rating, 0
        );
        let result = ratingSum/this._ratings.length
        return result;
    }
    addRating (add){
      this._ratings.push(add);
    }
  }
  
  class Book extends Media {
    constructor (author, title, pages){
      //pass any argument that parent cons has
      super(title)
      this._author = author
      this._title = title
      this._pages = pages
    }
  
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title)
      this._director = director;
      this._runTime = runTime;
    }
    get director (){
      return this._director;
    }
    get runTime (){
      return this._runTime;
    }
  }
  
  //create a Book instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  historyOfEverything.toggleCheckOutStatus()
  //get the value from getter func
  console.log(historyOfEverything.isCheckedOut)
  //call .addRating() three times on the above instance
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  //call getAverageRating() on the instance
  historyOfEverything.getAverageRating()
  //log it to the console
  console.log(historyOfEverything.getAverageRating())