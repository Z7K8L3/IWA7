const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '4582.2';

const divider = '----------------------------------';

// Only change below this line

// Total owed amount
const owed = parseFloat(leoBalance) +  parseFloat(sarahBalance);

// Names and owed amounts
const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(leoBalance).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance).toFixed(2)})`;

// Total owed section
const total = `${divider}\n Total amount owed: R ${owed.toFixed(2)}\n${divider}`;

// Final output
const result = `\n${leo}\n${sarah}\n${total}`;

console.log(result);