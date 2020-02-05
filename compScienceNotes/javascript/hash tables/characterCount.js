function countCharacters(str) {
	const charMap = {};
	for (let char of str) {
		if (!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}
	}

	return charMap;
}

// console.log(countCharacters('liopleurodon'));
console.log(countCharacters('llama'));
