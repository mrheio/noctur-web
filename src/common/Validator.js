export const isNumeric = (str) => !isNaN(str);

export const notEmpty = (str) => str.length;

export default class Validator {
    static validate(data, validator) {
        const props = Object.keys(validator);
        for (const prop of props) {
            for (const rule of validator[prop]) {
                if (!rule.checker(data[prop])) {
                    throw rule.error;
                }
            }
        }
    }
}
