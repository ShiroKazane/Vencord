import { ApplicationCommandOptionType, findOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getRandomGif(type: string, query?: string): Promise<string> {
    const url = query ? `https://nekos.best/api/v2/search?query=${encodeURI(query)}&category=${encodeURI(type)}&type=2` : `https://nekos.best/api/v2/${encodeURI(type)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.results || data.results.length === 0) { throw new Error(`No GIF found for ${type} with query \`${query}\`.`); }
    return data.results[0].url;
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
            const imageUrl = await getRandomGif(type, query);
            return { content: `[${name}](${imageUrl})` };
        }
    };
}

const commands = [
    createCommand("lurk", "lurk", "Send random lurk gif."),
    createCommand("shoot", "shoot", "Send random shoot gif."),
    createCommand("sleep", "sleep", "Send random sleep gif."),
    createCommand("shrug-gif", "shrug", "Send random shrug gif."),
    createCommand("stare", "stare", "Send random stare gif."),
    createCommand("wave", "wave", "Send random wave gif."),
    createCommand("poke", "poke", "Send random poke gif."),
    createCommand("smile", "smile", "Send random smile gif."),
    createCommand("peck", "peck", "Send random peck gif."),
    createCommand("wink", "wink", "Send random wink gif."),
    createCommand("blush-gif", "blush", "Send random blush gif."),
    createCommand("smug-gif", "smug", "Send random smug gif."),
    createCommand("tickle", "tickle", "Send random tickle gif."),
    createCommand("yeet", "yeet", "Send random yeet gif."),
    createCommand("think", "think", "Send random think gif."),
    createCommand("highfive", "highfive", "Send random highfive gif."),
    createCommand("feed", "feed", "Send random feed gif."),
    createCommand("bite", "bite", "Send random bite gif."),
    createCommand("bored", "bored", "Send random bored gif."),
    createCommand("nom", "nom", "Send random nom gif."),
    createCommand("yawn", "yawn", "Send random yawn gif."),
    createCommand("facepalm", "facepalm", "Send random facepalm gif."),
    createCommand("cuddle", "cuddle", "Send random cuddle gif."),
    createCommand("kick-gif", "kick", "Send random kick gif."),
    createCommand("happy-gif", "happy", "Send random happy gif."),
    createCommand("hug", "hug", "Send random hug gif."),
    createCommand("baka", "baka", "Send random baka gif."),
    createCommand("pat", "pat", "Send random pat gif."),
    createCommand("nod", "nod", "Send random nod gif."),
    createCommand("nope", "nope", "Send random nope gif."),
    createCommand("kiss", "kiss", "Send random kiss gif."),
    createCommand("dance", "dance", "Send random dance gif."),
    createCommand("punch", "punch", "Send random punch gif."),
    createCommand("handshake", "handshake", "Send random handshake gif."),
    createCommand("slap", "slap", "Send random slap gif."),
    createCommand("cry", "cry", "Send random cry gif."),
    createCommand("pout", "pout", "Send random pout gif."),
    createCommand("handhold", "handhold", "Send random handhold gif."),
    createCommand("thumbsup", "thumbsup", "Send random thumbsup gif."),
    createCommand("laugh", "laugh", "Send random laugh gif.")
];

export default definePlugin({
    name: "Emotions",
    authors: [
        Devs.Shiro
    ],
    description: "Add commands to express your emotions.",
    dependencies: ["CommandsAPI"],
    commands
});