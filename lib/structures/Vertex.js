class Vertex {
  /**
   * @constructor
   * 
   * @param  {String|Number} id
   */
  constructor(id) {
    this.id = id;
    this.inVertices = {};
    this.outVertices = {};
  }

  /**
   * Get a set of all edges in and out of vertex
   * 
   * @return {Object}
   */
  getEdges() {
    var output = this.inVertices;
    for(var key in this.outVertices) {
        output[key] = this.outVertices[key];
    }

    return output;
  }

  /**
   * Get all vertices connected by an edge into this vertex
   * 
   * @return {Object}
   */
  getInEdges() {
    return this.inVertices;
  }

  /**
   * Get all vertices connected by an edge out of this vertex
   *
   * @return {Object}
   */
  getOutEdges() {
    return this.outVertices;
  }

  /**
   * Remove an edge to another vertex with key
   * 
   * @param  {String|Number} key
   */
  removeEdge(key) {
    var removed  = 0;
    if (this.inVertices[key]) {
      delete this.inVertices[key];
      removed++;
    }

    if (this.outVertices[key]) {
      delete this.outVertices[key];
      removed++;
    }

    return removed;
  }
}

export default Vertex;