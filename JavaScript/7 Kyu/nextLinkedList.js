function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    if (index === null || node === null) throw new Error("Null Error")
    while (index > 0) {
      if (!node.next) throw new Error("Index out of range")
      node = node.next
      index--
    }
    return node
  }