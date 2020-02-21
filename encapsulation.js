var x = "unchanged";
function encap(placeholder) {
    var x = placeholder;
    return x; //Should return whatever placeholder is
}
console.log(x); //Should still print out "unchanged"

module.exports = encap;