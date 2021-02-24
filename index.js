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

function toTitleCase(sentence) {
  let newSentence = sentence.split(" ").map(word => word.replace(word[0], word[0].toUpperCase())).join(" ");
  return newSentence
}

const titleCased = () => {
  return tutorials.map(toTitleCase)
}
