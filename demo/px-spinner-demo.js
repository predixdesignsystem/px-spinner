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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-spinner.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-spinner" description="The Spinner indicates an ongoing activity with an indefinite end, such as loading data. The size
          is configurable. Adding the &quot;finished&quot; attribute causes the spinner to disappear when the activity is complete." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <px-spinner size="{{props.size.value}}" finished="{{props.finished.value}}" disable-svg-animation="{{props.disableSvgAnimation.value}}">
        </px-spinner>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-spinner">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-spinner"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-spinner-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          {
            configName: "Default",
            configReset: true
          },

          {
            configName: "Hidden",
            size: 75,
            finished: true
          }
        ]
      }
    }
  },

  demoProps: {
    disableSvgAnimation: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },
    finished: {
      type: Boolean,
      inputName: 'Hide',
      defaultValue: false,
      inputType: 'toggle'
    },
    size: {
      type: String,
      defaultValue: '100',
      inputType: 'text',
      inputPlaceholder: '100'
    }
  },

  ready: function () {

  }
});
