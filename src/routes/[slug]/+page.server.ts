import { getSource } from "$lib/page/loadpage.server";

export function load({ fetch, url }) {

    return getSource(fetch, url);
}
