class TrieNode {
    constructor(data) {
        this.data = data;
        this.children = {};
        this.isWord = false;
    }
    addChild(alphabet) {
        if (this.children[alphabet] === undefined) {
            let child = new TrieNode(alphabet);
            this.children[alphabet] = child;
        }
    }
    nextNode(alphabet) {
        if (this.children[alphabet] === undefined) {
            return null;
        } else {
            let child = this.children[alphabet];
            return child;
        }
    }
}

class TrieTree {
    constructor() {
        this.root = new TrieNode(null);
    }
    addWord(string) {
        //array of letters
        if (typeof string === "string") {
            let stringElements = string.trim().split("");
            this.root.addChild(stringElements[0]);
            let nextNode = this.root.children[stringElements[0]];
            for (let i = 1; i < stringElements.length; i++) {
                const alphabet = stringElements[i];
                nextNode.addChild(alphabet);
                nextNode = nextNode.children[alphabet];
                if (i === stringElements.length - 1) {
                    nextNode.isWord = true;
                }
            }
        }
    }
    findLastNodeOfWord(string) {
        if (typeof string === "string") {
            let stringElements = string.trim().split("");
            let nextNode = this.root.nextNode(stringElements[0]);
            if (nextNode === null) {
                return false;
            }
            for (let i = 1; i < stringElements.length; i++) {
                const alphabet = stringElements[i];
                nextNode = nextNode.nextNode(alphabet);
                if (
                    i === stringElements.length - 1 &&
                    nextNode.isWord === true
                ) {
                    return nextNode;
                }
            }
        }
    }
}

let node = new TrieTree();
node.addWord("baby");
node.addWord("baby boy");
node.addWord("babe");
console.log(node.findLastNodeOfWord("baby"));
