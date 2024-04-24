const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      "assets": ["package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github',
    ["@semantic-release/exec", {
      "verifyReleaseCmd": "echo ${nextRelease.version} > release.txt",
      "generateNotesCmd": "git log -1 --pretty=%B >> release.txt"
    }]    
  ]
};

module.exports = config;
