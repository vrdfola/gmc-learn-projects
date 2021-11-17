function circularPermutation(x,y,z) {
    let temp = x;

    x = y;
    y = z;
    z = temp;

    return [x,y,z];
}

console.log(circularPermutation(2,3,4));