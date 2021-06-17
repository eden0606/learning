package main

import "fmt"

// create a new type of deck which is a slice of strings
type deck []string

// loop through deck of cards and print out the values
// (d deck) is the receiver = any variable of type deck now gets access to this print method
// d = refers to the actual variable we are working with (similar to this or self), usually refers
// one or two letter abbreviation similar to type name

func newDeck() deck {
	cards := deck{}

	cardSuits := []string{"spades", "diamonds", "hearts", "clubs"}
	cardValues := []string{"ace", "two", "three", "four"}

	// _ is for variables that you don't care about/won't use but still need a placeholder
	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, suit+" of "+value)
		}
	}

	return cards
}

func (d deck) print() {
	for i, card := range d {
		fmt.Print(i, card)
	}
}
