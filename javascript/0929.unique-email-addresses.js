/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set();
    for(let i=0;i<emails.length;i++){
        const atIndex = emails[i].indexOf('@');
        const local = emails[i].slice(0,atIndex);
        const email = local.replace(/\./g,"").replace(/\+\w+/g,"") + emails[i].slice(atIndex);

        if(!set.has(email)){
            set.add(email);   
        }
    }
    
    return set.size;
};