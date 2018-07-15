import sketch from 'sketch';

/**
 * Get the first selected artboard.
 * @param {*} context
 * @returns {sketch.Types.Artboard}
 */
export default function getDefaultArtboard(context) {
  const { selection, document } = context;

  let artboard = selection.count()
    ? selection[0]
    : document
        .currentPage()
        .artboards()
        .firstObject();

  while (artboard.parentGroup() !== document.currentPage()) {
    artboard = artboard.parentGroup();
  }

  return artboard;
}
