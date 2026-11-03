const PLUGIN_LABELS = {
    "masking-core": { zh: "脱敏引擎包", en: "Masking engine pack", code: "Masking Pack" },
    "mineru-core": { zh: "OCR 核心包", en: "OCR core package", code: "OCR Core" },
    "mineru-models": { zh: "OCR 模型包", en: "OCR model package", code: "OCR Model" },
};

const MESSAGES = {
    zh: {
        subtitle: "完全离线的文档脱敏工具",
        language: "English",
        source: "GitHub 仓库",
        appGroup: "应用",
        pluginGroup: "插件",
        includedPackages: "内置这些包",
        appShell: "主应用程序 (App Shell)",
        download: "下载",
        unavailable: "暂未提供",
        accessCode: "提取码",
        loading: "正在加载下载信息",
        loadFailed: "下载信息加载失败，请稍后重试。",
        empty: "暂无可下载内容",
        tabs: {
            qq: "QQ群",
            feishu: "飞书云盘",
            baidu: "百度网盘",
        },
    },
    en: {
        subtitle: "Fully offline document masking",
        language: "中文",
        source: "GitHub repository",
        appGroup: "Applications",
        pluginGroup: "Plugins",
        includedPackages: "Included packages",
        appShell: "Main application (App Shell)",
        download: "Download",
        unavailable: "Not available",
        accessCode: "Access code",
        loading: "Loading download information",
        loadFailed: "Failed to load download information. Please try again later.",
        empty: "No downloads are available yet.",
        tabs: {
            qq: "QQ Group",
            feishu: "Feishu Drive",
            baidu: "Baidu Netdisk",
        },
    },
};

export function getMessages(locale) {
    return MESSAGES[locale] || MESSAGES.zh;
}

export function pluginLabel(id, fallback, locale) {
    const label = PLUGIN_LABELS[id];
    if (!label) {
        return fallback || id;
    }
    return locale === "zh" ? `${label.zh} (${label.code})` : `${label.en} (${label.code})`;
}
