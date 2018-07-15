import sketch from 'sketch';

import getDockIconPath from './utils/getDockIconPath';

const app = NSApplication.sharedApplication();

function restoreStatusbar() {}

function restoreTouchbar() {}

/**
 * Restore the dock icon to the default Sketch app icon.
 */
function restoreDock() {
  const icon = getDockIconPath();
  const image = NSImage.alloc().initByReferencingFile(icon);
  app.setApplicationIconImage(image);
}

/**
 * Restore dock, status bar and touch bar icons.
 */
export function restore(context) {
  // restore icons
  console.log('restore');
  // restoreDock();
  // cleanup temporary files
}
