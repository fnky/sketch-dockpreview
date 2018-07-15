/* global NSBundle */
const isBetaApp = app => app.applicationName() === 'Sketch Beta';

/**
 * Get the path of the default icon from Sketch.
 * @return {string}
 */
export default function getDockIconPath(app) {
  const bundle = NSBundle.mainBundle();

  const icon = bundle.pathForResource_ofType(
    isBetaApp(app) ? 'beta' : 'app',
    'icns'
  );

  return icon;
}
