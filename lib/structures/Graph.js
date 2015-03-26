import Vertex from './Vertex';

/**
 * Graph implemented with an underlying adjacency list 
 */
class Graph {

  /**
   * @constructor
   */
  constructor() {
    this.vertices = {};
    this.vertexCount = 0;
    this.edgeCount = 0;
  }

  /**
   * Add a Vertex to the graph with supplied key
   * 
   * @param {String|Number} key
   */
  addVertex(key) {
    if (this.vertices[key]) {
      return;
    }

    var v = new Vertex(key);
    this.vertices[key] = v;
    this.vertexCount++;
  }

  /**
   * Add an edge to the graph going from fromKey to toKey
   * 
   * @param {String|Number} fromKey
   * @param {String|Number} toKey
   */
  addEdge(fromKey, toKey) {
    var fromVertex = this.vertices[fromKey];
    var toVertex = this.vertices[toKey];
    if (this.doesEdgeExist(fromKey, toKey)) {
      return;
    }

    if (!fromVertex || !toVertex) {
      return;
    }

    fromVertex.outVertices[toKey] = toVertex;
    toVertex.inVertices[fromKey] = fromVertex;
    this.edgeCount++;
  }

  /**
   * Get vertex with supplied key
   * 
   * @param  {String|Number} key
   * 
   * @return {Vertex}
   */
  getVertex(key) {
    return this.vertices[key];
  }

  /**
   * Delete a vertex from a graph
   *
   * @param {String|Number}
   */
  deleteVertex(v) {
    if (!this.vertices[v]) {
      return;
    }

    for (var key in this.vertices) {
      if (key !== v) {
        this.edgeCount -= this.vertices[key].removeEdge(v);
      }
    }
    delete this.vertices[v];
    this.vertexCount--;
  }

  /**
   * Delete an edge from the graph
   * 
   * @param  {String|Number} fromKey
   * @param  {String|Key} toKey
   * 
   */
  deleteEdge(fromKey, toKey) {
    if (!this.doesEdgeExist(fromKey, toKey)) {
      return;
    }

    this.vertices[fromKey].removeEdge(toKey);
    this.vertices[toKey].removeEdge(fromKey);
    this.edgeCount--;
  }

  /**
   * Get all neighbours of vertex with key
   * 
   * @param  {String|Number} key
   * 
   * @return {Object}
   */
  getNeighboursOf(key) {
    if (!this.vertices[key]) {
      return;
    }

    return this.vertices[key].getEdges();
  }

  /**
   * Check whether edge exists
   * 
   * @param  {String|Number} fromKey
   * @param  {String|Number} toKey
   * 
   * @return {Boolean}
   */
  doesEdgeExist(fromKey, toKey) {
    if (!this.vertices[fromKey] || !this.vertices[toKey]) {
      return;
    } else {
      return (!!this.vertices[fromKey].outVertices[toKey]);
    }
  }
}

export default Graph;