export const downloads = {
    apps: [
        {
            id: "maskingx-lite",
            name: "MaskingX Lite",
            description: {
                zh: "只包含基础程序包，可以进行 xlsx/docx 文件的脱敏和还原。不支持 PDF/图片和语义级脱敏。",
                en: "Includes only the base application package. It supports masking and restoration for xlsx/docx files. It does not support PDFs, images, or semantic-level masking.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.2.1/MaskingX-Lite-0.2.1-b40-win-x64.zip",
            plugins: [{ id: "masking-core" }],
        },
        {
            id: "maskingx-ocr",
            name: "MaskingX OCR",
            description: {
                zh: "包含 OCR 核心包和 OCR 模型包，可以进行 xlsx/docx、PDF/图片文件的脱敏和还原。不支持语义级脱敏。",
                en: "Includes OCR Core and OCR Model. It supports masking and restoration for xlsx/docx files as well as PDFs and images. It does not support semantic-level masking.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.2.1/MaskingX-OCR-0.2.1-b41-win-x64.zip",
            plugins: [
                { id: "masking-core" },
                { id: "mineru-core" },
                { id: "mineru-models" },
            ],
        },
    ],
    plugins: [
        {
            id: "masking-core",
            name: "Masking Core",
            description: {
                zh: "提供文档脱敏和还原的核心能力。",
                en: "Provides the core capabilities for document masking and restoration.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.2.1/masking-core-1.1.0-b01.mxpack",
        },
        {
            id: "mineru-core",
            name: "MinerU Core",
            description: {
                zh: "提供 PDF/图片解析和 OCR 识别能力。",
                en: "Provides PDF/image parsing and OCR recognition capabilities.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.2.1/mineru-core-4.0.11-b34.mxpack",
        },
        {
            id: "mineru-models",
            name: "MinerU Models",
            description: {
                zh: "提供 OCR 识别所需的本地模型文件。",
                en: "Provides the local models required for OCR recognition.",
            },
            url: "https://github.com/maskingx-ai/MaskingX/releases/download/v0.2.1/mineru-models-4.0.11-b44.mxpack",
        },
    ],
    channels: {
        qq: { url: "" },
        feishu: { url: "" },
        baidu: { url: "", code: "" },
    },
};
