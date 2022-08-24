const crypto = require("node:crypto");

/**
 * @param {string} name 
 * @returns string
 */
function createColor(name) {
    const hash = crypto.createHash("md5").update(name).digest("hex");
    const h = Math.floor((parseInt(hash.slice(0, 3), 16) / 4096) * 360);
    return `hsl(${h}, 70%, 45%)`;
}

/**
 * @param {string} name 
 * @returns {string}
 */
const languageColor = (name) => {
    return ({
        "typescript": "#2b7489",
        "typescriptreact": "#2b7489",
        "javascript": "#f1e05a",
        "javascriptreact": "#f1e05a",
        "json": "#292929",
        "html": "#e34c26",
        "css": "#563d7c",
        "rust": "#dea584",
        "vimwiki": "#199f4b",
        "abap": "#E8274B",
        "bat": "#C1F12E",
        "bibtex": "#778899",
        "coffeescript": "#244776",
        "c": "#555555",
        "cpp": "#f34b7d",
        "csharp": "#178600",
        "cuda-cpp": "#3A4E3A",
        "fsharp": "#b845fc",
        "git-commit": "#F44D27",
        "git-rebase": "#F44D27",
        "jsonc": "#292929",
        "latex": "#3D6117",
        "objective-c": "#438eff",
        "objective-cpp": "#6866fb",
        "php": "#4F5D95",
        "plaintext": "#ffe7ac",
        "powershell": "#012456",
        "scss": "#c6538c",
        "sass": "#a53b70",
        "shaderlab": "#222c37",
        "sh": "#89e051",
        "sql": "#e38c00",
        "text": "#3D6117",
        "vb": "#945db7",
        "vue-html": "#41b883",
        "xml": "#0060ac",
        "xsl": "#EB8CEB",
        "yaml": "#cb171e",
        "toml": "#9c4221",
        "cabalconfig": "#483465",
        "zsh": "#89e051",
        "nginx": "#009639",
        "sshconfig": "#d1dbe0",
        "conf": "#fff1f2",
        "dockercompose": "#384d54",
        "mdx": "#083fa1",
        "java": "#f0931c",
        null: "#999999",
        undefined: "#999999",
    }[name] || createColor(name));
};

module.exports = languageColor;
