package main

import "fmt"


func main(){
    var sum int
	
	/* Normal for loop*/
	for i:=0;i<=10;i++{
		sum += i
	}
	fmt.Println("Sum is ", sum)

	/*while loop */

	j:=0
	for j<=10{
		fmt.Println(j)
		j+=1
	}

}