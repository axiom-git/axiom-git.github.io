const socialLinks = {
    ["discord"]: "https://lumin-org.github.io/to/discord",
    ["bluesky"]: "https://lumin-org.github.io/to/bluesky",
    ["github"]: "https://lumin-org.github.io/to/github",
    ["youtube"]: "https://lumin-org.github.io/to/youtube",
};

function copySocialToClipboard(socialName) {
    const socialLinkToCopy = socialLinks[socialName];
    navigator.clipboard.writeText(socialLinkToCopy)
        .then(() => {
            alert("Copied to clipboard");
        })
        .catch(err => {
            console.error("Did not copy to clipboard:", err);
        });
}
