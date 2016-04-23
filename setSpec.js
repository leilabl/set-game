describe("Set Game", function() {
  var fourProperties = ['color', 'shape', 'shading', 'number'];
  var fiveProperties = ['color', 'shape', 'shading', 'number', 'background'];
  var fourValues = ['red', 'oval', 'solid', 1];
  var fiveValues = ['red', 'oval', 'solid', 1, 'yellow'];

  //helper variables for values
  var colorVal = ['red', 'green', 'blue', 'purple'];
  var shapeVal = ['oval', 'square', 'diamond', 'triangle'];
  var shadingVal = ['solid', 'striped', 'hollow', 'dotted'];
  var numberVal = [1, 2, 3, 4];
  var backgVal = ['yellow', 'white', 'black', 'gray'];

  var allVals = [colorVal, shapeVal, shadingVal, numberVal, backgVal];


  describe("Card Class", function() {

    var cardFour, cardFive;

    beforeEach(function() {
      cardFour = new Card(fourProperties, fourValues);
      cardFive = new Card(fiveProperties, fiveValues);
    });

    it("should have the properties passed to Card", function() {
      expect(cardFour.color).toEqual('red');
      expect(cardFive.shape).toEqual('oval');
      expect(cardFour.shading).toEqual('solid');
      expect(cardFive.number).toEqual(1);
      expect(cardFive.background).toEqual('yellow');
    });
  });


  describe("generateRandomNumbers function", function() {
    var randArray1 = generateRandomNumbers(colorVal);
    var randArray2 = generateRandomNumbers(colorVal);

    it("generates an array of random numbers", function() {
      expect(typeof randArray1).toEqual('object');
      expect(randArray1.length).toEqual(4);
      expect(typeof randArray1[0]).toEqual('number');
      expect(randArray1).not.toEqual(randArray2);
    });

    it("generates distinct random arrays by saving previous arrays in a set", function() {
      var myKeys = Object.keys(setRand);
      var arrToStr = randArray1.join(",");
      expect(arrToStr).toEqual(myKeys[0]);
    });
  });


  describe("randomizeValues function", function() {
    var randomArr = randomizeValues(allVals);

    it("creates an object with random properties", function() {
      expect(randomArr).not.toEqual(fiveValues);
    });
  });


  describe("generateAllCards function", function() {
    var testDeck;

    beforeEach(function() {
      testDeck = generateAllCards(9, fiveProperties, allVals);
    });

    it("generates an array of distinct random cards", function() {
      expect(typeof testDeck).toEqual('object');
      expect(testDeck.length).toEqual(9);
      expect(testDeck[0]).not.toEqual(testDeck[1]);
      expect(Object.keys(testDeck[0])).toEqual(['color', 'shape', 'shading', 'number', 'background']);
    });
  });


  describe("checkValidSets function", function() {
    var testCards = [
      {color: 1, shape: 1, shading:1, number: 1, background: 1},
      {color: 2, shape: 2, shading:2, number: 2, background: 2},
      {color: 3, shape: 3, shading:3, number: 3, background: 3}, 
      {color: 1, shape: 2, shading:2, number: 2, background: 1}, 
      {color: 1, shape: 3, shading:3, number: 3, background: 1},
      {color: 1, shape: 1, shading:1, number: 3, background: 1},
      {color: 1, shape: 1, shading:1, number: 2, background: 1}  
    ];

    var validSets3 = [
      [
        {color: 1, shape: 1, shading:1, number: 1, background: 1},
        {color: 2, shape: 2, shading:2, number: 2, background: 2},
        {color: 3, shape: 3, shading:3, number: 3, background: 3}
      ], 
      [
        {color: 1, shape: 1, shading:1, number: 1, background: 1},
        {color: 1, shape: 2, shading:2, number: 2, background: 1},
        {color: 1, shape: 3, shading:3, number: 3, background: 1}
      ],
      [
        {color: 1, shape: 1, shading:1, number: 1, background: 1},
        {color: 1, shape: 1, shading:1, number: 3, background: 1},
        {color: 1, shape: 1, shading:1, number: 2, background: 1}
      ]
    ];

    var testCards4 = [
      {color: 1, shape: 1, shading:1, number: 1, background: 1},
      {color: 2, shape: 2, shading:2, number: 2, background: 2},
      {color: 3, shape: 3, shading:3, number: 3, background: 3},
      {color: 4, shape: 4, shading:4, number: 4, background: 4}, 
      {color: 1, shape: 2, shading:2, number: 2, background: 1}, 
      {color: 1, shape: 3, shading:3, number: 3, background: 1},
      {color: 1, shape: 4, shading:4, number: 4, background: 1},
      {color: 1, shape: 1, shading:1, number: 3, background: 1},
      {color: 1, shape: 1, shading:1, number: 2, background: 1}  
    ];

    var validSets4 = [
      [
        {color: 1, shape: 1, shading:1, number: 1, background: 1},
        {color: 2, shape: 2, shading:2, number: 2, background: 2},
        {color: 3, shape: 3, shading:3, number: 3, background: 3},
        {color: 4, shape: 4, shading:4, number: 4, background: 4}
      ], 
      [
        {color: 1, shape: 1, shading:1, number: 1, background: 1},
        {color: 1, shape: 2, shading:2, number: 2, background: 1},
        {color: 1, shape: 3, shading:3, number: 3, background: 1},
        {color: 1, shape: 4, shading:4, number: 4, background: 1}
      ]
    ];

    it("determines all valid sets for a set size of 3", function() {
      var setsOf3 = checkValidSets(testCards, 3);
      expect(setsOf3).toEqual(validSets3);
    });

    it("determines all valid sets for a larger set", function() {
      var setsOf4 = checkValidSets(testCards4, 4);
      expect(setsOf4).toEqual(validSets4);
    });
  });
});

