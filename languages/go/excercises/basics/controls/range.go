package main

import "fmt"

func main(){

	/* For Range on Array */

	for x,y := range [...]int{11,22,33,44}{
		fmt.Println("Index is",x, "And Value is", y)
	}

	/* For Range on Map */

	for key,value := range map[string]int{"number1":1,"number2":2}{
		fmt.Println("Key is",key, "Value is", value)
	}

	/* F0r Slice */
	for k,l := range []int{123,456,789}{
		fmt.Println("Key is",k, "and the values is",l)
	}
}