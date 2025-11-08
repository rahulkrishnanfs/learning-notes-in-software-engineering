package main

import "fmt"

type Insertion struct{
	Elements [9]int
}

func (ins *Insertion)DisplayElements(){
	for _,val := range ins.Elements{
		fmt.Println(val)
	}
}

func (ins *Insertion)Sorting(){
	for i:=1;i<len(ins.Elements);i++{
       key:= ins.Elements[i]
	   j := i - 1 
	   
	   for (j>=0 && ins.Elements[j] > key ){
		ins.Elements[j+1] = ins.Elements[j]
		j = j-1
	   }
	   ins.Elements[j+1] = key  
	}
}

func main(){
	array := Insertion{
		Elements: [...]int{6,1,7,4,2,9,8,5,3},
	}
	array.DisplayElements()
	array.Sorting()
}