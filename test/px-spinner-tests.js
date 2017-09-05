// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

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

describe('Px-spinner should correctly detect browser capability and show correct spinner', function() {
  it('_animatedSVGSupport property should be true on Chrome', function() {
    if (isChrome){
      var spinnerFixture = fixture('PxSpinner');
      expect(spinnerFixture._animatedSVGSupport).to.be.true;
    }
  });

  it('_animatedSVGSupport property should be false on IE', function() {
    if (isIE){
      var spinnerFixture = fixture('PxSpinner');
      expect(spinnerFixture._animatedSVGSupport).to.be.false;
    }
  });

  it('_animatedSVGSupport property should be false on Edge', function() {
    if (isEdge){
      var spinnerFixture = fixture('PxSpinner');
      expect(spinnerFixture._animatedSVGSupport).to.be.false;
    }
  });
});

describe('Finished property should hide', function() {
   it('finished true should hide pxSpinner', function(done) {
    var spinnerFixture = fixture('PxSpinner');
    spinnerFixture.finished = true;
    flush(function() {
      console.log(spinnerFixture)
      expect(spinnerFixture.clientHeight).to.equal(0);
      done();
    });
  });
  it('finished false should show pxSpinner', function(done) {
    var spinnerFixture = fixture('PxSpinner');
    spinnerFixture.finished = false;
    flush(function() {
      expect(spinnerFixture.clientHeight).to.be.closeTo(70,90);
      done();
    });
  });
  it('hide method should hide pxSpinner', function(done) {
    var spinnerFixture = fixture('PxSpinner');
    spinnerFixture.hide();
    flush(function() {
      expect(spinnerFixture.clientHeight).to.equal(0);
      done();
    });
  });
  it('show method should show pxSpinner', function(done) {
    var spinnerFixture = fixture('PxSpinner');
    spinnerFixture.show();
    flush(function() {
      expect(spinnerFixture.clientHeight).to.be.closeTo(70,90);
      done();
    });
  });
});

describe('Test size API', function(){
  it('Setting size to 100 should resize px-spinner element', function(done){
    var spinnerFixture = fixture('PxSpinner');
    spinnerFixture.set('size', 100);
    if (isIE) {
      flush(function(){
        expect(getComputedStyle(Polymer.dom(spinnerFixture.root).querySelector('.spinner-container')).width).to.equal('90px');
        done();
      });
    } else {
      flush(function(){
        assert(Polymer.dom(spinnerFixture.root).querySelector('svg').attributes.width, '100');
        assert(Polymer.dom(spinnerFixture.root).querySelector('svg').attributes.height, '100');
        done();
      });
      done();
    }
  });
});
