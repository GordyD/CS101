/**
 * Use Babel to transpile ES6 to ES5
 */
require('babel/register');

var Graph = require('./lib/structures/Graph');

var TreeNode = require('./lib/structures/TreeNode');


try {
  var g = new Graph();
  g.addVertex('A');
} catch (e) {
  console.log(e);
}

var nodes = [];
var vals = ['foo', 'bar', 'baz', 'dar', 'cal', 'coo', 'zzz'];
for(var i = 0; i < vals.length; i++) {
  nodes.push(new TreeNode(i, vals[i]));
}

nodes[0].addChild(nodes[1]);
nodes[0].addChild(nodes[2]);
nodes[2].addChild(nodes[3]);
nodes[2].addChild(nodes[4]);
nodes[1].addChild(nodes[5]);
nodes[5].addChild(nodes[6]);

nodes[0].print();