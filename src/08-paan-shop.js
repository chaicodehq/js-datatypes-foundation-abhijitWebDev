/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
  // Your code here
  // checking if the basePaan is a valid object
  if(typeof basePaan !== 'object' || basePaan == null || Array.isArray(basePaan)) return {};

  // if customizations is not a valid object, return a copy of basePaan
if(typeof customizations !== 'object' || customizations == null || Array.isArray(customizations)) return {...basePaan};

// using Object.assign to create a new order object by merging basePaan and customizations
const order = Object.assign({}, basePaan, customizations);
return order;
}

export function freezeMenu(menu) {
  // Your code here
  // checking if the menu is a valid object
  if(typeof menu !== 'object' || menu === null || Array.isArray(menu)) return {};
  // using Object.freeze to make the menu immutable
  return Object.freeze(menu);
}

export function updatePrices(menu, increase) {
  // Your code here
  // checking if the menu is a valid object and increase is a number
  if(typeof menu !== 'object' || menu === null || Array.isArray(menu) || typeof increase !== 'number') return {};

  // using.Object.entries to get [key, value] pairs and update the prices
  const updatedEntries = Object.entries(menu).map(([key, value]) => [key, value + increase]);
  
  // using Object.fromEntries to convert back to an object
  return Object.fromEntries(updatedEntries);
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Your code here
  // checking if the inputs are valid objects
  if(typeof regularMenu !== 'object' || regularMenu === null || Array.isArray(regularMenu)) regularMenu = {};
  if(typeof specialsMenu !== 'object' || specialsMenu === null || Array.isArray(specialsMenu)) specialsMenu = {};

  // using spread operator to merge the menus
  return {...regularMenu, ...specialsMenu};
}
