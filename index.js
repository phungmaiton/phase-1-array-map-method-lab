const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


/* let string = tutorials.map(function (tutorial) {
  return tutorial.toLowerCase();
});

const titleCased = () => {
  string.forEach(string => {
  string.split(' ');
  string.map(function (word) { 
    return (word.charAt(0)).toUpperCase() + word.slice(1);
  })});
  return string.join(' ');
}

 */
/* const titleCased = () => {
  string.split(' ');
  string.map(function (word) { 
    return (word.charAt(0)).toUpperCase() + word.slice(1);
  }); 
  return string.join(' ');
}

 */

const toUpperCase = (tutorial) => {
  let word = tutorial.split(' ');

  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }; 
  return word.join(' ');
};


const titleCased = () => {
  return tutorials.map(toUpperCase)
};


