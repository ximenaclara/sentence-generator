const sentence1 = ['You must ', 'You will ', 'You shouldn\'t ', 'NEVER ', 'ALWAYS '];
const sentence2 = ['create ', 'destroy ', 'prepare ', 'imagine ', 'talk about ', 'insult ', 'be happy about ', 'be sad about '];
const sentence3 = ['relationships.', 'drawings.', 'vacations.', 'families.', 'moms.', 'dads.', 'pets.', 'school.', 'food.'];

const random1 = Math.floor(Math.random() * sentence1.length)
const random2 = Math.floor(Math.random() * sentence2.length)
const random3 = Math.floor(Math.random() * sentence3.length)

console.log(`${sentence1[random1]}${sentence2[random2]}${sentence3[random3]}`)