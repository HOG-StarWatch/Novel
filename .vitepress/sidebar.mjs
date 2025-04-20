import generateSidebar from "../utils/auto-gen-sidebar.mjs";

export default {
    '/Novel/': generateSidebar("Novel"),
    '/N/': generateSidebar("N"),
    '/Pixiv/': generateSidebar("Pixiv"),
    '/Comix/': generateSidebar("Comix"),
};