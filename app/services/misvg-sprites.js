import { htmlSafe } from '@ember/template';
import Service from '@ember/service';
import { isPresent } from '@ember/utils';

export default Service.extend({
  sprites: window.MISVG_STORE,

  getSprite(name) {
    let sprite = this.get('sprites')[name];

    if (isPresent) {
      return sprite;
    }
  },

  getSvgCode(spriteName) {
    return new htmlSafe(this.getSprite(spriteName));
  }
});
