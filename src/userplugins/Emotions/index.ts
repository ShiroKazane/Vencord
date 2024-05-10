import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

async function getRandomGif(type: string): Promise<string> {
    const url = `https://api.otakugifs.xyz/gif?reaction=${encodeURI(type)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data || res.status !== 200) { throw new Error(`No GIF found for \`${type}\`.`); }
    return data.url;
}

function createCommand(name: string, type: string, description: string) {
    return {
        name,
        description,
        async execute() {
            const url = await getRandomGif(type);
            return { content: `[${type}](${url})` };
        }
    };
}

const commands = [
    createCommand("airkiss", "airkiss", "Send random airkiss gif."),
    createCommand("angrystare", "angrystare", "Send random angrystare gif."),
    createCommand("bite", "bite", "Send random bite gif."),
    createCommand("bleh", "bleh", "Send random bleh gif."),
    createCommand("blush-gif", "blush", "Send random blush gif."),
    createCommand("brofist", "brofist", "Send random brofist gif."),
    createCommand("celebrate", "celebrate", "Send random celebrate gif."),
    createCommand("cheers", "cheers", "Send random cheers gif."),
    createCommand("clap", "clap", "Send random clap gif."),
    createCommand("confused-gif", "confused", "Send random confused gif."),
    createCommand("cool", "cool", "Send random cool gif."),
    createCommand("cry", "cry", "Send random cry gif."),
    createCommand("cuddle", "cuddle", "Send random cuddle gif."),
    createCommand("dance", "dance", "Send random dance gif."),
    createCommand("drool", "drool", "Send random drool gif."),
    createCommand("evillaugh", "evillaugh", "Send random evillaugh gif."),
    createCommand("facepalm", "facepalm", "Send random facepalm gif."),
    createCommand("handhold", "handhold", "Send random handhold gif."),
    createCommand("happy-gif", "happy", "Send random happy gif."),
    createCommand("headbang", "headbang", "Send random headbang gif."),
    createCommand("hug", "hug", "Send random hug gif."),
    createCommand("kiss", "kiss", "Send random kiss gif."),
    createCommand("laugh", "laugh", "Send random laugh gif."),
    createCommand("lick", "lick", "Send random lick gif."),
    createCommand("love", "love", "Send random love gif."),
    createCommand("mad", "mad", "Send random mad gif."),
    createCommand("nervous", "nervous", "Send random nervous gif."),
    createCommand("no", "no", "Send random no gif."),
    createCommand("nom", "nom", "Send random nom gif."),
    createCommand("nosebleed", "nosebleed", "Send random nosebleed gif."),
    createCommand("nuzzle", "nuzzle", "Send random nuzzle gif."),
    createCommand("nyah", "nyah", "Send random nyah gif."),
    createCommand("pat", "pat", "Send random pat gif."),
    createCommand("peek", "peek", "Send random peek gif."),
    createCommand("pinch", "pinch", "Send random pinch gif."),
    createCommand("poke", "poke", "Send random poke gif."),
    createCommand("pout", "pout", "Send random pout gif."),
    createCommand("punch", "punch", "Send random punch gif."),
    createCommand("roll", "roll", "Send random roll gif."),
    createCommand("run", "run", "Send random run gif."),
    createCommand("sad", "sad", "Send random sad gif."),
    createCommand("scared", "scared", "Send random scared gif."),
    createCommand("shout", "shout", "Send random shout gif."),
    createCommand("shrug-gif", "shrug", "Send random shrug gif."),
    createCommand("shy", "shy", "Send random shy gif."),
    createCommand("sigh", "sigh", "Send random sigh gif."),
    createCommand("sip", "sip", "Send random sip gif."),
    createCommand("slap", "slap", "Send random slap gif."),
    createCommand("sleep", "sleep", "Send random sleep gif."),
    createCommand("slowclap", "slowclap", "Send random slowclap gif."),
    createCommand("smack", "smack", "Send random smack gif."),
    createCommand("smile", "smile", "Send random smile gif."),
    createCommand("smug-gif", "smug", "Send random smug gif."),
    createCommand("sneeze", "sneeze", "Send random sneeze gif."),
    createCommand("sorry", "sorry", "Send random sorry gif."),
    createCommand("stare", "stare", "Send random stare gif."),
    createCommand("stop", "stop", "Send random stop gif."),
    createCommand("surprised", "surprised", "Send random surprised gif."),
    createCommand("sweat", "sweat", "Send random sweat gif."),
    createCommand("thumbsup", "thumbsup", "Send random thumbsup gif."),
    createCommand("tickle", "tickle", "Send random tickle gif."),
    createCommand("tired", "tired", "Send random tired gif."),
    createCommand("wave", "wave", "Send random wave gif."),
    createCommand("wink", "wink", "Send random wink gif."),
    createCommand("woah", "woah", "Send random woah gif."),
    createCommand("yawn", "yawn", "Send random yawn gif."),
    createCommand("yay", "yay", "Send random yay gif."),
    createCommand("yes", "yes", "Send random yes gif.")
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

// async function getRandomGif(type: string, query?: string): Promise<string> {
//     const url = query ? `https://nekos.best/api/v2/search?query=${encodeURI(query)}&category=${encodeURI(type)}&type=2` : `https://nekos.best/api/v2/${encodeURI(type)}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     if (!data.results || data.results.length === 0) { throw new Error(`No GIF found for ${type} with query \`${query}\`.`); }
//     return data.results[0].url;
// }

// function createCommand(name: string, type: string, description: string) {
//     return {
//         name,
//         description,
//         options: [
//             {
//                 name: "query",
//                 description: "Get a specific gif",
//                 type: ApplicationCommandOptionType.STRING
//             },
//         ],
//         async execute(opts: any) {
//             const query = findOption(opts, "query", "");
//             const url = await getRandomGif(type, query);
//             return { content: `[${type}${query ? ` - ${query}` : ""}](${url})` };
//         }
//     };
// }