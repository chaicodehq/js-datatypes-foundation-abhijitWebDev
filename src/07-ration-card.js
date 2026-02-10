/**
 * 🏠 Ration Card Registry - Object Basics
 *
 * Gram Panchayat mein ration card ka digital registry banana hai.
 * Families ka data Object mein store hai. Object methods use karke
 * registry manage kar!
 *
 * Data format: registry = {
 *   "RC001": { head: "Ram Prasad", members: 4, type: "BPL" },
 *   "RC002": { head: "Sita Devi", members: 3, type: "APL" },
 *   ...
 * }
 *
 * Methods to explore: Object.keys(), Object.values(), Object.entries(),
 *   .hasOwnProperty(), delete operator
 *
 * Functions:
 *
 *   1. getFamilyNames(registry)
 *      - Object.keys() se saare ration card IDs nikalo
 *      - Agar registry object nahi hai ya null hai, return []
 *      - Example: getFamilyNames({"RC001":{...},"RC002":{...}}) => ["RC001", "RC002"]
 *
 *   2. getAllFamilies(registry)
 *      - Object.values() se saari family objects nikalo
 *      - Agar registry object nahi hai ya null hai, return []
 *      - Example: getAllFamilies({"RC001":{head:"Ram"}}) => [{head:"Ram"}]
 *
 *   3. getRationCardEntries(registry)
 *      - Object.entries() se [id, family] pairs nikalo
 *      - Agar registry object nahi hai ya null hai, return []
 *      - Example: getRationCardEntries({"RC001":{head:"Ram"}}) => [["RC001",{head:"Ram"}]]
 *
 *   4. hasRationCard(registry, cardId)
 *      - .hasOwnProperty() se check karo ki specific ration card hai ya nahi
 *      - Agar registry object nahi hai ya cardId string nahi hai, return false
 *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC001") => true
 *      - Example: hasRationCard({"RC001":{head:"Ram"}}, "RC999") => false
 *
 *   5. removeRationCard(registry, cardId)
 *      - delete operator se ration card remove karo
 *      - Pehle hasOwnProperty se check karo ki card hai ya nahi
 *      - Return true agar card tha aur delete hua, false otherwise
 *      - Agar registry object nahi hai ya cardId string nahi hai, return false
 *      - Example: removeRationCard({"RC001":{head:"Ram"}}, "RC001") => true
 *
 * Hint: typeof registry === "object" && registry !== null && !Array.isArray(registry)
 *   se check karo ki input valid object hai.
 *
 * @example
 *   getFamilyNames({"RC001":{...}})       // => ["RC001"]
 *   hasRationCard({"RC001":{...}}, "RC001") // => true
 *   removeRationCard(registry, "RC001")    // => true
 */
export function getFamilyNames(registry) {
  // Your code here
  // checking if the registry is a valid object
  if(typeof registry !== 'object' || registry == null || Array.isArray(registry)) return [];

  // using object.keys method to get the family names
  return Object.keys(registry);
}

export function getAllFamilies(registry) {
  // Your code here
  // checking if the registry is a valid object
  if(typeof registry !== 'object' || registry == null || Array.isArray(registry)) return [];

  // using object.values method to get all family objects
  return Object.values(registry);
}

export function getRationCardEntries(registry) {
  // Your code here
  // checking if the registry is a valid object
  if(typeof registry !== 'object' || registry == null || Array.isArray(registry)) return [];

  // using object.entries method to get all [id, family] pairs
  return Object.entries(registry);
}

export function hasRationCard(registry, cardId) {
  // Your code here
  // checking if the registry is a valid object and cardId is a string
  if(typeof registry !== 'object' || registry == null || Array.isArray(registry) || typeof cardId !== 'string') return false;

  // using hasOwnProperty method to check if the card exists
  return registry.hasOwnProperty(cardId);
}

export function removeRationCard(registry, cardId) {
  // Your code here
  // checking if the registry is a valid object and cardId is a string
  if(typeof registry !== 'object' || registry == null || Array.isArray(registry) || typeof cardId !== 'string') return false;

  // using delete operator to remove the ration card
  if(registry.hasOwnProperty(cardId)) {
    delete registry[cardId];
    return true;
  }
  return false;
}
