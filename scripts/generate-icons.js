import fs from "fs";
import path from "path";

const BASE_DIRS = [
    path.resolve("node_modules/@iconify"),
    path.resolve("node_modules/@iconify-icons"),
];

const OUTPUT_FILE = path.resolve("src/lib/icons/index.ts");

// Convert kebab-case → camelCase
function toCamelCase(str) {
    return str
        .split("-")
        .map((part, index) => {
            if (index === 0) return part.toLowerCase();

            if (/^\d/.test(part)) {
                return part.charAt(0) + part.slice(1);
            }

            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join("");
}

// Format prefix (icons-line-md → lineMd)
function formatPrefix(folderName) {
    return folderName
        .replace("icons-", "")
        .split("-")
        .map((part, i) =>
            i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join("");
}

function generate() {
    const imports = [];
    const exportNames = [];
    const mapEntries = [];

    BASE_DIRS.forEach((BASE_DIR) => {
        if (!fs.existsSync(BASE_DIR)) return;

        const folders = fs.readdirSync(BASE_DIR);

        folders.forEach((folder) => {
            let folderPath;
            let importBase;
            let prefix;

            // @iconify/icons-*
            if (BASE_DIR.includes("@iconify")) {
                if (!folder.startsWith("icons-")) return;

                folderPath = path.join(BASE_DIR, folder);
                importBase = `@iconify/${folder}`;
                prefix = formatPrefix(folder);
            }

            // @iconify-icons/*
            else if (BASE_DIR.includes("@iconify-icons")) {
                folderPath = path.join(BASE_DIR, folder);
                importBase = `@iconify-icons/${folder}`;
                prefix = formatPrefix(folder);
            }

            const files = fs.readdirSync(folderPath);

            files.forEach((file) => {
                if (!file.endsWith(".js")) return;
                if (file.includes(".d.ts")) return;

                const iconName = file.replace(".js", "");
                const camelName = toCamelCase(iconName);

                let safeName = camelName;
                if (/^\d/.test(safeName)) safeName = "_" + safeName;

                const exportName =
                    prefix +
                    safeName.charAt(0).toUpperCase() +
                    safeName.slice(1);

                imports.push(
                    `import ${exportName} from "${importBase}/${iconName}";`,
                );

                exportNames.push(`  ${exportName}`);

                const rawPrefix = folder.replace("icons-", "");
                const key = `${rawPrefix}:${iconName}`;

                mapEntries.push(`  "${key}": ${exportName}`);
            });
        });
    });

    // Ensure folder exists
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

    const fileContent = `
/* AUTO-GENERATED FILE — DO NOT EDIT */

${imports.join("\n")}

export {
${exportNames.join(",\n")}
};

export const ICON_MAP = {
${mapEntries.join(",\n")}
};
`;

    fs.writeFileSync(OUTPUT_FILE, fileContent.trim() + "\n");

    console.log(
        `✅ Success! Generated ${exportNames.length} icons into ${OUTPUT_FILE}`,
    );
}

generate();
