import { projectsTemp } from './pages/projects.js';
import { starProj } from './pages/projects/starproj/starProj.js';
import { getLargeFile } from './pages/projects/getlargefile/getLargeFile.js';

console.log("index.js");
console.log(projectsTemp());
console.log(starProj());
console.log(new getLargeFile().hello);