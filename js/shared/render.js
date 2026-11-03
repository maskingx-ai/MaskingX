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

function appRows(downloads, channel, locale, pluginLabel) {
    return downloads.apps.map((app) => ({
        key: app.id,
        name: app.name,
        version: app.version,
        description: app.description,
        url: channel ? channel.url : app.url,
        kind: "app",
        includedPlugins: (app.plugins || []).map((plugin) => ({
            key: `${plugin.id}:${plugin.version}`,
            label: pluginLabel(plugin.id, plugin.id, locale),
            version: plugin.version,
        })),
    }));
}

function pluginRows(downloads, channel, locale, pluginLabel) {
    return downloads.plugins.map((plugin) => ({
        key: plugin.id,
        name: pluginLabel(plugin.id, plugin.name, locale),
        version: plugin.version,
        description: plugin.description,
        url: channel ? channel.url : plugin.url,
        kind: "plugin",
        includedPlugins: [],
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
    const main = createElement("div", "download-main");
    main.appendChild(row.kind === "app" ? appIcon(version) : pluginIcon());

    const text = createElement("div", "download-text");
    const title = createElement("div", "download-title");
    title.appendChild(createElement("span", "download-name", row.name));
    title.appendChild(createElement("span", "download-version", row.version));
    text.appendChild(title);
    if (row.description) {
        text.appendChild(createElement("p", "download-description", row.description));
    }
    main.appendChild(text);
    item.appendChild(main);

    if (row.includedPlugins.length > 0) {
        const block = createElement("div", "app-plugins-block");
        block.appendChild(createElement("p", "app-plugins-title", messages.includedPackages));
        const list = createElement("ul", "app-plugins");
        for (const plugin of row.includedPlugins) {
            const entry = createElement("li");
            entry.appendChild(createElement("span", "", plugin.label));
            entry.appendChild(createElement("span", "app-plugin-version", plugin.version));
            list.appendChild(entry);
        }
        block.appendChild(list);
        item.appendChild(block);
    }

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

    const apps = appRows(downloads, channel, locale, pluginLabel);
    const plugins = pluginRows(downloads, channel, locale, pluginLabel);
    if (apps.length === 0 && plugins.length === 0) {
        container.appendChild(createElement("p", "empty-state", messages.empty));
        return;
    }

    container.appendChild(renderGroup(messages.appGroup, apps, messages, version));
    container.appendChild(renderGroup(messages.pluginGroup, plugins, messages, version));
}
