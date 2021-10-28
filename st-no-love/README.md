# st-no-love
Tool for escaping script tags using backslashes (no regex). 

Note: This tool only escapes script tags. If you would like to replace less than or greater than signs with HTML entities, please see https://github.com/Rairye/convert-with-ents

## Installation

Install using npm:

npm i st-no-love

## Code Sample

```javascript
import escapeScriptTags from "st-no-love";

var source = "<script>Hey, how are you doing?<\/script>";
var result = escapeScriptTags(source);
console.log(result);

```
