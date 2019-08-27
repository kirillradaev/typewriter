const sentence = "hello there from lighthouse labs";

// const arr = sentence.split(' ');
// console.log(arr);
let delay = 200;
let count = 0;

for (let i = 0; i < sentence.length; i++ ) {
  count += delay;
  setTimeout(() => {
  process.stdout.write(sentence[i]); 
}, count);
}

setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * delay);
