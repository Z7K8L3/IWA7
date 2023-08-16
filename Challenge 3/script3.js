const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

// Total owed amount
const owed = Math.abs(parseInt(leoBalance)) +  Math.abs(parseFloat(sarahBalance));

// Names and owed amounts
const leo = `${leoName} ${leoSurname} (Owed: R ${Math.abs(parseInt(leoBalance)).toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`;

// Total owed section
const total = `${divider}\n Total amount owed: ${owed.toLocaleString('en-ZA', {style: 'currency', currency: 'ZAR'})}\n${divider}`;

// Final output
const result = `\n${leo}\n${sarah}\n${total}`;

console.log(result);

// Math.abs