public class QuickSortMidPivotLR {

    public static void quickSort(int[] arr, int left, int right) {
        int l = left;
        int r = right;
        int pivot = arr[left + (right - left) / 2]; // choose middle element as pivot

        while (l <= r) {
            // Move left pointer until element >= pivot
            while (arr[l] < pivot) {
                l++;
            }

            // Move right pointer until element <= pivot
            while (arr[r] > pivot) {
                r--;
            }

            // If pointers haven’t crossed, swap
            if (l <= r) {
                int temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;

                l++;
                r--;
            }
        }

        // Recursively sort the two halves
        if (left < r)
            quickSort(arr, left, r);
        if (l < right)
            quickSort(arr, l, right);
    }

    // Test the code
    public static void main(String[] args) {
        int[] arr = {8, 3, 1, 7, 0, 10, 2};

        System.out.println("Before Sorting:");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("\nAfter Sorting:");
        printArray(arr);
    }

    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}