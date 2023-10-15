//Creating and exporting my own module
exports.MyFunction = function(){ // Remember it's "exports" not export.
    return Date()
}

// Node methods are different from javascript.
// Date() is a node method, while getDate() is a javascript method.