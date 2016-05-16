# Truncate
Truncate Text and append ellipsis (JS)

Truncate your string and append ellipsis to end of string.

How to use?<br>
var text = 'Hello how are you?';<br>
console.log(text.truncate(5)); // output 'Hello..'<br><br>

If the truncated index is a 'space'; ' ', ellipsis will be appended to the previous index.<br>
console.log(text.truncate(6)); //output 'Hello..' instead of 'Hello ..'<br><br>

If ellipsis is appended to a partial word that only has 1 or 2 character, it will be appended to previous index so it don't looks ugly<br>
console.log(text.truncate(7); //output 'Hello..' instead of 'Hello h..'

