export default async function fetchGithubApi(url) {
    const response = await fetch(url, {
        headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
    })
    return response.json()
}
