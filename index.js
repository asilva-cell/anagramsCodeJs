function removeNonAplhaChar(item) {
	return item.replace(/[^a-z0-9+]+/gi, "");
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
	let posibleAnagrams = {};
	nestedInput.forEach(item => {
		let sortedStr = sortAlphabetically(removeNonAplhaChar(item));
		posibleAnagrams = addToPotentialAnagrams(
			posibleAnagrams,
			sortedStr,
			item
		);
	});
	return Object.values(posibleAnagrams).filter(list => list.length > 1);
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
