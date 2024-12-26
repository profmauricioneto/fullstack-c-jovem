// função que retorna uma Promise para carregar os dados do site do GitHub
async function getData() {
    const response = await fetch('https://api.github.com/events');
    const data = await response.json();
    return data;
}

// chamada da função getData
getData()
    .then(data => {
        console.log(typeof data);
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });