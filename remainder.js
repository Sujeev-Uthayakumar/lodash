import createMathOperation from './.internal/createMathOperation.js'

/**
 * Divide two numbers and find remainder.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * remainder(13, 5)
 * // => 3
 */
const remainder = createMathOperation((dividend, divisor) => dividend % divisor, 1)

export default remainder
