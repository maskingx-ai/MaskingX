export const downloads = {
    apps: [
        {
            id: "maskingx",
            name: "MaskingX",
            version: "0.1.0-b31",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b31/MaskingX-0.1.0-b31-win-x64.zip",
            plugins: [
                { id: "masking-core", version: "1.0.0-b44" },
                { id: "mineru-core", version: "4.0.11-b34" },
                { id: "mineru-models", version: "4.0.11-b44" },
            ],
        },
    ],
    plugins: [
        {
            id: "masking-core",
            name: "Masking Core",
            version: "1.0.0-b44",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b31/masking-core-1.0.0-b44.mxpack",
        },
        {
            id: "mineru-core",
            name: "MinerU Core",
            version: "4.0.11-b34",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b31/mineru-core-4.0.11-b34.mxpack",
        },
        {
            id: "mineru-models",
            name: "MinerU Models",
            version: "4.0.11-b44",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b31/mineru-models-4.0.11-b44.mxpack",
        },
    ],
    channels: {
        qq: { url: "" },
        feishu: { url: "" },
        baidu: { url: "", code: "" },
    },
};
