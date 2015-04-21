# Sketch Dockpreview

A Sketch plugin that lets you preview your current artboard in the Dock.

## Installation

It's really easy. Just [download Dockpreview](https://github.com/fnky/sketch-dockpreview/releases) or clone the repository and put the Dockpreview `sketchplugin` file in your plugin folder. You can rename the folder if you'd like.

## Upgrade Notice

Sketch 3.3 changed plugin system from a folder/file system to a bundle-based approach. If you still use an older version of Sketch, you can still get older Dockpreview from [Releases](https://github.com/fnky/sketch-dockpreview/releases).

Older releases aren't maintained and Dockpreview keeps pushing the way forward.

##### Sketch 3

In Sketch 3 you can reveal your plugins folder in `Plugins > Reveal Plugins Folder...`

##### Sketch from App Store

Place the plugin in `~/Library/Containers/com.bohemiancoding.sketch/Data/Library/Application Support/Sketch/Plugins`


##### Sketch from Downloads

Place the plugin in `~/Library/Application Support/Sketch/Plugins`

## Usage

- `⇧⌘D` (*Shift + Command + D*) - Preview current artboard in Dock.

To restore the icon back to the default Sketch icon, go to `Plugins > Restore Sketch icon`. If you quit Sketch, the icon will automatically restore by itself.

If you'd like to change the shortcuts, you can change the `manifest.json` file in `Dockpreview.sketchplugin/Contents/Sketch` and change the `shortcut` to your liking.

> *Note:* When the plugin updates, this will overwrite the `manifest.json` because of versioning.

## Contributing

Found a bug? Perhaps have an idea for Dockpreview, you'd like to see? [Submit an issue or pull request
](wiki/Contributing) - all your help is needed.

## License

The MIT License (MIT)
