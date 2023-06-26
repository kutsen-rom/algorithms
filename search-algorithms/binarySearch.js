function binarySearch(numbers, target) {
    var first = 0;
    var last = numbers.length - 1;
    while (first <= last) {
        var midpoint = Math.floor((first + last) / 2);
        if (numbers[midpoint] === target) {
            return midpoint;
        }
        else if (numbers[midpoint] < target) {
            first = midpoint + 1;
        }
        else {
            last = midpoint - 1;
        }
    }
    return null;
}
var nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
binarySearch(nums, 6);
