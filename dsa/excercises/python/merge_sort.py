def merge(left,right):
	temp_arr=[]
	i=0
	j=0
	while(i<len(left) and j<len(right)):
		if left[i] < right[j]:
			temp_arr.append(left[i])
			i=i+1
		else:
			temp_arr.append(right[j])
			j=j+1
	while(i<len(left)):
			temp_arr.append(left[i])
			i=i+1
	while(j<len(right)):
			temp_arr.append(right[j])
			j=j+1
	return temp_arr


def mergeSort(arr):
	print(arr)
	if (len(arr)<2):
		return arr
	else:
		left = mergeSort(arr[:len(arr)//2])
		right = mergeSort(arr[len(arr)//2:])
		return merge(left,right)


# arr = [3,7,4,2,5,6,1]
arr = [2,9,12,5,6,7,1]

sort_arr = mergeSort(arr)

print(sort_arr)