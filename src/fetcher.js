const axios = require("axios");
const { MissingParamError } = require("./common/utils");

/**
 * @param {string} name 
 * @returns {string}
 */
const normalizeLanguageName = (name) => {
  return {
    "": "Unknown",
    "cs": "csharp",
    "ts": "typescript",
    "tsx": "typescriptreact",
    "js": "javascript",
    "jsx": "javascriptreact",
    "perl6": "perl",
    "jade": "pug",
    "gitcommit": "git-commit",
    "gitrebase": "git-rebase",
    "shellscript": "sh",
    "make": "makefile"
  }[name] || name;
};

/**
* @param {string} name 
* @returns {string}
*/
const prettifyLanguageName = (name) => {
  return ({
    "typescript": "TypeScript",
    "typescriptreact": "TypeScript with React",
    "javascript": "JavaScript",
    "javascriptreact": "JavaScript with React",
    "json": "JSON",
    "html": "HTML",
    "css": "CSS",
    "rust": "Rust",
    "vimwiki": "VimWiki",
    "abap": "ABAP",
    "bat": "Windows Batch",
    "bibtex": "BibTeX",
    "coffeescript": "CoffeeScript",
    "cpp": "C++",
    "csharp": "C#",
    "cuda-cpp": "CUDA C++",
    "fsharp": "F#",
    "git-commit": "Git Commit",
    "git-rebase": "Git Rebase",
    "jsonc": "JSON with Comments",
    "latex": "LaTeX",
    "objective-c": "Objective-C",
    "objective-cpp": "Objective-C++",
    "php": "PHP",
    "plaintext": "Plain Text",
    "powershell": "PowerShell",
    "scss": "SCSS",
    "sass": "SASS",
    "shaderlab": "ShaderLab",
    "sh": "Shell Script",
    "sql": "SQL",
    "text": "TeX",
    "vb": "Visual Basic",
    "vue-html": "Vue HTML",
    "xml": "XML",
    "xsl": "XSL",
    "yaml": "YAML",
    "toml": "TOML",
    "cabalconfig": "Cabal Config",
    "zsh": "ZSH",
    "nginx": "NGINX",
    "sshconfig": "SSH Config",
    "conf": "Config",
    "dockercompose": "Docker Compose",
    "mdx": "Markdown Extended"
  }[name] || name?.replace(/(^|[^a-z])\w/gim, (c) => c.toUpperCase())) || "Unknown";
};

/**
 * @typedef ActivityEntry
 * @property {number} duration
 * @property {string} language
 */

/**
 * @typedef Language
 * @property {number} hours
 * @property {number} minutes
 * @property {string} id
 * @property {string} name
 * @property {number} percent
 * @property {string} text
 */

/**
 * @typedef TestaustimeData
 * @property {Language[]} languages
 */

/**
 * @param {{username: string, api_domain: string, range: string}} props
 * @returns {Promise<Language[]>}
 */
const fetchTestaustimeStats = async ({ username, api_domain, range }) => {
  if (!username) throw new MissingParamError(["username"]);

  try {
    const { data } = /** @type {{ data: ActivityEntry[] }} */ (await axios.get(
      `https://${api_domain ? api_domain.replace(/\/$/gi, "") : "api.testaustime.fi"
      }/users/${username}/activity/data?min_duration=1&from=${Math.floor(Date.now() / 1000) - Number(range ?? "7") * 24 * 60 * 60}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TESTAUSTIME_API_KEY}`,
        },
      },
    ));

    const languages = {};
    let total_seconds = 0;

    for (const activity of data) {
      const norm = normalizeLanguageName(activity.language?.toLowerCase());
      total_seconds += activity.duration;
      if (!languages[norm]) {
        languages[norm] = {
          id: norm,
          name: prettifyLanguageName(norm),
          seconds: activity.duration,
        };
      } else {
        languages[norm].seconds += activity.duration;
      }
    }

    return Object.values(languages).map(({ id, name, seconds }) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return {
        id,
        name,
        hours,
        minutes,
        percent: seconds / total_seconds * 100,
        text: `${hours ? `${hours}hr${hours > 1 ? "s" : ""} ` : ""}${minutes}min${minutes > 1 ? "s" : ""}`,
      }
    }).sort((a, b) => b.percent - a.percent);
  } catch (err) {
    if (err.response && (err.response.status < 200 || err.response.status > 299)) {
      throw new Error(
        "Couldn't access Testaustime data. Check that you've allowed us to access your data.",
      );
    }
    throw err;
  }
};

module.exports = {
  fetchTestaustimeStats,
};
