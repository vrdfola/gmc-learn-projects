/*
    At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character and to determine:
    Instructions
The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters.
*/
// const sentence = 'The quick brown fox jumps over the lazy dog.';

function countCharacters(sentence) {
    return sentence.length;
}

function countWords(sentence) {
    return sentence.split(' ').length;
}

function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numOfVowels = 0;
    for (let letter of sentence) {
        if (vowels.includes(letter.toLowerCase())) {
            numOfVowels++;
        }
    }
    return numOfVowels;
}

function counter() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const characters = countCharacters(sentence);
    const words = countWords(sentence);
    const vowels = countVowels(sentence);

    return {characters, words, vowels};
}