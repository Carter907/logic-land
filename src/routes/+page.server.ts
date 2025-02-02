import { getSource } from "$lib/page/loadpage.server";

export function load() {

  return getSource({ pathname: "home" });
}
