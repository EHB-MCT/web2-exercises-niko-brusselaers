"use strict";

import * as fs from 'fs/promises';

let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);
let test = JSON.stringify(data)
for (let id in data) {
   const makefile = fs.writeFile(id + '.json', JSON.stringify(data[id]))
}