$(document).on('ready', function() {
    $.ajax({
        url: '/2017/7/input.txt',
        success: function(data) {
            input = data;
            calculateProgram(input);
        }
    });
});

var Node = function(nodeName, nodeWeight){
    this.name = nodeName;
    this.weight = nodeWeight;
    this.parent = null;
    this.childString = null;
    this.children = new Array();
    this.combinedWeight = 0;
    this.setParent = function(parentNode){
        this.parent = parentNode;
    }
    this.addChildString = function(childString){
        this.childString = childString;
    }
    this.addChild = function(node){
        children[node.name] = node;
    }
    this.addWeight = function(weight){
        this.combinedWeight += weight;
    }
    this.setWeight = function(weight){
        this.weight = weight;
    }
}

function calculateProgram(inputData){
    var nodeArray = new Array();
    //firstly create all nodes as individual
    programs = inputData.split('\n');
    for (i=0; i< programs.length; i++){
        $('.input').append(programs[i] + '<br/>');
        nodeSplit = programs[i].split(' -> ');
        nodeNameWeight = nodeSplit[0].split(' ');
        nodeName = nodeNameWeight[0].toString();
        nodeWeight = parseInt(nodeNameWeight[1].substring(1,nodeNameWeight[1].length - 1));
        console.log(nodeName + ' + ' +nodeWeight)
        var node = new Node(nodeName, nodeWeight);
        
        if (nodeSplit[1] != undefined){
            node.addChildString(nodeSplit[1]);
            node.addWeight(nodeWeight);
        }
        //console.log(node.name + ' ' + node.weight);
        nodeArray[nodeName] = node;
    }
    //list is now built so we need to assign the parents
    for (node in nodeArray){
        var currentNode = nodeArray[node];
        if ((children = currentNode.childString) != null){
            childSplit = children.split(',');
            for (i = 0; i < childSplit.length; i++){
                nodeArray[childSplit[i].trim()].setParent(currentNode);
                currentNode.addChild(nodeArray[childSplit[i].trim()]);
                currentNode.addWeight(parseInt(nodeArray[childSplit[i].trim()].weight));
            }
        } 
    }
    //find root weighted node
    rootNode = null;
    for (node in nodeArray){
        if (nodeArray[node].parent == null){
            rootNode = nodeArray[node];
            break;
        }
    }
    var currentNode = rootNode;
    while(true){
        
    }

    $('.output').append(rootNode.name);
}