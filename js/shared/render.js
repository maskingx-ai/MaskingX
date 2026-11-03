function displayVersion(version) {
    return version.replace(/-b\d+$/i, "");
}

function descriptionFor(value, locale) {
    if (!value) return "";
    if (typeof value === "string") return value;
    return value[locale] || "";
}

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text !== undefined) {
        element.textContent = text;
    }
    return element;
}

function isSafeUrl(value) {
    if (!value) return false;
    try {
        const url = new URL(value);
        return url.protocol === "https:" || url.protocol === "http:";
    } catch {
        return false;
    }
}

function appIcon(version) {
    const image = document.createElement("img");
    image.className = "download-icon";
    image.alt = "";
    const url = new URL("maskingx-icon.png", document.baseURI);
    url.searchParams.set("v", version);
    image.src = url.href;
    return image;
}

function pluginIcon() {
    const wrapper = createElement("span", "download-icon plugin-icon");
    wrapper.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">' +
        '<path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h4.5v-1.5a2.5 2.5 0 0 1 5 0V22H18a2 2 0 0 0 2-2v-4h.5a2.5 2.5 0 0 0 0-5Z" />' +
        "</svg>";
    return wrapper;
}

function appRows(downloads, channel, locale, pluginLabel, appShellLabel) {
    return downloads.apps.map((app) => ({
        key: app.id,
        name: app.name,
        version: displayVersion(app.version),
        description: descriptionFor(app.description, locale),
        url: channel ? channel.url : app.url,
        kind: "app",
        includedModules: [
            {
                key: `${app.id}:app-shell`,
                label: appShellLabel,
                version: displayVersion(app.version),
            },
            ...(app.plugins || []).map((plugin) => ({
                key: `${plugin.id}:${plugin.version}`,
                label: pluginLabel(plugin.id, plugin.id, locale),
                version: displayVersion(plugin.version),
            })),
        ],
    }));
}

function pluginRows(downloads, channel, locale, pluginLabel) {
    return downloads.plugins.map((plugin) => ({
        key: plugin.id,
        name: pluginLabel(plugin.id, plugin.name, locale),
        version: displayVersion(plugin.version),
        description: descriptionFor(plugin.description, locale),
        url: channel ? channel.url : plugin.url,
        kind: "plugin",
        includedModules: [],
    }));
}

function renderDownloadAction(row, messages) {
    if (isSafeUrl(row.url)) {
        const link = createElement("a", "primary-button", messages.download);
        link.href = row.url;
        link.rel = "noreferrer";
        return link;
    }
    return createElement("span", "download-unavailable", messages.unavailable);
}

function renderRow(row, messages, version) {
    const item = createElement("li", "download-row");
    const left = createElement("div", "download-left");
    const main = createElement("div", "download-main");
    main.appendChild(row.kind === "app" ? appIcon(version) : pluginIcon());

    const text = createElement("div", "download-text");
    const title = createElement("div", "download-title");
    title.appendChild(createElement("span", "download-name", row.name));
    title.appendChild(createElement("span", "download-version", row.version));
    text.appendChild(title);
    main.appendChild(text);
    left.appendChild(main);

    if (row.includedModules.length > 0) {
        const block = createElement("div", "app-plugins-block");
        block.appendChild(createElement("p", "app-plugins-title", messages.includedPlugins));
        const list = createElement("ul", "app-plugins");
        for (const module of row.includedModules) {
            const entry = createElement("li");
            entry.appendChild(createElement("span", "", module.label));
            entry.appendChild(createElement("span", "app-plugin-version", module.version));
            list.appendChild(entry);
        }
        block.appendChild(list);
        left.appendChild(block);
    }
    item.appendChild(left);

    const description = createElement("div", "download-description-block");
    if (row.description) {
        description.appendChild(createElement("p", "download-description-label", messages.description));
        description.appendChild(createElement("p", "download-description", row.description));
    }
    item.appendChild(description);

    item.appendChild(renderDownloadAction(row, messages));
    return item;
}

function renderGroup(title, rows, messages, version) {
    const section = createElement("section", "download-group");
    section.appendChild(createElement("h2", "", title));
    if (rows.length === 0) {
        section.appendChild(createElement("p", "empty-state", messages.empty));
        return section;
    }
    const list = createElement("ul", "download-list");
    for (const row of rows) {
        list.appendChild(renderRow(row, messages, version));
    }
    section.appendChild(list);
    return section;
}

export function renderDownloadGroups(container, { downloads, locale, messages, channel, version, pluginLabel }) {
    container.replaceChildren();

    if (channel && channel.code) {
        const code = createElement("p", "access-code");
        code.appendChild(document.createTextNode(`${messages.accessCode}: `));
        const value = createElement("code", "", channel.code);
        code.appendChild(value);
        container.appendChild(code);
    }

    const apps = appRows(downloads, channel, locale, pluginLabel, messages.appShell);
    const plugins = pluginRows(downloads, channel, locale, pluginLabel);
    if (apps.length === 0 && plugins.length === 0) {
        container.appendChild(createElement("p", "empty-state", messages.empty));
        return;
    }

    container.appendChild(renderGroup(messages.appGroup, apps, messages, version));
    container.appendChild(renderGroup(messages.pluginGroup, plugins, messages, version));
}
