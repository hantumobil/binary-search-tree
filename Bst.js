/**
 * Each Node
 */
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * The Tree
 */
class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while(current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }

            if (data === node.data) {

            }
        };
        this.root = removeNode(this.root, data);
    }
}

let bst = new BST();
bst.add(50);
bst.add(17);
bst.add(72);
bst.add(23);
bst.add(12);
bst.add(54);
bst.add(76);
bst.add(9);
bst.add(14);
bst.add(19);
bst.add(67);

console.log(bst.root)
console.log('findMin:', bst.findMin());
console.log('findMax:', bst.findMax());
console.log('find 12: ', bst.find(12));
console.log('find 13 (not member): ', bst.find(13));
console.log('isPresent 12: ', bst.isPresent(12));
console.log('isPresent 13 (not member): ', bst.isPresent(13));
