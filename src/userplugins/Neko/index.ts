import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


async function getNeko(): Promise<{ image: string, source: string; }> {
    const res = await fetch('https://nekos.best/api/v2/neko');
    const data = await res.json();
    const { url: image, source_url: source } = data.results[0];
    return { image, source };
}

export default definePlugin({
    name: "Neko",
    authors: [
        Devs.Shiro
    ],
    description: "Add /neko command to get some cute neko image from nekos.best",
    dependencies: ["CommandsAPI"],
    commands: [{
        name: "neko",
        description: "Send cute neko image.",
        execute: async opts => {
            const { image, source } = await getNeko();
            return {
                content: `[${source.match(/https:\/\/(?:www\.)?(.*)/)?.[1]}](${image})`
            };
        }
    }]
});