/* globals NSApplication */

import getDefaultArtboard from './utils/getDefaultArtboard';
import { getImageFromLayer } from './utils/getLayerImage';

const app = NSApplication.sharedApplication();

/**
 * Set the application icon image to the selected artboard.
 * @param {*} context
 */
export default function previewInDock(context) {
  const artboard = getDefaultArtboard(context);
  const image = getImageFromLayer(artboard);

  app.setApplicationIconImage(image);
}
