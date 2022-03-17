      "use strict" // zmienna musi mieć zawsze poprawna deklarację, nie można usunąć prototypow i plikow 
      // const funk = function() {

          // }
          // function funk (){}
          const adder = () =>{
            // bardziej czytelne, mniej czasu na szukanie niż w query selectorze
            const numberA =parseInt(document.getElementById("numb-a").value);
            let numberB = document.querySelector("#numb-b").value;
            //document.querySelector("#number-b").addEventListener("click", ()=>{});
            // === sprawdza najpierw typ potem wartosc, == sprawdza tylko wartosc 
            if(numberB === ""){
                console.warn("empty");
            // zapytanie do jquery
                $("#modal").toggle();
                $("#modal").off("click").click(()=>{
                    $("#modal").toggle("slow");
                });
                return;
            }
            numberB = Number(numberB);
            if(isNaN(numberA) || isNaN(numberB))
            {
                console.error("Jedna z nich nie jest liczba");
                return;
            }
            //debugger; - do debugu w przeglądarce
            console.log(`${numberA} + ${numberB} = ${numberA + numberB}`);
            const newP= document.createElement("p"); // <p> </p>
            newP.innerHTML = `${numberA} + ${numberB} = ${numberA + numberB}`;
            
            const operationsList = document.getElementById("operations-list");
            operationsList.append(newP);
        }