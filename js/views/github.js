export async function mount(root, context) {
    const [{ renderDownloadGroups }, { pluginLabel }] = await Promise.all([
        import(`../shared/render.js?v=${context.version}`),
        import(`../shared/i18n.js?v=${context.version}`),
    ]);
    const target = root.querySelector("[data-role='groups']");
    if (!target) {
        throw new Error("github view container not found");
    }
    renderDownloadGroups(target, { ...context, channel: null, pluginLabel });
}
