If you would like to know about the roadmap what career you are looking for check out [Roadmap Generator](https://roadmap.sh/)

The language I have choosen is golang but you can choose any of the language you wish to choose

***Visual way to learn Algorithms:***
- [CS Vis Tool](https://csvistool.com/InsertionSort)
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)


**Sorting**

***Insertion Sort***
Basic logic:
- When you play cards you will select one card at a time from the unsorted side and insert in the correct order in the left sorted side by shifting the cards toward right

1) [Insertion Sort](https://www.youtube.com/watch?v=8mJ-OhcfpYg&list=PLZPZq0r_RZON1eaqfafTnEexRzuHbfZX8&index=14)
    - Time complexity [code](../dsa/excercises/go/insertion-sort/insertion-sort.go)   
        - Code Snippet
            ```go
              for i:=1;i<len(ins.Elements);i++{
                key:= ins.Elements[i]
                j := i - 1 
                for (j>=0 && ins.Elements[j] > key ){
                    ins.Elements[j+1] = ins.Elements[j]
                    j = j-1
                }
                ins.Elements[j+1] = key  
                }
            ```
            - Best Case  
                * Here outer loop executed n - 1 times so **O(n)**
                * Asumming that array is already sorted so that inner loop wont execute it and only comparison happens so the time complexity is **O(n)**
            - Average Case 
            - Worst Case 
