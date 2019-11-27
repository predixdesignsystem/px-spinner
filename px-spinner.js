/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
### Usage

    <px-spinner size="50" finished></px-spinner>

### Styling
The following custom properties are available for styling:

Custom property | Description
:----------------|:-------------
`--px-spinner-fill-color` | Fill color for the spinner
`--px-spinner-background-color` | Background color for the spinner

@element px-spinner
@blurb Element providing an indication of data or a view loading.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './px-modernizr.js';
import './css/px-spinner-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-spinner-styles"></style>

    <template is="dom-if" if="{{!finished}}">
      <template is="dom-if" if="[[_shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation)]]">
        <svg width\$="{{size}}" height\$="{{size}}" viewBox="0 0 100 100">
          <circle class="circle1" cx="50" cy="50" r="45"></circle>
          <circle class="circle2" cx="50" cy="50" r="45" transform="rotate(-45,50,50)"></circle>
        </svg>
      </template>
      <template is="dom-if" if="[[!_shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation)]]">
        <div style\$="width: {{size}}px; height: {{size}}px;" class="spinner-container"></div>
      </template>
    </template>
`,

  is: 'px-spinner',

  /**
   * Properties block, expose attribute values to the DOM via 'reflect'
   *
   * @property properties
   * @type Object
   */
  properties: {
    /**
     * This attribute hides the spinner
     */
    finished: {
      type: Boolean,
      value: false
    },
    /**
      * The size, in pixels, of the spinner.
      * Refers to the inner dimension of the circle - no units necessary.
      */
    size: {
      type: Number,
      value: 80,
      notify: true
    },
    /**
     * If set, disables SVG animations on the spinner.
     * Set this if you need the spinner to continue animating while the event loop is blocked.
     */
     disableSvgAnimation: {
      type: Boolean,
      value: false,
    },
    _animatedSVGSupport: {
      type: Boolean,
      readonly: true,
      value: function(){
        return Px.Modernizr.smil;
      }
    },
  },

  /**
   * Shows the spinner
   *
   * @method show
   */
  show: function() {
    this.set('finished', false);
  },

  /**
   * Hides the spinner
   *
   * @method hide
   */
  hide: function () {
    this.set('finished', true);
  },

  _shouldRenderAsSVG(_animatedSVGSupport, disableSvgAnimation) {
    return _animatedSVGSupport && !disableSvgAnimation;
  }
});
