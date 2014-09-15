var create = require('./factory_module').create;

var text = create({type: "text", value: "hello factory"});
var check = create({type: "checkbox", checked: true});
