// :::: CALLSTACK :::::

// To visualize the call stack use Loupe OR CHROME
    // Chrome SOURCE and expand the left -- built-in debugger
        // to check where something is going wrong add a breakpoint into the code (within chrome) -- See callstack video (273)

const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")