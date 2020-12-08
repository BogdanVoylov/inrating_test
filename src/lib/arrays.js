export const clone = (array) => {
    return array.map(a => Object.assign({}, a));
}
