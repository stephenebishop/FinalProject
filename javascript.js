document.getElementById('RunData').addEventListener('click', getthedata)

function getRun() {
    fetch('sample.txt')
    .then(function(response){
        return(response.text());
    })
    .then(function(data){
        console.log(data);
        document.getElementById('runData').innerHTML = data;
    })
    .catch(function(error){
        cosole.log(error);
    })
}

function getJSON() {
    fetch('RunData.json')
    .then(function(response){
        return(response.json());
    })
    .then(function(data){
        console.log(data);
        let runs = '<h2>Runs</h2>';
        data.map(function(run){
            runs += `
            <ul>
                <li>${run.City}</li>
                <li>${run.Distance}</li>
                <li>${run.Name}</li>
            </ul>
            `
        });
        document.getElementById('runData').innerHTML = runs;
    })
}