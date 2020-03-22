const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resultArr = [];
    let morseDecode = {
        '00' : '',
        '10' : '.',
        '11' : '-',
    }
    let i = 0;

    while (i < expr.length) {
        resultArr.push(expr.substr(i, 10));
        i += 10;
    }
    
    return resultArr.map((item) => {
        if (item === '**********') {
            return ' ';
        } else {
            let j = 0;
            let temp = [];
            while (j < item.length) {
                temp.push(morseDecode[item.substr(j, 2)]);
                j += 2;
            }
            return MORSE_TABLE[temp.join('')];
        }
    }).join('');

}

module.exports = {
    decode
}