export const downloads = {
    apps: [
        {
            id: "maskingx-lite",
            name: "MaskingX Lite",
            version: "0.1.0-b32",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b33/MaskingX-Lite-0.1.0-b32-win-x64.zip",
            plugins: [{ id: "masking-core", version: "1.0.0-b46" }],
        },
        {
            id: "maskingx-ocr",
            name: "MaskingX OCR",
            version: "0.1.0-b33",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b33/MaskingX-OCR-0.1.0-b33-win-x64.zip",
            plugins: [
                { id: "masking-core", version: "1.0.0-b46" },
                { id: "mineru-core", version: "4.0.11-b34" },
                { id: "mineru-models", version: "4.0.11-b44" },
            ],
        },
    ],
    plugins: [
        {
            id: "masking-core",
            name: "Masking Core",
            version: "1.0.0-b46",
            description: "",
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/maskingx-v0.1.0-b33/masking-core-1.0.0-b46.mxpack",
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
