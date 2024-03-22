[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Answer:

In the worst case, the chosen pivot is either the smallest or largest element in the array. Because there are n elements in the array, the runtime for the 'partition' function is $\Theta(n)$. In the worst case in the 'quicksort' function itself, the stack could grow to n elements if the each element of the array would need to be partitioned seperately. This would result in a runtime of $\Theta(n)$. With these functions together, the worst case runtime would be $\Theta(n^2)$.
