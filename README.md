# Sketch Dockpreview

A Sketch plugin that lets you preview your current artboard in the Dock.

## Installation

It's really easy. Just [download Dockpreview](https://github.com/fnky/sketch-dockpreview/releases) or clone the repository and put the Dockpreview folder in your plugin folder. You can rename the folder if you'd like.

##### Sketch 3

In Sketch 3 you can reveal your plugins folder in `Plugins > Reveal Plugins Folder...`

##### Sketch from App Store

Place the plugin in `~/Library/Containers/com.bohemiancoding.sketch/Data/Library/Application Support/Sketch/Plugins`


##### Sketch from Downloads

Place the plugin in `~/Library/Application Support/Sketch/Plugins`

## Usage

Press `⇧⌘D` (*Shift + Command + D*) to preview your work in the dock.Artboards are required.

If you'd like a different shortcut, you can change the `.sketchplugin` source and define it in the brackets of the first comment:

    // Preview in Dock (shift command d)

To restore the icon back to the default Sketch icon, go to `Plugins > Restore Sketch icon`. If you quit Sketch, the icon will automatically restore by itself.
