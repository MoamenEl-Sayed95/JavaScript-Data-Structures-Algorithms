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

	/// WRITE ADDVERTEX METHOD HERE ///
	//                               //
	//                               //
	//                               //
	//                               //
	///////////////////////////////////

}



function test() {
    let myGraph = new Graph();
    myGraph.printGraph();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    {}

*/   