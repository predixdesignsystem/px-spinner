describe('Base Automation Tests for px-spinner', function() {
  it('Polymer should exist', function() {
    expect(Polymer).to.exist;
  });

  it('Spinner fixture should exist', function() {
    var spinnerFixture = fixture('PxSpinner');
    expect(spinnerFixture).to.exist;
  });

  it('Spinner should have size property', function() {
    var spinnerFixture = fixture('PxSpinner');
    expect(spinnerFixture.size).to.exist;
  });

  it('Spinner should have size property with default of 80', function() {
    var spinnerFixture = fixture('PxSpinner');
    expect(spinnerFixture.size).to.equal(80);
  });
});

describe('Px-spinner should load custom modernizr SMIL feature detections', function() {
  it('Px.Modernizr should exist', function() {
    expect(window.Px.Modernizr).to.exist;
  });

  it('Px.Modernizr SMIL detect should exist', function() {
    expect(window.Px.Modernizr.smil).to.exist;
  });

});
