class Movie{

  constructor(title,director,genre,realeseYear,rating){
    this.title = title
    this.director = director
    this.genre = genre
    this.realeseYear = realeseYear
    this.rating = rating 
  }

  overview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.realeseYear}.
    It received a rating of ${this.rating}`
  }
}
let movie1 = new Movie("Locos","Jaime","Drama",2004,8.9)
let movie2 = new Movie("HP","Jates","Fantasy",2002,9.9)
let movie3 = new Movie("Ramiro","Claudia","Drama",2004,5.2)
let movie4 = new Movie("Harina","Jaime","Comedy",2022,3.2)
let movie5 = new Movie("P#tas Redes Sociales","Ibarreche","Comedy",2023,7.5)

console.log(movie1.overview())
console.log(movie2.overview())
console.log(movie3.overview())
console.log(movie4.overview())
console.log(movie5.overview())