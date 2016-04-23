#Set Game

-------

###Overview

This repository contains the logic that creates a deck of random cards from the widely known Set Game and identifies all the possible "sets" that can be created from that deck.

This logic can find the solution to an arbitrary number of sets, although the most common set size is 3 cards. Each card can have multiple properties (4 and more) such as color, shape, background color, etc. Similarly, each property has a value, randomly assigned from a predefined pool of values (also 3 or more).

This game accepts the generation of decks with an arbitrary number of cards.

###Rules

In order to form a set, all cards must either:

a) have all distinct values for each property, or
b) have all equal values to a number of properties, but at least for one property all cards must have distinct values.

For example, if two cards have equal values for the same property but a third card has a different value that is not a valid set.

-------

##Installation for the tests

In order to run the test you need [Node](https://nodejs.org) version 0.10+ install.

Once you have Node installed, download or clone the repository and in your command line go to the repository's directory and install testem locally (add `-g` to install globally):

```npm install testem```

Once installed just type `testem` in your terminal and go to `localhost:7357`