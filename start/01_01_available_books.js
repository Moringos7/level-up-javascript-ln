class books {
  
  constructor(title,author,isbn,numCopies){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies; 
  }

  getAvailability(){
    if(this.numCopies == 0){
      return "Out of stock"
    }else if(this.numCopies < 10){
      return "low stock"
    }else{
      return "in stock"
    }
  }

  
  sell(numSold){
    for (let index = 0; index < numSold; index++) {
      this.sell()
    }
  }

  sell(){
    if(this.numCopies == 0){
        throw "Don't have copies available"
    }
    this.numCopies--
  }

  restock(numCopies){
    this.numCopies += numCopies
  }

  restock(){
    this.numCopies += 5
  }

}

console.log("Hello José Miguel")