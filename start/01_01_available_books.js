class Book {
  
  constructor(title,author,isbn,numCopies){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies; 
  }
  
  // This is used like a property
  get availability() {
    return this.getAvailability();
  }

  getAvailability(){
    if(this.numCopies == 0){
      return "Out of stock" + this.numCopies
    }else if(this.numCopies < 10){
      return "low stock" + this.numCopies
    }else{
      return "in stock" + this.numCopies
    }
  }

  
  sell(numSold){
    if(arguments.length == 0){
      numSold = 1
    }
    if(this.numCopies - numSold >= 0){
      this.numCopies -= numSold
    }else{
      throw "Don't have enough copies available"
    }
  }

  restock(numCopies){
    if(arguments.length == 0){
      numCopies = 5
    }
    this.numCopies += numCopies
  }

}

console.log("Hello José Miguel")
const hp = new Book("Harry Potter","JK","978-3-16-148410-0",0)
console.log(hp.getAvailability())
hp.restock()
console.log(hp.getAvailability())
hp.restock()
console.log(hp.getAvailability())
hp.sell(2)
console.log(hp.getAvailability())