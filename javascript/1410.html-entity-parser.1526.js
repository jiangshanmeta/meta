/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const result = [];
//     Quotation Mark: the entity is &quot; and symbol character is ".
// Single Quote Mark: the entity is &apos; and symbol character is '.
// Slash: the entity is &frasl; and symbol character is /.
    let index = 0;
    while(index<text.length){
        if(text[index] === '&'){
            if(index+3<text.length){
                const str1 = text.substring(index,index+4);
                if(str1 === '&gt;'){
                    result.push('>');
                    index += 4;
                    continue;
                }else if(str1 === '&lt;'){
                    result.push('<');
                    index += 4;
                    continue;
                }
            }
            if(index+4<text.length){
                const str2 = text.substring(index,index+5);
                if(str2 === '&amp;'){
                    result.push('&');
                    index += 5;
                    continue;
                }
            }
            if(index+5<text.length){
                const str3 = text.substring(index,index+6);
                if(str3 === '&quot;'){
                    result.push('"');
                    index += 6;
                    continue;
                }else if(str3 === '&apos;'){
                    result.push("'");
                    index += 6;
                    continue;
                }
            }
            if(index+6 <text.length){
                const str4 = text.substring(index,index+7);
                if(str4 === '&frasl;'){
                    result.push('/');
                    index += 7;
                    continue;
                }
            }
            
        }
        result.push(text[index++]);
    }
    return result.join('');
};