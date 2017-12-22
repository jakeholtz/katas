var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

var expect = require('should');
var assert = require('assert');
var should = require('should');
// var expect = chai.expect;
// var assert = chai.assert;
// var should = chai.should;

Tree = require('./main').Tree;

// KEEP EVERYTHING ABOVE HERE *******************

describe('Tree', function () {
  it('should exist', function() {
    should.exist(Tree);
  });
  it('should be a function', function() {
    Tree.should.be.a.Function;
  });
  it('should be able to add children', function() {
    Tree.should.be.a.Function;
  });

  it('should be able to remove children', function() {
    Tree.should.be.a.Function;
  });
  it('should have isDescendant method ', function() {
    Tree.should.be.a.Function;
  });
  describe('Tree Methods', function() {

    var input = new Tree(1);
    var treeExists = false;
    if (Tree && input.value) {
      treeExists = true;

      // depth: 1
      input.addChild(2);
      input.addChild(3);

      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);

      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);
    }

    it('isDescendant should be a function', function() {
      Tree.prototype.isDescendant.should.be.a.Function;
    });

    it('isDescendant should identify if item is a child', function() {
      treeExists.should.equal(true);
      var childOne = input.children[0].children[0];
      var childTwo = input.children[1].children[0];
      var result = input.isDescendant(childOne);
      result.should.equal(true);
      result = input.isDescendant(childTwo);
      result.should.equal(true);
    });

    it('isDescendant should identify if item is NOT a child', function() {
      treeExists.should.equal(true);
      var childOne = new Tree(100)
      var childTwo = new Tree(5)
      var result = input.isDescendant(childOne);
      result.should.equal(false);
      result = input.isDescendant(childTwo);
      result.should.equal(false);
    });

    it('addChild should be a function', function() {
      Tree.prototype.addChild.should.be.a.Function;
    });

    it('addChild should add multiple children', function() {
      treeExists.should.equal(true);
      var result = input.children;
      should.exist(result);
      result.should.have.length(2);

      result = input.children[0].children;
      should.exist(result);
      result.should.have.length(2);
    });

    it('addChild should add children with correct values', function() {
      treeExists.should.equal(true);
      var result = input.children;
      should.exist(result);
      result[0].value.should.equal(2);
      result[1].value.should.equal(3);

      result = input.children[0].children;
      should.exist(result);
      result[0].value.should.equal(4);
      result[1].value.should.equal(5);
    });

    it('removeChild should be a function', function() {
      Tree.prototype.removeChild.should.be.a.Function;
    });

    it('removeChild should delete children properly', function() {
      treeExists.should.equal(true);
      var childOne = input.children[0];
      var childTwo = input.children[1];
      input.removeChild(childOne);
      input.children.should.have.length(1);
      input.removeChild(childTwo);
      input.children.should.have.length(0);
    });
  });
});
