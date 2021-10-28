
# st-no-love

Tool for escaping script tags using backslashes (no regex). 

Note: This tool only escapes script tags. If you would like to replace less than or greater than signs with HTML entities, please see https://github.com/Rairye/convert-with-ents

## Standard JS Version 

### Installation

Download the raw file at https://github.com/Rairye/de-script/blob/main/st-no-love.js

Or, download one of the releases on the right.

### Code Sample

```html
<script src = "st-no-love.js"> </script>
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
import escapeScriptTags from "st-no-love";

var source = "<script>Hey, how are you doing?<\/script>";
var result = escapeScriptTags(source);
console.log(result);
```
