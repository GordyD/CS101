/**
 * Use Babel to transpile ES6 to ES5
 */
require('babel/register');

var chai = require('chai');
var expect = chai.expect;


var Graph = require('../../lib/structures/Graph');

describe('Graph', function() {
  it('should be an Object', function() {
    var graph = new Graph();
    expect(graph).to.be.an('Object');
  });

  describe('addVertex', function() {
    var graph = new Graph();
    it('should be a function', function() {
      expect(graph.addVertex).to.be.a('Function');
    });

    it('should add vertices to graph', function() {
      graph.addVertex('A');
      expect(graph.vertexCount).to.equal(1);
      graph.addVertex('B');
      expect(graph.vertexCount).to.equal(2);
      graph.addVertex('C');
      expect(graph.vertexCount).to.equal(3);
      graph.addVertex('D');
      expect(graph.vertexCount).to.equal(4);
    });

    it('should not add a duplicate vertex', function() {
      graph.addVertex('D');
      expect(graph.vertexCount).to.equal(4);
    });
  });

  describe('getVertex', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    it('should be a function', function() {
      expect(graph.getVertex).to.be.a('Function');
    });

    it('should get an existing vertex when given an existing key', function() {
      var vertex = graph.getVertex('A');
      expect(vertex).to.be.an('Object');
      expect(vertex.id).to.equal('A');
    });

    it('should return nothing when vertex does not exist', function() {
      var vertex = graph.getVertex('E');
      expect(vertex).to.be.undefined;
    });
  });

  describe('addEdge', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    it('should be a function', function() {
      expect(graph.addEdge).to.be.a('Function');
    });

    it('should add edges to graph', function() {
      graph.addEdge('A', 'B');
      expect(graph.edgeCount).to.equal(1);
      graph.addEdge('B', 'C');
      expect(graph.edgeCount).to.equal(2);
      graph.addEdge('C', 'D');
      expect(graph.edgeCount).to.equal(3);
      graph.addEdge('D', 'A');
      expect(graph.edgeCount).to.equal(4);
    });

    it('should not add a duplicate edge', function() {
      graph.addVertex('D', 'A');
      expect(graph.edgeCount).to.equal(4);
    });
  });

  describe('deleteVertex', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'A');

    it('should be a function', function() {
      expect(graph.addEdge).to.be.a('Function');
    });

    it('should delete a vertex and lower count by two', function() {
      graph.deleteVertex('A');
      expect(graph.vertexCount).to.equal(3);
      expect(graph.edgeCount).to.equal(2);
    });

    it('should not change anything when a non-existent edge is deleted', function() {
      graph.deleteVertex('E');
      expect(graph.vertexCount).to.equal(3);
      expect(graph.edgeCount).to.equal(2);
    });
  });

  describe('getNeighboursOf', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'A');

    it('should be a function', function() {
      expect(graph.getNeighboursOf).to.be.a('Function');
    });

    it('should return a set containing neighbours of A', function() {
      var neighbours = graph.getNeighboursOf('A');
      expect(neighbours['D']).to.be.an('Object');
      expect(neighbours['B']).to.be.an('Object');

      expect(Object.keys(neighbours).length).to.equal(2);
    });
  });

  describe('doesEdgeExist', function() {
    var graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'A');

    it('should be a function', function() {
      expect(graph.doesEdgeExist).to.be.a('Function');
    });

    it('should return true for an edge that exists', function() {
      expect(graph.doesEdgeExist('A', 'B')).to.equal(true);
      expect(graph.doesEdgeExist('B', 'C')).to.equal(true);
      expect(graph.doesEdgeExist('C', 'D')).to.equal(true);
      expect(graph.doesEdgeExist('D', 'A')).to.equal(true);
    });

    it('should return true for an edge that does not exist', function() {
      expect(graph.doesEdgeExist('A', 'C')).to.equal(false);
      expect(graph.doesEdgeExist('B', 'A')).to.equal(false);
    });
  });
});