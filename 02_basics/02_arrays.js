const marvel__heros=["thor", "Ironman","spiderman"]
const dc_heros=["superman", "flash", "batman"]

// marvel__heros.push(dc_heros);

// console.log(marvel__heros);
// console.log(marvel__heros[3][1]);

// const allHeros=marvel__heros.concat(dc_heros)
// console.log(allHeros)


//Good Practice
// const all_new_heros=[...marvel__heros, ...dc_heros]
// console.log(all_new_heros)

const another_array=[1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sundram"))
console.log(Array.from("sundram"))
console.log(Array.from({name: "sundram"})) //Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3))