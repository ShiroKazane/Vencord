import { ApplicationCommandOptionType, findOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getRandomImage(type: string, query?: string): Promise<{ image: string, source: string; }> {
    const url = query ? `https://nekos.best/api/v2/search?query=${encodeURI(query)}&category=${encodeURI(type)}&type=1` : `https://nekos.best/api/v2/${encodeURI(type)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results || data.results.length === 0) { throw new Error(`No GIF found for ${type} with query \`${query}\`.`); }
    return { image: data.results[0].url, source: data.results[0].source_url };
}

function createCommand(name: string, type: string, description: string) {
    return {
        name,
        description,
        options: [
            {
                name: "query",
                description: "Get a specific gif",
                type: ApplicationCommandOptionType.STRING
            },
        ],
        async execute(opts: any) {
            const query = findOption(opts, "query", "");
            const url = await getRandomImage(type, query);
            return { content: `[${type}${query ? ` - ${query} <${url.source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}>` : ""}](${url.image})` };
        }
    };
}

const commands = [
    createCommand("neko", "neko", "Send random cute neko image."),
    createCommand("kitsune", "kitsune", "Send random cute kitsune image."),
    createCommand("waifu", "waifu", "Send random waifu image."),
    createCommand("husband", "husbando", "Send random husbando image.")
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