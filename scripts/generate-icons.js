import fs from "fs";
import path from "path";

const ICONIFY_DIR = path.resolve("node_modules/@iconify");
const OUTPUT_FILE = path.resolve("src/lib/icons.ts");

// Convert kebab-case to camelCase
// Example: "account-add" → "accountAdd"
/** @typedef {object} json
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    return str
        .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toLowerCase());
}

// Format folder name to prefix (remove "icons-" and convert to camelCase)
// Example: "icons-line-md" → "lineMd"
/** @typedef {object} json
 * @param {string} folderName
 * @returns {string}
 */
function formatPrefix(folderName) {
    // icons-line-md → lineMd
    return folderName
        .replace("icons-", "")
        .split("-")
        .map((part, i) =>
            i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join("");
}

function generate() {
    const folders = fs.readdirSync(ICONIFY_DIR);

    const exports = [];

    folders.forEach((folder) => {
        if (!folder.startsWith("icons-")) return;

        const folderPath = path.join(ICONIFY_DIR, folder);
        const files = fs.readdirSync(folderPath);

        const prefix = formatPrefix(folder);

        files.forEach((file) => {
            if (!file.endsWith(".js")) return;
            if (file.includes(".d.ts")) return;

            const iconName = file.replace(".js", "");
            const camelName = toCamelCase(iconName);

            const exportName = `${prefix}${camelName.charAt(0).toUpperCase()}${camelName.slice(1)}`;

            exports.push(
                `export { default as ${exportName} } from "@iconify/${folder}/${iconName}";`,
            );
        });
    });

    fs.writeFileSync(OUTPUT_FILE, exports.join("\n"));

    console.log(`✅ Icons generated: ${exports.length}`);
}

generate();
