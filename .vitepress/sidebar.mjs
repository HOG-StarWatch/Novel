import generateSidebar from "../utils/auto-gen-sidebar.mjs";

export default {
    '/Novel/': generateSidebar("Novel"),
    '/Pixiv/': generateSidebar("Pixiv"),
    '/Comix/': generateSidebar("Comix"),
};