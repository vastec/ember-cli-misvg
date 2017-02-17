import Ember from 'ember';

const { Service, isPresent } = Ember;

export default Service.extend({
  sprites: window.MISVG_STORE,

  getSprite(name) {
    let sprite = this.get('sprites')[name];

    if (isPresent) {
      return sprite;
    }
  },

  getSvgCode(spriteName) {
    return new Ember.String.htmlSafe(this.getSprite(spriteName));
  }
});
