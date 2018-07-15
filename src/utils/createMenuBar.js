export default function createMenuBar() {
  const statusItem = NSStatusBar.systemStatusBar().statusItemWithLength(
    NSVariableStatusItemLength
  );

  const menuIcon = NSImage.imageNamed('Menu Icon');
  const highlightIcon = NSImage.imageNamed('Menu Icon');

  highlightIcon.setTemplate(true);

  const application = NSApplication.sharedApplication();

  application.delegate.menu = NSMenu.alloc().init();
  application.delegate.statusItem = statusItem;
  // application.delegate.menuAction
}
