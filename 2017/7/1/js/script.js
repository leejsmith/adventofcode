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
    this.setParent = function(parentNode){
        this.parent = parentNode;
    }
    this.addChildString = function(childString){
        this.childString = childString;
    }
    this.addChild = function(node){
        children[node.name] = node;
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
        var node = new Node(nodeName, nodeWeight);
        if (nodeSplit[1] != undefined){
            node.addChildString(nodeSplit[1]);
        }
       // console.log(node.name + ' ' + node.weight);
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
            }
        }
    }
    //find the node where there is no parent to give us the root node.
    rootNode = null;
    for (node in nodeArray){
        if (nodeArray[node].parent == null){
            rootNode = nodeArray[node];
            break;
        }
    }
    $('.output').append(rootNode.name);
}