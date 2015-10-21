require('babel/register'); // this enables es6
var Link = require('react-router').Link;
var linkify = require('../../src/js/utils/linkify');
var expect = require('chai').expect;


describe('Linkify', function() {
  describe('handle identification', function() {
    it('should correctly identify a single twitter handle.', function() {
      expect(linkify.pattern.test('@garyborton')).to.equal(true);
      expect(linkify.pattern.test('@asdf_asdf')).to.be.true;
    });

    it('should find twitter handles among other text.', function() {
      expect(linkify.pattern.test('hello @asdf_asdf:')).to.be.true;
      expect(linkify.pattern.test('@asdf_asdf:')).to.be.true;
    });

    it('should not mistakenly identify twitter handles.', function() {
      expect(linkify.pattern.test('@   asdf_asdf:')).to.be.false;
    });
  });

  describe('creating linked twitter handles', function() {
    var output = linkify.createTwitterHandle('@garyborton');

    it('should create a Link component if given a valid twitter handle.', function() {
      expect(output.type).to.equal(Link);
    });

    it('should have the correct to property for linking.', function() {
      expect(output.props.to).to.equal('/user/garyborton');
    });

    it('should have the correct text in the link.', function() {
      expect(output.props.children.trim()).to.equal('@garyborton');
    });
  });
});
