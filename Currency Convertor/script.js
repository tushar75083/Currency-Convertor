

// https://v6.exchangerate-api.com/v6/60fe5d12da943d8fcd1d0ff3/latest/USD

    let selects = document.querySelectorAll(".content select");
    //console.log(selects)

    for(let select of selects){
        for(currCode in countryList){
            let newOpt = document.createElement("option");
            newOpt.innerText = currCode;
            newOpt.value = currCode;
            if(select.name === "from" && currCode ==="USD"){
                newOpt.selected = "selected";
            }
            else if(select.name === "to" && currCode ==="INR"){
                newOpt.selected = "selected";
            }
    
            select.append(newOpt);
        }

        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        })
    }

    const updateFlag = (element) => {
        //console.log(element)
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; 
       
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;

    }


function convert() {

    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    let amount =parseInt(document.querySelector("#amount").value);

    // console.log(from)
    // console.log(to)
    // console.log(amount)

    fetch(`https://v6.exchangerate-api.com/v6/60fe5d12da943d8fcd1d0ff3/latest/${from}`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        let conv_rates = data.conversion_rates;
        //console.log(conv_rates);
        let rate = conv_rates[to];
        //console.log(rate);
        let result = (amount * rate).toFixed(2);

        document.querySelector("#result").innerHTML = `
                                                  Conversion of 
                                                 <span style=font-size:27px;"> ${amount} </span>
                                                 <span style=font-size:27px;"> ${from}  </span>
                                                  is 
                                                  <span style=font-size:27px;"> ${result}  </span>
                                                  <span style=font-size:27px;"> ${to} </span>
                                                  `;

    })
}


    

