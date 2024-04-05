

  // Get button
  const topBtn = document.getElementById("topbtn");
  
  // Scroll to top
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Get select elements
  const select_element1 = document.getElementById("select-element1");
  const select_element2 = document.getElementById("select-element2");
  const select_element3 = document.getElementById("select-element3");
  const select_element4 = document.getElementById("select-element4");
  const select_element5 = document.getElementById("select-element5");
  const select_element6 = document.getElementById("select-element6");
  const select_element7 = document.getElementById("select-element7");
  const select_element8 = document.getElementById("select-element8");
  const select_element9 = document.getElementById("select-element9");
  const select_element10 = document.getElementById("select-element10");

// Define emission values for each option
const emissions = {
    transportation: {
      "Car": 3.3863,
      "EV": 0,
      "Public_Bus": 1.25125,
      "Bike": 0,
      "Walking": 0,
      //q2
      "multiple_times": 1.008,
      "once": 0.336,
      "rarely": 0,
    },
    housing: {
      "town": 6.08,
      "single": 39.55,
      "apartment": 10.33,
      "mobile": 1.14,
      //q
      "Gas": 3.265,
      "Elec": 3.311,
      //q
      "None": 0,
      "One": 0.1325,
      "Two": 0.265,
      "Three": 0.3975,
      "All": 0.53,
    },
    diet: {
      "vegan": 1.5,
      "vegetarian": 1.7,
      "omnivore": 2.5,
      "carnivore": 3.3,
      "nobeef": 1.9,
      //q
      "several_times": 0.52811735,
      "few_times": 0.41788635,
      "rarely_never": 0.110231,
    },
      habits: {
      "always0": 3.63,
      "sometimes0": 1.8143694,
      "rarely0": 0.9071847,
        //q
      "always2": -0.15,
      "sometimes2": -0.10,
      "rarely2": -0.05,
      "idk_dude": 0,
        //q
      "always3": 0.0346,
      "sometimes3": 0.0174,
      "rarely3": 0.0110231,
      "idk4": 0.0087,
    }
  };

  // Function to calculate total emissions for a section
function calculateSectionEmissions(sectionName) {
    let sectionTotal = 0;
    let sectionArray = emissions[sectionName];

    for(var key in sectionArray){
        // if the array the value corresponds to the current selection {
            if(key == select_element1.value || key == select_element2.value || key == select_element3.value || key == select_element4.value || key == select_element5.value || key == select_element6.value || key == select_element7.value || key == select_element8.value || key == select_element9.value || key == select_element10.value){
                sectionTotal += sectionArray[key];
            }
        }
    
    return sectionTotal;
}

    const numInput = document.getElementById("numInput");

    // Get textbox for summary
    const summaryText = document.getElementById("box");

    // Get the div so we can make the buttons
    const summaryBtns = document.getElementById("nav-btns");

document.getElementById("goof").addEventListener("click", function CalcEmissions (event) {
        event.preventDefault();

        if(select_element1.value == "" || select_element2.value == "" || select_element3.value == "" || select_element4.value == "" || select_element5.value == "" || select_element6.value == "" || numInput.value.toString() == "" || select_element8.value == "" || select_element9.value == "" || select_element10.value == "") {
            window.alert("Please fill out the form =)");
        }

        else{

        // Calculate total emissions for each section
        const transportationTotal = calculateSectionEmissions("transportation");
        const housingTotal = calculateSectionEmissions("housing");
        const dietTotal = calculateSectionEmissions("diet");
        const habitsTotal = calculateSectionEmissions("habits");

         // Calculate total emissions
        let totalEmissions = transportationTotal + housingTotal + dietTotal + habitsTotal;

        // Display result
        let resultElement = document.getElementById("result");
        resultElement.innerText = `Votre empreinte carbone totale est estimée à ${totalEmissions} tonnes of de C02 par an. \nVotre empreinte carbone était estimée à ${numInput.value.toString()} tonnes. \nJetez un coup d'œil à leur comparaison !`;

          // Create buttons
          summaryBtns.innerHTML = `<button id="btn1" onclick="summaryManager(1)"></button>
          <button id="btn2" onclick="summaryManager(2)"></button>
          <button id="btn3" onclick="summaryManager(3)"></button>
          <button id="btn4" onclick="summaryManager(4)"></button>`;

          // Summary
          summaryManager(1);
        }
    });

    function summaryManager(btnNum){
        if (btnNum == 1){

            if(calculateSectionEmissions("transportation") >= 2){
                summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
                <p id="sect-p">Dans cette section du formulaire, vos réponses présentent des niveaux élevés d'émissions de carbone. Pour réduire les émissions de carbone dans les transports, essayez de marcher ou de faire du vélo pour les courtes distances et d'utiliser un véhicule électrique ou les transports publics pour les trajets plus longs. Essayez également de voyager moins en avion pour les vacances et essayez d'autres méthodes telles que les croisières ou les roadtrips.
                </p>`;
            }
            else if(calculateSectionEmissions("transportation") < 2){
                summaryText.innerHTML = `<h3 id="sect-h">Transportation:</h3>
                <p id="sect-p">Dans cette section du formulaire, vos réponses présentent les niveaux optimaux d'émissions de carbone liés à vos habitudes de transport. Continuez à utiliser des méthodes de transport plus renouvelables telles que : les transports publics, les véhicules électriques, la marche et le vélo. =)</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#57CC99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#80ED99';
            document.getElementById("btn4").style.backgroundColor = '#80ED99';
        }
        
        if (btnNum == 2){

            if(calculateSectionEmissions("housing") >= 43){
                summaryText.innerHTML = `<h3 id="sect-h">Logement:</h3>
                <p id="sect-p">Votre logement semble présenter des taux élevés d'émissions de carbone par an. Afin de réduire vos émissions, essayez de passer au gaz naturel pour chauffer votre maison. Essayez également d'utiliser moins d'appareils tels que les lave-vaisselle, les lave-linge et les sèche-linge pour le nettoyage. N'oubliez pas d'éteindre votre chauffage lorsque vous quittez la maison pour voyager et, lorsque vous achetez de nouveaux appareils électroménagers, optez pour des appareils respectueux de l'environnement ou plus efficaces.
</p>`;
            }
            else if (calculateSectionEmissions("housing") < 43){
                summaryText.innerHTML = `<h3 id="sect-h">Logement:</h3>
                <p id="sect-p">Votre situation de logement semble présenter des taux de rejet de carbone assez faibles. Veillez à conserver l'énergie en utilisant moins d'appareils et des sources de chauffage plus écologiques. Lors de l'achat de nouveaux appareils, privilégiez les appareils respectueux de l'environnement ou plus efficaces. =)
</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#80ED99';
            document.getElementById("btn2").style.backgroundColor = '#57CC99';
            document.getElementById("btn3").style.backgroundColor = '#80ED99';
            document.getElementById("btn4").style.backgroundColor = '#80ED99';
        }

        if(btnNum == 3) {

            if(calculateSectionEmissions("diet") >= 3.7){
                summaryText.innerHTML = `<h3 id="sect-h"> Régime alimentaire:</h3>
                <p id="sect-p">En fonction de votre apport, vos habitudes alimentaires produisent une augmentation de la décharge de carbone. Voici quelques méthodes pour réduire l'empreinte carbone de votre alimentation : manger moins de viande/produits d'origine animale (principalement du bœuf) et consommer davantage de végétaux (fruits et légumes) provenant de régions locales. Certaines sources affirment qu'une seule journée végétalienne ou végétarienne par semaine permet d'économiser 100 à 150 kg de CO2 par an !
</p>`;
            }
            else if(calculateSectionEmissions("diet") < 3.7){
                summaryText.innerHTML = `<h3 id="sect-h"> Régime alimentaire:</h3>
                <p id="sect-p">En fonction de vos données, vos habitudes alimentaires se sont traduites par des rejets efficaces de carbone. Continuez à réduire votre consommation de produits animaux et à manger davantage de fruits et légumes locaux. =)
</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#80ED99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#57CC99';
            document.getElementById("btn4").style.backgroundColor = '#80ED99';
        }

        else if(btnNum == 4){

            if(calculateSectionEmissions("habits") >= 2.5){
            summaryText.innerHTML = `<h3 id="sect-h"> Les habitudes:</h3>
            <p id="sect-p">Vos habitudes quotidiennes démontrent des niveaux sous-optimaux de production de carbone dans votre vie de tous les jours. Pour réduire la production de carbone liée à vos habitudes quotidiennes, veillez à économiser l'eau en prenant des douches plus courtes et en fermant le lavabo lorsque vous vous brossez les dents. Veillez également à recycler et à composter autant que possible et à économiser vos ampoules (fermez les lumières lorsque vous ne les utilisez pas).
</p>`;
            }
            else if(calculateSectionEmissions("habits") < 2.5){
            summaryText.innerHTML = `<h3 id="sect-h"> Les habitudes:</h3>
            <p id="sect-p">Vos habitudes quotidiennes démontrent des niveaux optimaux de production de carbone dans votre vie de tous les jours. Veillez à conserver des habitudes efficaces telles que la conservation de l'eau, la conservation des ampoules électriques, le compostage et le recyclage. =)
</p>`;
            }

            document.getElementById("btn1").style.backgroundColor = '#80ED99';
            document.getElementById("btn2").style.backgroundColor = '#80ED99';
            document.getElementById("btn3").style.backgroundColor = '#80ED99';
            document.getElementById("btn4").style.backgroundColor = '#57CC99';
        }
    }
