let movies = 
			 [


				{
					title: 'Avengers',
					genre: 'Action',
					releasedDate: Date(2012,3,11),
					rating: 3.5

				},

			 
				
				{
					title: 'Spiderman: Homecoming',
					genre: 'Action-Adventure',
					releasedDate: Date(2017,5,28),
					rating: 4.7
				}, 

			
				{
					title: 'Thor',
					genre: 'Action-Adventure',
					releasedDate: Date(2011,4,6),
					rating: 2.1
				},

			
			
				{
					title: 'Ironman',
					genre: 'Action-Adventure',
					releasedDate: Date(2008,4,2),
					rating: 3.6
				},

 
			
				{
					title: 'Captain America: The First Avenger',
					genre: 'Action-Adventure',
					releasedDate: Date(2011,6,22),
					rating: 5.8
				},

			]

const displayRating = (i) => console.log(`The movie ${ movies[i].title } has ${movies[i].rating} stars.`);

const showAllMovies = () => {
	for (let {title,genre} of movies) {
		console.log(`${title} is a/an  ${genre} movie`)
	}  

	// for (paulo of movies) {
	// 	let {title, genre} = paulo
	// 	console.log(`${title} is a/an  ${genre} movie`)
	// }
}


const selectStart = (param) => {
	for (let i=param; i<movies.length; i++) {
		let {title, genre} = movies[i];
		console.log(`${title} is a/an  ${genre} movie`)
	}

}

const showTitles = (x) => {
	let isSatisfied = false
	for(let i=0; i<movies.length; i++){
		let {title,rating} = movies[i];
		if(rating >= x && rating<= x+1) {
			console.log(`${title} ${rating} stars`)
			isSatisfied = true
		} 
		
	}
	if(!isSatisfied){
		console.log(`No movies with that rating`)
	}
}


// let array = ['a', 'b', 'c', 'd']
// let target1 = 'a'
// let target2 = 'z'

//searchFunc(array, target1) = true
//searchFunc(array, target2) = false

// const searchFunc = (array, target) => {
// 	for(let i = 0; i<array.length; i++){
// 		if(target === array[i]){
// 			return true
// 		} 
// 	}
// 	return false;
// }


/*

Complete isConsecutive()

let array1 = [1,2,3,4,5,6,7,8]
let array2 = [1,2,3,6,7,12]
let array3 = [11,12,13,14]
let array4 = [21,14,19]

isConsecutive(array1) = true because numbers in array are consecutive
isConsecutive(array2) = false because numbers in array are not consecutive
isConsecutive(array3) = true because numbers in array are consecutive
isConsecutive(array4) = false because numbers in array are not consecutive

const isConsecutive = () => {
	
}
*/

				