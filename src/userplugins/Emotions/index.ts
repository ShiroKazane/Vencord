import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getImage(type: string): Promise<{ image: string, source: string; }> {
    const res = await fetch(`https://nekos.best/api/v2/${type}`);
    const data = await res.json();
    const { url: image } = data.results[0];
    return image;
}

export default definePlugin({
    name: "Emotions",
    authors: [
        Devs.Shiro
    ],
    description: "Add commands to express your emotions.",
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "lurk",
            description: "Send random lurk gif.",
            execute: async opts => {
                return {
                    content: `[lurk](${await getImage('lurk')})`
                };
            }
        },
        {
            name: "shoot",
            description: "Send random shoot gif.",
            execute: async opts => {
                return {
                    content: `[shoot](${await getImage('shoot')})`
                };
            }
        },
        {
            name: "sleep",
            description: "Send random sleep gif.",
            execute: async opts => {
                return {
                    content: `[sleep](${await getImage('sleep')})`
                };
            }
        },
        {
            name: "shrug-gif",
            description: "Send random shrug gif.",
            execute: async opts => {
                return {
                    content: `[shrug](${await getImage('shrug')})`
                };
            }
        },
        {
            name: "stare",
            description: "Send random stare gif.",
            execute: async opts => {
                return {
                    content: `[stare](${await getImage('stare')})`
                };
            }
        },
        {
            name: "wave",
            description: "Send random wave gif.",
            execute: async opts => {
                return {
                    content: `[wave](${await getImage('wave')})`
                };
            }
        },
        {
            name: "poke",
            description: "Send random poke gif.",
            execute: async opts => {
                return {
                    content: `[poke](${await getImage('poke')})`
                };
            }
        },
        {
            name: "smile",
            description: "Send random smile gif.",
            execute: async opts => {
                return {
                    content: `[smile](${await getImage('smile')})`
                };
            }
        },
        {
            name: "peck",
            description: "Send random peck gif.",
            execute: async opts => {
                return {
                    content: `[peck](${await getImage('peck')})`
                };
            }
        },
        {
            name: "wink",
            description: "Send random wink gif.",
            execute: async opts => {
                return {
                    content: `[wink](${await getImage('wink')})`
                };
            }
        },
        {
            name: "blush-gif",
            description: "Send random blush gif.",
            execute: async opts => {
                return {
                    content: `[blush](${await getImage('blush')})`
                };
            }
        },
        {
            name: "smug-gif",
            description: "Send random smug gif.",
            execute: async opts => {
                return {
                    content: `[smug](${await getImage('smug')})`
                };
            }
        },
        {
            name: "tickle",
            description: "Send random tickle gif.",
            execute: async opts => {
                return {
                    content: `[tickle](${await getImage('tickle')})`
                };
            }
        },
        {
            name: "yeet",
            description: "Send random yeet gif.",
            execute: async opts => {
                return {
                    content: `[yeet](${await getImage('yeet')})`
                };
            }
        },
        {
            name: "think",
            description: "Send random think gif.",
            execute: async opts => {
                return {
                    content: `[think](${await getImage('think')})`
                };
            }
        },
        {
            name: "highfive",
            description: "Send random highfive gif.",
            execute: async opts => {
                return {
                    content: `[highfive](${await getImage('highfive')})`
                };
            }
        },
        {
            name: "feed",
            description: "Send random feed gif.",
            execute: async opts => {
                return {
                    content: `[feed](${await getImage('feed')})`
                };
            }
        },
        {
            name: "bite",
            description: "Send random bite gif.",
            execute: async opts => {
                return {
                    content: `[bite](${await getImage('bite')})`
                };
            }
        },
        {
            name: "bored",
            description: "Send random bored gif.",
            execute: async opts => {
                return {
                    content: `[bored](${await getImage('bored')})`
                };
            }
        },
        {
            name: "nom",
            description: "Send random nom gif.",
            execute: async opts => {
                return {
                    content: `[nom](${await getImage('nom')})`
                };
            }
        },
        {
            name: "yawn",
            description: "Send random yawn gif.",
            execute: async opts => {
                return {
                    content: `[yawn](${await getImage('yawn')})`
                };
            }
        },
        {
            name: "facepalm",
            description: "Send random facepalm gif.",
            execute: async opts => {
                return {
                    content: `[facepalm](${await getImage('facepalm')})`
                };
            }
        },
        {
            name: "cuddle",
            description: "Send random cuddle gif.",
            execute: async opts => {
                return {
                    content: `[cuddle](${await getImage('cuddle')})`
                };
            }
        },
        {
            name: "kick-gif",
            description: "Send random kick gif.",
            execute: async opts => {
                return {
                    content: `[kick](${await getImage('kick')})`
                };
            }
        },
        {
            name: "happy",
            description: "Send random happy gif.",
            execute: async opts => {
                return {
                    content: `[happy](${await getImage('happy')})`
                };
            }
        },
        {
            name: "hug",
            description: "Send random hug gif.",
            execute: async opts => {
                return {
                    content: `[hug](${await getImage('hug')})`
                };
            }
        },
        {
            name: "baka",
            description: "Send random baka gif.",
            execute: async opts => {
                return {
                    content: `[baka](${await getImage('baka')})`
                };
            }
        },
        {
            name: "pat",
            description: "Send random pat gif.",
            execute: async opts => {
                return {
                    content: `[pat](${await getImage('pat')})`
                };
            }
        },
        {
            name: "nod",
            description: "Send random nod gif.",
            execute: async opts => {
                return {
                    content: `[nod](${await getImage('nod')})`
                };
            }
        },
        {
            name: "nope",
            description: "Send random nope gif.",
            execute: async opts => {
                return {
                    content: `[nope](${await getImage('nope')})`
                };
            }
        },
        {
            name: "kiss",
            description: "Send random kiss gif.",
            execute: async opts => {
                return {
                    content: `[kiss](${await getImage('kiss')})`
                };
            }
        },
        {
            name: "dance",
            description: "Send random dance gif.",
            execute: async opts => {
                return {
                    content: `[dance](${await getImage('dance')})`
                };
            }
        },
        {
            name: "punch",
            description: "Send random punch gif.",
            execute: async opts => {
                return {
                    content: `[punch](${await getImage('punch')})`
                };
            }
        },
        {
            name: "handshake",
            description: "Send random handshake gif.",
            execute: async opts => {
                return {
                    content: `[handshake](${await getImage('handshake')})`
                };
            }
        },
        {
            name: "slap",
            description: "Send random slap gif.",
            execute: async opts => {
                return {
                    content: `[slap](${await getImage('slap')})`
                };
            }
        },
        {
            name: "cry",
            description: "Send random cry gif.",
            execute: async opts => {
                return {
                    content: `[cry](${await getImage('cry')})`
                };
            }
        },
        {
            name: "pout",
            description: "Send random pout gif.",
            execute: async opts => {
                return {
                    content: `[pout](${await getImage('pout')})`
                };
            }
        },
        {
            name: "handhold",
            description: "Send random handhold gif.",
            execute: async opts => {
                return {
                    content: `[handhold](${await getImage('handhold')})`
                };
            }
        },
        {
            name: "thumbsup",
            description: "Send random thumbsup gif.",
            execute: async opts => {
                return {
                    content: `[thumbsup](${await getImage('thumbsup')})`
                };
            }
        },
        {
            name: "laugh",
            description: "Send random laugh gif.",
            execute: async opts => {
                return {
                    content: `[laugh](${await getImage('laugh')})`
                };
            }
        }
    ]
});