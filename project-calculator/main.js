        const POLE_1 = document.getElementById('pole_1');
        const POLE_2 = document.getElementById('pole_2');
        const POLE_3 = document.getElementById('pole_3');
        const POLE_4 = document.getElementById('pole_4');
         
        function Dodawanie(a, b){
            return a + b;
        }
        function Odejmowanie (a, b){
            return a - b;
        }
        function Mnozenie (a, b){
            return a * b;
        }
        function Dzielenie (a , b){
            if (b == 0)  alert ('Nie można dzielić przez 0!'); 
            else return a / b ;
        }
        function Modulo (a, b){
            return a % b;
        }
        function Wynik(){
            let w1 = Number(POLE_1.value);
            let w2 = Number(POLE_3.value);
            let cos = String(POLE_2.value);
         
            if (cos == "") POLE_4.value = "Brak danych";
            else if (cos == "+") POLE_4.value = Dodawanie(w1, w2);
            else if (cos == "-") POLE_4.value = Odejmowanie(w1, w2);
            else if (cos == "*") POLE_4.value = Mnozenie(w1, w2);
            else if (cos == "/") POLE_4.value = Dzielenie(w1, w2);
            else if(cos == "%") POLE_4.value = Modulo(w1, w2);
        }
         
         