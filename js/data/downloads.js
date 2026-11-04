export const downloads = {
    apps: [
        {
            id: "maskingx-lite",
            name: "MaskingX Lite",
            version: "0.1.0-b34",
            description: {
                zh: "只包含基础程序包，可以进行 xlsx/docx 文件的脱敏和还原。不支持 PDF/图片和语义级脱敏。",
                en: "Includes only the base application package. It supports masking and restoration for xlsx/docx files. It does not support PDFs, images, or semantic-level masking.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.1.0/MaskingX-Lite-0.1.0-b34-win-x64.zip",
            plugins: [{ id: "masking-core", version: "1.0.0-b47" }],
        },
        {
            id: "maskingx-ocr",
            name: "MaskingX OCR",
            version: "0.1.0-b35",
            description: {
                zh: "包含 OCR 核心包和 OCR 模型包，可以进行 xlsx/docx、PDF/图片文件的脱敏和还原。不支持语义级脱敏。",
                en: "Includes OCR Core and OCR Model. It supports masking and restoration for xlsx/docx files as well as PDFs and images. It does not support semantic-level masking.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.1.0/MaskingX-OCR-0.1.0-b35-win-x64.zip",
            plugins: [
                { id: "masking-core", version: "1.0.0-b48" },
                { id: "mineru-core", version: "4.0.11-b41" },
                { id: "mineru-models", version: "4.0.11-b51" },
            ],
        },
    ],
    plugins: [
        {
            id: "mineru-core",
            name: "MinerU Core",
            version: "4.0.11-b34",
            description: {
                zh: "提供 PDF/图片解析和 OCR 识别能力。",
                en: "Provides PDF/image parsing and OCR recognition capabilities.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.1.0/mineru-core-4.0.11-b34.mxpack",
        },
        {
            id: "mineru-models",
            name: "MinerU Models",
            version: "4.0.11-b44",
            description: {
                zh: "提供 OCR 识别所需的本地模型文件。",
                en: "Provides the local models required for OCR recognition.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.1.0/mineru-models-4.0.11-b44.mxpack",
        },
    ],
    channels: {
        qq: { url: "" },
        feishu: { url: "" },
        baidu: { url: "", code: "" },
    },
};
