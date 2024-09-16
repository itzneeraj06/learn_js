IMPORT js
import moduleName from './moduleName';
import { functionName, variableName } from './moduleName';

EXPORT js
1. export function functionName() {
  // ...
}
2. export default function defaultFunctionName() {
  // ...
}

IMPORT in Node.js
1. const module = require('./module.js');//CommonJS Syntax (Traditional)
2. import { functionName, variableName } from './module.js';
   import moduleName from './module.js';//ES6 Modules (Modern)

EXPORT in Node.js
1. module.exports = {
  functionName,
  variableName
};//traditional

module.exports.defaultFunctionName = function() {
  // ...
};

2. export function functionName() {
  // ...
}//modern ES6

export const variableName = 'value';

export default function defaultFunctionName() {
  // ...
}

IMPORT in REACT 
1. import React, { useState, useEffect } from 'react';
2. import ComponentName from './ComponentName';

EXPORT in REACT
1. export default function ComponentName() {
  // ...
}
2. const fun =()=>{
//....
}
export default fun

IMPORT in Express,Mongoose
1. const express = require('express');
   const router = require('./route.js');

EXPORT in Express
 1.const app = express();
 // ... app configuration
 module.exports = app;

EXPORT in Mongoose 
 1. const User = mongoose.model('User', UserSchema);
   module.exports = User;
 2. module.exports = mongoose.model("User",UserSchema);
