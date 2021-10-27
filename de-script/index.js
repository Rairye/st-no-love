/*
Copyright 2021 Rairye
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var abcSet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

function stripNonAlpha(string) {
	
	var i = 0;
	
	while (i < string.length) {
		if (abcSet.has(string[i])) {
			break;
		}	
		else {
			i++;
		
		}
		
	}
	
	return string.substring(i);
	
}

export default function escapeScriptTags(inputText) {
	if (typeof inputText != "string") {
		return inputText;
	}
	
	var result = "";
	var lastOpen = null;
	var lastReplacement = null;
	var hasOpen = false;
	var inputLength = inputText.length;
	
	for (var i = 0; i < inputLength; i++) {
		var currentChar = inputText.charAt(i);
		if (currentChar == "<" && hasOpen == false) {
		   if (lastReplacement == null || (lastReplacement != null && i - lastReplacement > 1)) {
			result += (inputText.substring((lastReplacement == null ? 0 : lastReplacement + 1), i));
		   }

		   lastOpen = i;
		   hasOpen = true;
		}
		
		else if (currentChar == "<" && hasOpen == true) {
			result+=(inputText.substring(lastOpen, i));
			lastOpen = i;
		}
		
		else if (currentChar == ">" && hasOpen == true) {
			var searchString = inputText.substring(lastOpen+1, i).toLowerCase();
			if (!stripNonAlpha(searchString).startsWith("script")) {
				result += inputText.substring(lastOpen, i+1);
			}
			
			else {
				result += "<\\" + inputText.substring(lastOpen + 1, i+1);
			}
			
			hasOpen = false;
			lastReplacement = i;
		}
		
		else {
			continue;		
		}
	}
		
	if (lastOpen == null){
	   return inputText;
	}
		
	if (hasOpen == true) {
		return (result + inputText.substring(lastOpen));
	}
			
	return (inputLength == lastReplacement ? result : result+inputText.substring(lastReplacement+1));

}
