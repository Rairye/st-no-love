# descript
Tool for escaping script tags using backslashes (no regex). 

Note: This tool only escapes script tags. If you would like to replace less than or greater than signs with HTML entities, please see https://github.com/Rairye/convert-with-ents

## Code Sample

```javascript
import escapeScriptTags from "de-script";

var source = "<script>Hey, how are you doing?<\/script>";
var result = escapeScriptTags(source);
console.log(result);

```