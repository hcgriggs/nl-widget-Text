
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Narrative
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var NARRATIVE = (function(NARRATIVE) {


  /**
   * Find an element inside the narrative container.
   *
   * @param {String} selector: A CSS selector.
   */
  NARRATIVE.find = function(selector) {
    return Neatline.Narrative.__view.$(selector);
  };


  return NARRATIVE;


})(NARRATIVE || {});