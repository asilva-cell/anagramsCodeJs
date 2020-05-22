function removeNonAplhaChar(item) {
	return item.toLowerCase().replace(/[^a-z0-9+]+/gi, "");
}

function sortAlphabetically(str) {
	return Array.from(str)
		.sort()
		.join("");
}

function addToPotentialAnagrams(anagramList, sortedStr, item) {
	sortedStr in anagramList
		? anagramList[sortedStr].push(item)
		: (anagramList[sortedStr] = [item]);
	return anagramList;
}

function checkForAnagrams(nestedInput) {
	let posibleAnagrams = {};
	nestedInput.map(item => {
		let sortedStr = sortAlphabetically(removeNonAplhaChar(item));
		addToPotentialAnagrams(posibleAnagrams, sortedStr, item);
	});
	return Object.values(posibleAnagrams).filter(list => list.length > 1);
}

const anagrams = input => {
	return checkForAnagrams(input);
};

if (process.env.NODE_ENV !== "test") {
	console["log"](
		anagrams([
			"cat",
			"dog",
			"bat",
			"bar",
			"rat",
			"rob",
			"scram",
			"god",
			"act",
			"crams",
			"tar",
			"angered",
			"enraged",
			"marcs"
		])
	);
}

export default anagrams;
