# de-script
Tool for escaping script tags using backslashes (no regex). 

Note: This tool only escapes script tags. If you would like to replace less than or greater than signs with HTML entities, please see https://github.com/Rairye/convert-with-ents

## Standard JS Version 

### Installation

Download the raw file at https://github.com/Rairye/de-script/blob/main/de-script.js

Or, download one of the releases on the right.

### Code Sample

```html
<script src = "de-script.js"> </script>
```
```javascript
var source = "<script>Hey, how are you doing?<\/script>";
var result = escapeScriptTags(source);
console.log(result);
```
## Module Version 

### Installation

### Code Sample

```javascript
import escapeScriptTags from "de-script";

var source = "<script>Hey, how are you doing?<\/script>";
var result = escapeScriptTags(source);
console.log(result);
```
