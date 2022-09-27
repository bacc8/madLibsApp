"use strict";
window.onload = () => {
	// Domande totali
	let questionTotal = 4;

	// Contatore di domande (a che domanda siamo)
	let questionCounter = 0;
	
	// Domande
	let questionArray = [
	`Dimmi una nazionalità (italiano, spagnolo, inglese...)`,
	`Dimmi una città (Palermo, Londra, Parigi...)`,
	`Dimmi un numero da 50 a 100`,
	`Dimmi quanti anni hai?`,
	];
	
	// Storiella originale
	let originalStory = `
	Un turista americano giunge a Roma; appena uscito dall’aeroporto, prende un taxi indicando al conducente l’hotel al quale era diretto.
	Durante il tragitto, passano vicino a San Pietro e il turista chiede: – In quanto tempo avete costruito questa grande Basilica?
	– Beh considerando la sua maestosità e tutto il resto, più di cento anni – risponde il tassista.
	Il turista americano si mette a ridere e aggiunge:
	– Ahahah, in America l’avremmo costruita in 50 anni!
	Dopo un po’ passano vicino al Pantheon e l’americano chiede di nuovo:
	– E questo splendido edificio in quanto tempo è stato costruito?
	– Mah saranno stati circa 10 anni, se non ricordo male!
	Di nuovo l’americano si fa una bella risata e dice:
	– Noi in America lo avremmo costruito in 5 anni!
	Il tassista ormai stufo cominciava a innervosirsi, e dopo un po’ passano vicino al Colosseo.
	L’americano: – E questo? In quanto tempo è stato costruito?
	Il tassista infastidito: – Mah guardi… sò passato ieri e non c’era!`;
	
	// imput da utente
	let userInputs = [];
	
	/*
	console.log(`
	Un turista ${userInputs[0]} giunge a ${userInputs[1]}; appena uscito dall’aeroporto, prende un taxi indicando al conducente l’hotel al quale era diretto.
	Durante il tragitto, passano vicino a San Pietro e il turista chiede: – In quanto tempo avete costruito questa statua?
	– Beh considerando la sua maestosità e tutto il resto, più di ${userInputs[2]} anni – risponde il tassista.
	Il turista ${userInputs[0]} si mette a ridere e aggiunge:
	– Ahahah, in America l’avremmo costruita in ${userInputs[2]/2} anni!
	Dopo un po’ passano vicino ad un monumento e l’${userInputs[0]} chiede di nuovo:
	– E questo splendido edificio in quanto tempo è stato costruito?
	– Mah saranno stati circa ${userInputs[3]} anni, se non ricordo male!
	Di nuovo l’${userInputs[0]} si fa una bella risata e dice:
	– Noi in America lo avremmo costruito in ${userInputs[3]/2} anni!
	Il tassista ormai stufo cominciava a innervosirsi, e dopo un po’ passano vicino ad una grande Basilica.
	L’${userInputs[0]}: – E questa? In quanto tempo è stata costruita?
	Il tassista infastidito: – Mah guardi… sò passato ieri e non c’era!`);
	*/
	
	for (let i = questionTotal-1; i >= 0; i--) {
		//console.log(i);
		console.log(questionArray[questionCounter] + ` altre ${questionTotal-1} domande.`);
		userInputs.push(prompt(questionArray[questionCounter] + ` altre ${questionTotal-1} domande.`));
		//console.log(userInputs);
		questionCounter++;
		questionTotal--;
	}
}