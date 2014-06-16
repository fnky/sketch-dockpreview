#import 'sandbox.js'

var app = NSApplication.sharedApplication();

var temp = {};

var dockpreview = {
    createFolder: function (path) {
        var file_manager = [NSFileManager defaultManager];
        this.runMethodSandbox(path, function () {
            [file_manager createDirectoryAtPath:path
                withIntermediateDirectories:true
                attributes:nil
                error:nil];
        });
    },

    createTempFolder: function() {
        var guid = NSProcessInfo.processInfo().globallyUniqueString(),
            tmpPath = NSTemporaryDirectory().stringByAppendingPathComponent(guid);
        //var tmpURL = [NSURL fileURLWithPath:tmpPath isDirectory:true];
        this.createFolder(tmpPath);
        temp.path = tmpPath;
    },

    setAppIconImage: function() {
        var artboard = this.getCurrentArtboard(),
        imgFile = temp.path + '/dockpreview-preview.tmp.png';
        this.runMethodSandbox(imgFile, function () {
            [doc saveArtboardOrSlice:artboard toFile:imgFile];
        });
        var img = NSImage.alloc().initByReferencingFile(imgFile);
        [app setApplicationIconImage:img];
    },

    restoreAppIconImage: function () {
        var bundle = NSBundle.mainBundle(),
            icon;
        if (app.applicationName() == 'Sketch Beta') {
            icon = [bundle pathForResource:@"beta" ofType:@"icns"];
        } else {
            icon = [bundle pathForResource:@"app" ofType:@"icns"];
        }
        img = NSImage.alloc().initByReferencingFile(icon);
        [app setApplicationIconImage:img];
    },

    getCurrentArtboard: function () {
        var page = [doc currentPage]
        return [page currentArtboard];
    },

    runMethodSandbox: function(path, method) {
        if(in_sandbox()) {
            sandboxAccess.accessFilePath_withBlock_persistPermission(path, method, true);
        } else {
            method();
        }
    }
};

dockpreview.createTempFolder();
