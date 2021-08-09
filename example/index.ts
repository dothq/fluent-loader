import { createInterface } from "readline";

import en from "./en.ftl";
import es from "./es.ftl";

const resources = {
    en,
    es
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Available Languages", Object.keys(resources));

rl.question("What language should we use? ", (language: any) => {
    const l10n = (resources as any)[language];

    if(l10n) {
        rl.question("What is your name? ", (name: string) => {
            console.log("Localised result:", l10n.format("hello-user", { name }));
            process.exit(0);
        })
    } else {
        console.log(`Language not found. Try one of these: ${Object.keys(resources)}`)
        process.exit(0);
    }
});

rl.on("close", () => process.exit(0));