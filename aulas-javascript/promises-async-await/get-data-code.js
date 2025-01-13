// função que retorna uma Promise para carregar os dados do site do GitHub
async function getData() {
    let response;
    try {
        response = await fetch('https://api.github.com/events');
    } catch (err) {
        console.log(err);
    }
    const data = await response.json();
    return data;
}

// chamada da função getData
getData()
    .then((data) => {
        console.log(typeof data);
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

