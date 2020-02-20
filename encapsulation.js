function encap() {
    //This variable "hereOnly" can only be accessed inside the function
    var hereOnly = 0;
}

//"hereOnly" cannot be accessed here. There will be an error thrown
console.log(hereOnly);
module.exports = encap;
