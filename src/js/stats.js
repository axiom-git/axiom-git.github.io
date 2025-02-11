import { animateCounter } from "./count.js";
import { fetchAsync } from "./utility/fetch.js";

const org = "lumin-org";
const server = "cwwcZtqJAt";

document.addEventListener("DOMContentLoaded", async () => {
    let starsElement = document.getElementById("starsCounter");
    let projectsElement = document.getElementById("projectsCounter");
    let membersElement = document.getElementById("membersCounter");
    if (starsElement) {
        try {
            // GitHub stars
            const starsResponse = await fetchAsync(`https://api.github.com/orgs/${org}/repos`);
            const starsAmount = starsResponse.reduce((total, repo) => total + repo.stargazers_count, 0);

            animateCounter(starsAmount, 5000, value => {
                starsElement.textContent = value;
            });
        } catch (error) {
            console.error("Error fetching stars:", error);
        }
    }
    if (projectsElement) {
        // Project count
        const projectsAmount = 9
        animateCounter(projectsAmount, 5000, value => {
            projectsElement.textContent = value;
        })
    }
    if (membersElement) {
        try {
            // Discord members
            const membersResponse = await fetchAsync(`https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`);
            const membersAmount = membersResponse.approximate_member_count;

            animateCounter(membersAmount, 5000, value => {
                membersElement.textContent = value;
            });
        } catch(error) {
            console.log("Error fetching members:", error);
        }
    }
});
