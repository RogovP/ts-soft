function isAnagram(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    return a === b;
}
console.log(isAnagram("foefet", "toffee"));