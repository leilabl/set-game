"use strict";

var Card = function (properties, values) {
	for (var i = 0; i < properties.length; i++) {
		this[properties[i]] = values[i];
	}
};

var setRand = {};

function generateRandomNumbers(properties) {
	var num = properties.length;
	var valNum = properties[0].length;
	var randArray = [];
	for (var j = 0; j < num; j++) {
		randArray.push(Math.floor(Math.random() * (valNum - 1) + 1));
	}
	var randStr = randArray.toString();
	if (randStr in setRand) return generateRandomNumbers(properties);
	else setRand[randStr] = null;
	return randArray;
}

function randomizeValues(arr) {
	var tempArr = generateRandomNumbers(arr);
	var randomValues = [];
	for (var i = 0; i<arr.length; i++) {
		randomValues.push(arr[i][tempArr[i]]);
	}
	return randomValues;
}

function generateAllCards(numCards, properties, values) {
	var allCards = [];
	var tempCard;
	for (var i = 0; i < numCards; i++) {
		tempCard = new Card(properties, randomizeValues(values));
		allCards.push(tempCard);
	}
	return allCards;
}

function checkValidSets (allCards, min) {
	var allSets = [];
	var check, tempSet, testObj;
    function combineAndCheck(n, arr, tempComb, allSets) {
        if (n === 0) {
            if (tempComb.length > 0) {
				check = true;
				for (var key in tempComb[0]) {					
					testObj = {};
					testObj[tempComb[0][key]] = null;
					for (var x = 1; x < min; x++) {
						if (!testObj[tempComb[x][key]]) testObj[tempComb[x][key]] = null;
					}
					if (Object.keys(testObj).length > 1 && Object.keys(testObj).length < min) check = false;
				}
				if (check) {
					tempSet = [];
					for (var z = 0; z < tempComb.length; z++) {
						tempSet.push(tempComb[z]);
					}
					allSets.push(tempSet);
				}
            }
            return;
        }
        for (var j = 0; j < arr.length; j++) {
            combineAndCheck(n - 1, arr.slice(j + 1), tempComb.concat([arr[j]]), allSets);
        }
        return;
    }
    combineAndCheck(min, allCards, [], allSets);
    return allSets;
}