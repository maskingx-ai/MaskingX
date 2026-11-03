const assetVersion = document.body.dataset.assetVersion;
if (!assetVersion) {
    throw new Error("asset version is missing");
}

const viewRoot = document.querySelector("#view-root");
const tabs = Array.from(document.querySelectorAll(".tab"));
const languageToggle = document.querySelector("#language-toggle");
let locale = document.documentElement.lang.startsWith("zh") ? "zh" : "en";

let downloads;
let messages;
let translate;
let activeTab = null;
let requestId = 0;

function getMessage(source, key) {
    return key.split(".").reduce((value, part) => (value ? value[part] : undefined), source);
}

function applyMessages() {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = locale === "zh" ? "MaskingX 下载" : "MaskingX Download";
    for (const element of document.querySelectorAll("[data-i18n]")) {
        const value = getMessage(messages, element.dataset.i18n);
        if (typeof value === "string") {
            element.textContent = value;
        }
    }
}

function showError(error) {
    viewRoot.replaceChildren();
    const element = document.createElement("p");
    element.className = "status-text error";
    element.textContent = messages.loadFailed;
    viewRoot.appendChild(element);
    console.error(error);
}

function setActiveTab(tab) {
    activeTab = tab;
    for (const item of tabs) {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
    }
}

function loadViewAssets(tab) {
    document.querySelectorAll("link[data-view-style]").forEach((element) => element.remove());
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = tab.dataset.css;
    style.dataset.viewStyle = tab.dataset.view;
    document.head.appendChild(style);
}

async function showView(tab) {
    const token = ++requestId;
    const version = tab.dataset.version;
    const htmlUrl = tab.dataset.html;
    const jsUrl = tab.dataset.js;
    if (!version || !htmlUrl || !jsUrl) {
        throw new Error("view asset metadata is missing");
    }
    const moduleUrl = new URL(jsUrl, document.baseURI).href;

    const response = await fetch(htmlUrl);
    if (!response.ok) {
        throw new Error(`failed to load view: ${response.status}`);
    }
    const html = await response.text();
    if (token !== requestId) return;

    loadViewAssets(tab);
    viewRoot.innerHTML = html;
    const view = viewRoot.firstElementChild;
    if (!view) {
        throw new Error("view markup is empty");
    }

    const module = await import(moduleUrl);
    if (token !== requestId) return;
    await module.mount(view, {
        downloads,
        locale,
        messages,
        version,
    });
}

async function activateTab(tab) {
    setActiveTab(tab);
    try {
        await showView(tab);
    } catch (error) {
        if (tab === activeTab) {
            showError(error);
        }
    }
}

async function start() {
    const [dataModule, i18nModule] = await Promise.all([
        import(`./data/downloads.js?v=${assetVersion}`),
        import(`./shared/i18n.js?v=${assetVersion}`),
    ]);
    downloads = dataModule.downloads;
    translate = i18nModule.getMessages;
    messages = translate(locale);
    applyMessages();

    for (const tab of tabs) {
        tab.addEventListener("click", () => {
            void activateTab(tab);
        });
    }

    languageToggle.addEventListener("click", () => {
        locale = locale === "zh" ? "en" : "zh";
        messages = translate(locale);
        applyMessages();
        if (activeTab) {
            void activateTab(activeTab);
        }
    });

    const initial = document.querySelector(".tab.active") || tabs[0];
    if (!initial) {
        throw new Error("no download tabs are defined");
    }
    await activateTab(initial);
}

start().catch((error) => {
    if (viewRoot && messages) {
        showError(error);
    } else {
        console.error(error);
    }
});
