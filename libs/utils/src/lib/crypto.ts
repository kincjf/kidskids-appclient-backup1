export function encrypt(str: string) {
    let key = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) + 6;
        key += (String.fromCharCode(charCode));
    }

    return key;
}

export function decrypt(str: string) {
    let key = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i) - 6;
        key += (String.fromCharCode(charCode));
    }

    return key;
}