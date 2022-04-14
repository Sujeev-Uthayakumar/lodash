import createMathOperation from './.internal/createMathOperation.js'

/**
 * Find power of number.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} base The base number the exponent will be applied to.
 * @param {number} exponent The exponent, the amount of times the number will be mutiplied .
 * @returns {number} Returns the product.
 * @example
 *
 * powerTo(2, 3)
 * // => 8
 */
const powerTo = createMathOperation((base, exponent) => (base) ** exponent, 1)

export default powerTo