import sketch from 'sketch';

/**
 * Get an image data as NSData of a layer.
 * @param {Layer} layer
 * @param {number} scale The scale to export the layer image data.
 */
export function getImageDataFromLayer(layer, scale = 1) {
  const format = MSExportFormat.formatWithScale_name_fileFormat(
    scale,
    '',
    'png'
  );
  const request = MSExportRequest.exportRequestsFromExportableLayer_exportFormats_useIDForName(
    layer,
    [format],
    false
  ).firstObject();
  const colorSpace = NSColorSpace.sRGBColorSpace();
  const imageData = MSExporter.exporterForRequest_colorSpace(
    request,
    colorSpace
  ).data;

  return imageData();
}

/**
 * Get an NSImage representation of a layer.
 * @param {Layer} layer
 * @param {number} scale The scale to export the layer image.
 */
export function getImageFromLayer(layer, scale = 1) {
  const imageData = getImageDataFromLayer(layer, scale);
  const image = NSImage.alloc().initWithData(imageData);

  return image;
}
