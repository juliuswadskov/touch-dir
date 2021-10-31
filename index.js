import { execSync } from 'child_process'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function touch(i) { // It is importent to make the folder before a file
    if (!i) {return console.error("Ingen fil angivet")}
    try {
        execSync(`${__dirname}/lib/touch.exe "${i}"`)
        return true
    } catch (e) {
        return false
    }
}

export async function mkdir(i) {
    if (!i) {return console.error("Ingen mappe angivet")}
    try {
        execSync(`${__dirname}/lib/mkdir.exe "${i}"`)
        return true
    } catch (e) {
        return false
    }
}