import redis from "$lib/redis";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ url }) => {
    const errorParams = new URLSearchParams({
        link: url.pathname
    }).toString();

    console.log("Trying to access %s...", url.pathname);

    let link = await redis.hget("2011482.xyz", `${url.pathname}`);

    if (!link) {
        console.error("Fail. Redirecting to 404");
        link = "/404?" + errorParams;
    } else {
        console.log("Success! Redirecting to %s", link);
    }

    return {
        status: 302,
        headers: {
            Location: link
        }
    };
};

// TODO: add post method
