// Chiedere all'utente nome_cognome_colore preferito


// Creare var per registrare nome utente
var nomeUtente

// Creare var per registrare cognome utente
var cognomeUtente

// Creare var per registrare colore preferito utente
var colorePreferitoUtente

// Chiedere nome utente
nomeUtente = prompt("Inserisci il tuo nome ")

// Chiedere cognome utente
cognomeUtente = prompt(" Inserisci il tuo cognome ")

// Chiedere colore preferito utente
colorePreferitoUtente = prompt("Inserisci il tuo colore preferito")

// Output con nome_cognome_colorepreferito Utente
document.getElementById('my_id').innerHTML="La password è: " + nomeUtente + cognomeUtente + colorePreferitoUtente;
