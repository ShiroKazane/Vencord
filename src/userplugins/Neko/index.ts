import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

async function getcuteneko(): Promise<string> {
    const res = await fetch('https://nekos.best/api/v2/neko');
    const url = (await res.json()).results[0].url as string;
    return url;
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
        execute: async opts => ({
            content: await getcuteneko()
        })
    }]
});