export const loadData = (type) => {
    return fetch(`https://sv-reqres.now.sh/api/${type}?per_page=20`)
    .then(response => {
        return response.json();
    });
} 