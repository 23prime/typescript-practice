const fizzBuzz = (n: number): string => {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);
};

const result: string = [...Array(100).keys()].map((i) => fizzBuzz(i)).join(" ");
console.log(result);
