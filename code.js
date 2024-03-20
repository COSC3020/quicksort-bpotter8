function quicksort(array) {
    let stack = [];
    let length = array.length;
    
    stack.push(0);
    stack.push(length - 1);

    while (stack.length > 0) {
        let back = stack.pop();
        let front = stack.pop();
        let pivot = partition(array, front, back);

        if (front < pivot - 1) {
            stack.push(front);
            stack.push(pivot - 1);
        }

        if (pivot + 1 < back) {
            stack.push(pivot + 1);
            stack.push(back);
        }
    }

    return array;
}

function partition(array, front, back) {
    let pivot = array[back];
    let i = front - 1;

    for (let j = front; j < back; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[back]] = [array[back], array[i + 1]];
    let pivInd = i + 1;
    
    return pivInd;
}
