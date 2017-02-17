import Ember from 'ember';
import layout from '../templates/misvg-icon';

const { Component, computed, inject: { service } } = Ember;

export default Component.extend({
  layout:             layout,

  classNames:         ['misvg-icon'],
  attributeBindings:  ['componentStyle:style'],

  name:               undefined,
  width:              0,
  height:             0,

  svgSprites:         service('misvg-sprites'),

  svgCode: computed('name', function () {
    let spriteName = this.get('name');

    return this.get('svgSprites').getSvgCode(spriteName);
  }),

  componentStyle: computed('width', 'height', function() {
    let style = `width: ${this.get('width')}px; height: ${this.get('height')}px;`;

    return new Ember.String.htmlSafe(style);
  })
});
