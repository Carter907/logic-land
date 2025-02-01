import { getSource } from "$lib/page/loadpage.server";

export function load({ url }) {

    return getSource(url);
}
