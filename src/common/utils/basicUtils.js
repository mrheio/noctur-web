export const replaceSpacesWithUnderscores = (string) => {
    return string.replaceAll(' ', '_');
};

export const replaceUnderscoresWithSpaces = (string) => {
    return string.replaceAll('_', ' ');
};

export const resetObj = (obj, defaults = {}) => {
    let newObj = obj;
    for (const [k, v] of Object.entries(obj)) {
        if (defaults[k]) {
            newObj = { ...newObj, [k]: defaults[k] };
        } else {
            if (typeof v === 'string') {
                newObj = { ...newObj, [k]: '' };
            }
            if (typeof v === 'number') {
                newObj = { ...newObj, [k]: 0 };
            }
        }
    }
    return newObj;
};

export const isEmpty = (val) => !val || !val.length;

// const getDefault = (val) => {
//     if (typeof val === 'string') {
//         return '';
//     }
//     if (typeof val === 'number') {
//         return 0;
//     }
// };

// export const resetObj = (obj, defaults = {}) => {
//     const o = Object.assign(
//         {},
//         Object.keys(obj).map((k) => {
//             return {
//                 ...obj,
//                 [k]: defaults[k] ? defaults[k] : getDefault(obj[k]),
//             };
//         })
//     );
//     return o;
// };
