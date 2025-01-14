import path from 'path';
import * as fs from 'fs';

export default (filepath) => {
  const pathTo = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(pathTo, 'utf-8');
};
