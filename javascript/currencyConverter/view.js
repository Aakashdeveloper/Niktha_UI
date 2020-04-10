var url = "https://api.exchangeratesapi.io/latest?base="

async function convert(){
    var base = document.getElementById('base').value;
    var convert = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    let response = await fetch(`${url}${base}`, {method:'GET'})
    let data = await response.json()
    final = data.rates
    final = `convert value of ${base} ${amount} is ${final[convert]*parseFloat(amount)} ${convert}`;
    document.getElementById('result').innerText= final
}

/*function convert(){
    var base = document.getElementById('base').value;
    var convert = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;

    console.log(`${url}${base}`)
    fetch(`${url}${base}`, {method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates
        final = `convert value of ${base} ${amount} is ${final[convert]*parseFloat(amount)} ${convert}`;

        document.getElementById('result').innerText= final;

    })
}
*/
