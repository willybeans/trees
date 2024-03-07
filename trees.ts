export class BinarySearchTreeNode<T> {
  data: T;
  leftNode?: BinarySearchTreeNode<T>;
  rightNode?: BinarySearchTreeNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  root?: BinarySearchTreeNode<T>;
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }
}

function comparator(a: number, b: number) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

const bst = new BinarySearchTree(comparator);
// bst.insert(5);

// bst.insert(2);
// bst.insert(3);
// bst.insert(1);

// bst.insert(7);
// bst.insert(6);
// bst.insert(8);

// bst.inOrderTraversal(bst.root);

/*
Roots are decided either arbitrarily, or are usually
the median of all the numbers, so as to avoid maxing out its 
depth, which will ruin the advantages of its search speeds 

if you are constructing a tree from scratch, you can sort the 
numbers first to give the ability to pick the middle of all the
numbers 

traversals: 
depth-first traversal
breadth-first traversal

There are three different types of depth-first traversals, :

PreOrder traversal -
 visit the parent first and then left and right children;
InOrder traversal - 
visit the left child, then the parent and the right child;
PostOrder traversal -
 visit left child, then the right child 
 [if the right child has a left child, go to the next left child] 
 and then the parent;

 There is only one kind of breadth-first traversal--the level
  order traversal. This traversal visits nodes by 
  levels from top to bottom and from left to right.

*/
