const game1 = require('./game1');

test('ตัวเลขที่หาร 3 ลงตัว จะตอบ Fizz', () => {
    expect(game1(3)).toBe('Fizz');
})

test('ตัวเลขที่หาร 5 ลงตัว จะตอบ Buzz', () => {
    expect(game1(5)).toBe('Buzz');
})

test('Fizz คือตัวเลขที่มี 3 อยู่ในนั้น', () => {
    expect(game1(32)).toBe('Fizz');
})

test('Buzz คือตัวเลขที่มี 5 อยู่ในนั้น', () => {
    expect(game1(52)).toBe('Buzz');
})

test('ตัวเลขที่หาร 3 ลงตัวและมี 3 อยู่ในนั้น คือ Fizz', () => {
    expect(game1(33)).toBe('Fizz');
})

test('ตัวเลขที่หาร 5 ลงตัวและมี 5 อยู่ในนั้น คือ Buzz', () => {
    expect(game1(55)).toBe('Buzz');
})

test('ตัวเลขที่หาร 3 และมี 5 อยู่ในนั้นคือ FizzBuzz', () => {
    expect(game1(15)).toBe('FizzBuzz');
})

test('ตัวเลขที่หาร 3 และหาร 5 ลงตัวคือ FizzBuzz', () => {
    expect(game1(15)).toBe('FizzBuzz');
})

test('ตัวเลขที่หาร 3 แลt 5 ลงตัวและมี 5 อยู่ในนั้นคือ FizzBuzz', () => {
    expect(game1(15)).toBe('FizzBuzz');
})
