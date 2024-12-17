//Edge Class
class Edge {
	constructor(toNode, isValid) {
    this.toNode = toNode;
    this.isValid = isValid;
  }
}

//Node Class
class Node {
	constructor(id, isFinal){
  	this.id = id;
    this.edges = [];
    this.isFinal = isFinal;
  }
}

//PathData Class
class PathData {
	constructor(){
  	this.nodesOrdered = [];
    this.edgesOrdered = [];
  }
}

let pathData = new PathData();
let pathDataList = [];

function dfs(node, pathData, pathDataList){
  //check for loop - add to output and end if yes
  if(pathData.nodesOrdered.includes(node, 0)){
  	pathData.isLoop = true;
    pathDataList.push(pathData);
    return pathDataList;
  }
  //if no loop, add node and continue
  pathData.nodesOrdered.push(node);
  //check for final node - add to output and end if yes
  if(node.isFinal){
  	pathDataList.push(pathData);
    return pathDataList;
  }
  //Look at each edge and call dfs recursively
  for(let edge of node.edges){
  	let newPathData = new PathData();
    for(let nodeTemp of pathData.nodesOrdered){
    	newPathData.nodesOrdered.push(nodeTemp);
    }
    for(let edgeTemp of pathData.edgesOrdered){
    	newPathData.edgesOrdered.push(edgeTemp);
    }
    newPathData.edgesOrdered.push(edge);
    dfs(edge.toNode, newPathData, pathDataList);
  }
}

/* //multishot nodes/edges
let node1 = new Node("node1", false);
let node2 = new Node("node2", false);
let node3 = new Node("node3", false);
let node4 = new Node("node4", false);
let node5 = new Node("node5", false);
let node6 = new Node("node6", false);
let node7 = new Node("node7", false);
let node8 = new Node("node8", false);
let node9 = new Node("node9", false);
let node10 = new Node("node10", false);
let node11 = new Node("node11", false);
let node12 = new Node("node12", false);
let node13 = new Node("node13", false);
let node14 = new Node("node14", false);
let node15 = new Node("node15", false);
let node16 = new Node("node16", false);
let node17 = new Node("node17", false);
let node18 = new Node("node18", false);
let node19 = new Node("node19", false);
let node20 = new Node("node20", false);
let node21 = new Node("node21", true);
let node22 = new Node("node22", false);

let edge1_2 = new Edge(node2, true);
let edge1_3 = new Edge(node3, true);
node1.edges.push(edge1_2);
node1.edges.push(edge1_3);

let edge2_4 = new Edge(node4, true);
let edge2_5 = new Edge(node5, true);
node2.edges.push(edge2_4);
node2.edges.push(edge2_5);

let edge3_7 = new Edge(node7, true);
let edge3_6 = new Edge(node6, true);
node3.edges.push(edge3_7);
node3.edges.push(edge3_6);

let edge4_8 = new Edge(node8, true);
let edge4_9 = new Edge(node9, false);
node4.edges.push(edge4_8);
node4.edges.push(edge4_9);

let edge5_9 = new Edge(node9, true);
let edge5_10 = new Edge(node10, true);
node5.edges.push(edge5_9);
node5.edges.push(edge5_10);

let edge6_12 = new Edge(node12, true);
let edge6_11 = new Edge(node11, true);
node6.edges.push(edge6_12);
node6.edges.push(edge6_11);

let edge7_9 = new Edge(node9, true);
let edge7_13 = new Edge(node13, false);
node7.edges.push(edge7_9);
node7.edges.push(edge7_13);

let edge8_14 = new Edge(node14, false);
let edge8_9 = new Edge(node9, false);
node8.edges.push(edge8_14);
node8.edges.push(edge8_9);

let edge9_15 = new Edge(node15, false);
let edge9_10 = new Edge(node10, true);
node9.edges.push(edge9_15);
node9.edges.push(edge9_10);

let edge10_16 = new Edge(node16, true);
let edge10_13 = new Edge(node13, false);
node10.edges.push(edge10_16);
node10.edges.push(edge10_13);

let edge11_12 = new Edge(node12, false);
let edge11_17 = new Edge(node17, true);
node11.edges.push(edge11_12);
node11.edges.push(edge11_17);

let edge12_18 = new Edge(node18, true);
let edge12_13 = new Edge(node13, true);
node12.edges.push(edge12_18);
node12.edges.push(edge12_13);

let edge13_14 = new Edge(node14, true);
let edge13_19 = new Edge(node19, false);
node13.edges.push(edge13_14);
node13.edges.push(edge13_19);

let edge14_15 = new Edge(node15, true);
let edge14_20 = new Edge(node20, true);
node14.edges.push(edge14_15);
node14.edges.push(edge14_20);

let edge15_21 = new Edge(node21, false);
let edge15_20 = new Edge(node20, true);
node15.edges.push(edge15_21);
node15.edges.push(edge15_20);

let edge16_22 = new Edge(node22, true);
let edge16_17 = new Edge(node17, false);
node16.edges.push(edge16_22);
node16.edges.push(edge16_17);

let edge17_20 = new Edge(node20, false);
let edge17_21 = new Edge(node21, false);
node17.edges.push(edge17_20);
node17.edges.push(edge17_21);

let edge18_20 = new Edge(node20, false);
let edge18_21 = new Edge(node21, false);
node18.edges.push(edge18_20);
node18.edges.push(edge18_21);

let edge19_20 = new Edge(node20, false);
let edge19_21 = new Edge(node21, false);
node19.edges.push(edge19_20);
node19.edges.push(edge19_21);

let edge20_21 = new Edge(node21, true);
node20.edges.push(edge20_21);

let edge22_20 = new Edge(node20, true);
let edge22_21 = new Edge(node21, false);
node22.edges.push(edge22_20);
node22.edges.push(edge22_21); */

//human nodes/edges
let node1 = new Node("node1", false);
let node2 = new Node("node2", false);
let node3 = new Node("node3", false);
let node4 = new Node("node4", false);
let node5 = new Node("node5", false);
let node6 = new Node("node6", false);
let node7 = new Node("node7", false);
let node8 = new Node("node8", false);
let node9 = new Node("node9", false);
let node10 = new Node("node10", false);
let node11 = new Node("node11", false);
let node12 = new Node("node12", false);
let node13 = new Node("node13", false);
let node14 = new Node("node14", false);
let node15 = new Node("node15", false);
let node16 = new Node("node16", false);
let node17 = new Node("node17", true);

let edge1_2 = new Edge(node2, true);
let edge1_3 = new Edge(node3, true);
node1.edges.push(edge1_2);
node1.edges.push(edge1_3);

let edge2_4 = new Edge(node4, true);
let edge2_5 = new Edge(node5, true);
node2.edges.push(edge2_4);
node2.edges.push(edge2_5);

let edge3_5 = new Edge(node5, true);
let edge3_8 = new Edge(node8, true);
node3.edges.push(edge3_5);
node3.edges.push(edge3_8);

let edge4_6 = new Edge(node6, true);
let edge4_7 = new Edge(node7, true);
node4.edges.push(edge4_6);
node4.edges.push(edge4_7);


let edge5_6 = new Edge(node6, true);
let edge5_7 = new Edge(node7, true);
node5.edges.push(edge5_6);
node5.edges.push(edge5_7);

let edge6_9 = new Edge(node9, true);
let edge6_10 = new Edge(node10, true);
let edge6_11 = new Edge(node11, true);
node6.edges.push(edge6_9);
node6.edges.push(edge6_10);
node6.edges.push(edge6_11);

let edge7_9 = new Edge(node9, true);
let edge7_10 = new Edge(node10, true);
let edge7_11 = new Edge(node11, true);
node7.edges.push(edge7_9);
node7.edges.push(edge7_10);
node7.edges.push(edge7_11);

let edge8_9 = new Edge(node9, true);
let edge8_10 = new Edge(node10, true);
let edge8_11 = new Edge(node11, true);
node8.edges.push(edge8_9);
node8.edges.push(edge8_10);
node8.edges.push(edge8_11);

let edge9_12 = new Edge(node12, true);
let edge9_13 = new Edge(node13, true);
node9.edges.push(edge9_12);
node9.edges.push(edge9_13);

let edge10_12 = new Edge(node12, true);
let edge10_13 = new Edge(node13, true);
node10.edges.push(edge10_12);
node10.edges.push(edge10_13);

let edge11_13 = new Edge(node13, true);
let edge11_14 = new Edge(node14, true);
node11.edges.push(edge11_13);
node11.edges.push(edge11_14);

let edge12_14 = new Edge(node14, true);
let edge12_15 = new Edge(node15, true);
let edge12_16 = new Edge(node16, true);
node12.edges.push(edge12_14);
node12.edges.push(edge12_15);
node12.edges.push(edge12_16);

let edge13_14 = new Edge(node14, true);
let edge13_15 = new Edge(node15, true);
let edge13_16 = new Edge(node16, true);
node13.edges.push(edge13_14);
node13.edges.push(edge13_15);
node13.edges.push(edge13_16);

let edge14_16 = new Edge(node16, true);
node14.edges.push(edge14_16);

let edge15_16 = new Edge(node16, true);
node15.edges.push(edge15_16);

let edge16_17 = new Edge(node17, true);
node16.edges.push(edge16_17);

let result = dfs(node1, pathData, pathDataList);

let validRatioSum = 0;

for(let path of pathDataList){
	path.pathLength = path.nodesOrdered.length;
  path.validCount = 0;
  path.invalidCount = 0;
  path.nodeNames = [];
  path.validPath = [];
  path.validRatioRunningTotal = [];
  for(let node of path.nodesOrdered){
  	path.nodeNames.push(node.id);
  }
  for(let edge of path.edgesOrdered){
  	if(edge.isValid){
    	path.validCount++;
      path.validPath.push(1);
    }
    else {
    	path.invalidCount++;
      path.validPath.push(0);
    }
    
    path.validRatioRunningTotal.push(+(path.validCount/path.validPath.length).toFixed(2));
  }
  path.validRatio = path.validCount/(path.validCount + path.invalidCount);
  
  validRatioSum += path.validRatio;
 
  console.log("***** PATH INFORMATION *****");
  console.log("PATH: " + path.nodeNames);
  console.log("PATH LENGTH: " + path.pathLength);
  //console.log("VALID PATH EDGES: " + path.validCount);
  //console.log("INVALID PATH EDGES: " + path.invalidCount);
  console.log("VALID RATIO: " + path.validRatio);
  console.log("VALID/INVALID PATH: " + path.validPath);
  console.log("VALID RATIO RUNNING TOTAL: " + path.validRatioRunningTotal);
 
}

console.log("***** TOTAL PATH INFORMATION *****");
console.log("PATH COUNT: " + pathDataList.length);
console.log("VALID RATIO AVERAGE: " + (validRatioSum/pathDataList.length));

console.log("***** GRAPH DATA OUTPUT *****");
for(let path of pathDataList){
	console.log(path.validRatioRunningTotal);

}





