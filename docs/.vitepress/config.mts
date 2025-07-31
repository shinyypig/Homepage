import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressConfigs = {
    title: "Liangliang's Blog",
    description: "记录技术笔记、学习心得与生活点滴",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Notes", link: "/1.notes" },
            { text: "Papers", link: "/2.papers" },
            { text: "Courses", link: "/3.courses" },
            { text: "About", link: "/about" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/shinyypig" }],
        search: {
            provider: "local",
        },
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2025-present Liangliang Zhu",
        },
        editLink: {
            pattern:
                "https://github.com/shinyypig/Homepage/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
    },
    markdown: {
        math: true,
        lineNumbers: true,
        image: {
            lazyLoading: true,
        },
    },
    sitemap: {
        provider: "local",
        hostname: "https://shinyypig.top",
    },
};

const vitePressSidebarOptions = {
    documentRootPath: "docs",
    collapsed: false,
    collapseDepth: 1,
    capitalizeFirst: true,
    useFolderLinkFromIndexFile: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    excludeByGlobPattern: ["assets/"],
    sortFolderTop: "top",
    sortMenusByFileDatePrefix: true,
    // sortMenusOrderByDescending: true,
};

export default defineConfig(
    withSidebar(vitePressConfigs, vitePressSidebarOptions)
);
