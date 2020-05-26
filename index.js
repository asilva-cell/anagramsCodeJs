function removeNonAplhaChar(item) {
	return item.toLowerCase().replace(/[^a-z0-9+]+/g, "");
}

function sortAlphabetically(str) {
	return Array.from(str)
		.sort()
		.join("");
}

function addToPotentialAnagrams(anagramsList, sortedStr, item) {
	if (!anagramsList[sortedStr]) {
		anagramsList[sortedStr] = [];
	}
	anagramsList[sortedStr].push(item);
	return anagramsList;
}

const anagrams = nestedInput => {
	const possibleAnagrams = nestedInput.reduce((acc, item) => {
		const sortedStr = sortAlphabetically(removeNonAplhaChar(item));
		return addToPotentialAnagrams(acc, sortedStr, item);
	}, {});
	return Object.values(possibleAnagrams).filter(list => list.length > 1);
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
