package main

import "fmt"

// this function is automatically called whenever main file is executed
func main() {
	// long way - more explicit
	//var card string = "ace of spades"

	// can also be written like this - when the type of the variable can be easily inferred
	// card := newCard()
	// do not need := for reassignment, only for new variables
	// card = "five of diamonds"

	// a slice = an array that can change in size {elements you want in the slice}
	// gets type deck from deck.go deck type declaration
	//cards := deck{newCard(), newCard()}

	// add new elements to slice, does not modify current slice, but makes a new slice and reassigns that
	// to the current slice
	//cards = append(cards, "six of spades")

	// creates a new deck
	cards := newDeck()

	// gets print function from deck.go
	cards.print()

	// iterate over slice
	/*for i, card := range cards {
		fmt.Println(i, card)
	}*/

	fmt.Println(cards)
}

// string indicates that the function returns a value of type string
/*func newCard() string {
	return "five of diamonds"
}*/
