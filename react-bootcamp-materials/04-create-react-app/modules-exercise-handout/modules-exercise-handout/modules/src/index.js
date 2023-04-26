import getFruits from './food';
import { choice, remove } from './helpers';

const fruits = getFruits();
const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');

remove(fruits, randomFruit);
const fruitsLeft = fruits.length;

console.log(`I'm sorry, we're all out. We have ${fruitsLeft} fruits left.`);
