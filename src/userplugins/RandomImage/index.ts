import { ApplicationCommandOptionType, findOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getRandomImage(type: string, query?: string): Promise<{ image: string, source: string; }> {
    if (type == "shiba") {
        const url = "https://shibe.online/api/shibes";
        const res = await fetch(url);
        const data = await res.json();
        if (!data || res.status !== 200) { throw new Error(`No image found for ${type}.`); }
        return { image: data[0], source: "https://shibe.online/api/shibes" };
    } else {
        const url = query ? `https://nekos.best/api/v2/search?query=${encodeURI(query)}&category=${encodeURI(type)}&type=1` : `https://nekos.best/api/v2/${encodeURI(type)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (!data.results || data.results.length === 0) { throw new Error(`No image found for ${type}${query ? ` with query \`${query}\`.` : "."}`); }
        return { image: data.results[0].url, source: data.results[0].source_url };
    }
}

function createCommand(name: string, type: string, description: string) {
    return {
        name,
        description,
        options: [
            {
                name: "query",
                description: "Get a specific image.",
                type: ApplicationCommandOptionType.STRING
            },
        ],
        async execute(opts: any) {
            const query = findOption(opts, "query", "");
            const url = await getRandomImage(type, query);
            return { content: `[${type}${query ? ` - ${query} <${url.source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}>` : ` <${url.source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}>`}](${url.image})` };
        }
    };
}

const commands = [
    createCommand("neko", "neko", "Send random cute neko image."),
    createCommand("kitsune", "kitsune", "Send random cute kitsune image."),
    createCommand("shiba", "shiba", "Send random cute shiba image."),
    createCommand("waifu", "waifu", "Send random waifu image."),
    createCommand("husbando", "husbando", "Send random husbando image.")
];

export default definePlugin({
    name: "RandomImage",
    authors: [
        Devs.Shiro
    ],
    description: "Add commands to get random image.",
    dependencies: ["CommandsAPI"],
    commands
});