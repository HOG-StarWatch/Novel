import generateSidebar from "../utils/auto-gen-sidebar.mjs";

export default {
    '/Novel/': generateSidebar("Novel"),
    '/Fiction/': generateSidebar("Fiction"),
    '/Pixiv/': generateSidebar("Pixiv"),
    '/Comix/': generateSidebar("Comix"),
};