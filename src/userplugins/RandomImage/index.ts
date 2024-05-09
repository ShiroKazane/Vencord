import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getImage(type: string): Promise<{ image: string, source: string; }> {
    const res = await fetch(`https://nekos.best/api/v2/${type}`);
    const data = await res.json();
    const { url: image, source_url: source } = data.results[0];
    return { image, source };
}

export default definePlugin({
    name: "RandomImage",
    authors: [
        Devs.Shiro
    ],
    description: "Add commands to get random image.",
    dependencies: ["CommandsAPI"],
    commands: [
        {
            name: "neko",
            description: "Send random cute neko image.",
            execute: async opts => {
                const { image, source } = await getImage('neko');
                return {
                    content: `[${source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}](${image})`
                };
            }
        },
        {
            name: "waifu",
            description: "Send random waifu image.",
            execute: async opts => {
                const { image, source } = await getImage('waifu');
                return {
                    content: `[${source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}](${image})`
                };
            }
        },
        {
            name: "husbando",
            description: "Send random husbando image.",
            execute: async opts => {
                const { image, source } = await getImage('husbando');
                return {
                    content: `[${source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}](${image})`
                };
            }
        },
        {
            name: "kitsune",
            description: "Send random cute kitsune image.",
            execute: async opts => {
                const { image, source } = await getImage('kitsune');
                return {
                    content: `[${source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}](${image})`
                };
            }
        }
    ]
});