import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

async function getRandomAnimal(type: string): Promise<string> {
    const url = `http://shibe.online/api/${encodeURI(type)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data || res.status !== 200) { throw new Error(`No image found for \`${type}\`.`); }
    return data[0];
}

function createCommand(name: string, type: string, description: string) {
    return {
        name,
        description,
        async execute() {
            const url = await getRandomAnimal(type);
            return { content: `[${type}](${url})` };
        }
    };
}

const commands = [
    createCommand("bird", "birds", "Send random bird image."),
    createCommand("cat", "cats", "Send random cat image."),
    createCommand("shiba", "shibes", "Send random cat image.")
];

export default definePlugin({
    name: "RandomAnimal",
    authors: [
        Devs.Shiro
    ],
    description: "Add commands to get random animal image.",
    dependencies: ["CommandsAPI"],
    commands
});