import { Err } from './err';

const requiredRule = (message) => (val) => {
    if (!(val && val.length)) {
        throw Err.empty(message);
    }
};

const numericRule = (message) => (val) => {
    if (isNaN(val)) {
        throw Err.NaN(message);
    }
};

export default class Validator {
    constructor(rules = []) {
        this.rules = rules;
    }

    required(message) {
        return new Validator([...this.rules, requiredRule(message)]);
    }

    numeric(message) {
        return new Validator([...this.rules, numericRule(message)]);
    }

    validate(val) {
        for (const rule of this.rules) {
            rule(val);
        }
    }
}
