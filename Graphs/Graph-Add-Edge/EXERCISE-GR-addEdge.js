class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

	/// WRITE ADDEDGE METHOD HERE ///
	//                             //
	//                             //
	//                             //
	//                             //
	/////////////////////////////////

}



function test() {
    let myGraph = new Graph();

    myGraph.addVertex(1);
    myGraph.addVertex(2);
    myGraph.addEdge("1", "2");

    myGraph.printGraph();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    {
      1: 2
      2: 1
    }

*/  