function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {

    if (Math.random() < 0.5) {

        return a * b;

    } else {

        throw new MultiplicatorUnitFailure();

    }

}

function reliableMultiply(a, b) {
    try {
        var result = primitiveMultiply(a, b);
        return result;
    } finally {
  return a * b;
    }

}

console.log(reliableMultiply(8, 8));