/* ===== CONFIG: edit this part ===== */
const CONFIG = {
  business: 'Zanzibar Drive',          // your business name
  whatsapp: '255700000000',            // international format, no + or spaces
  address: 'Stone Town, Zanzibar',
  currency: '$',
  // image: '' uses a placeholder. To use a real photo: image: 'images/vitz.jpg'
  fleet: [
    { id: 'nissan-e-class', name: 'Nissan E-Class', seats: 4, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 28.89, color: '#0B6E99', image: 'images/Nissan E-Class.jpeg' },
    { id: 'rav4-2018', name: 'Toyota RAV4', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 26.88, color: '#2EC4D6', image: 'images/Toyota RAV4.jpeg' },
    { id: 'rav4-2016', name: 'Toyota RAV4', seats: 2, trans: 'Automatic', year: 2016, fuel: 'Petrol', price: 23.70, color: '#06364D', image: 'images/Toyota RAV4 2doors.jpeg' },
    { id: 'suzuki-escudo-2016', name: 'Suzuki Escudo', seats: 5, trans: 'Automatic', year: 2016, fuel: 'Petrol', price: 28.60, color: '#C9A36A', image: 'images/Toyota Escudo.jpg' },
    { id: 'land-cruiser-2020', name: 'Toyota Land Cruiser', seats: 5, trans: 'Automatic', year: 2020, fuel: 'Petrol', price: 150.00, color: '#0B6E99', image: 'images/Toyota Land Cruiser.png' },
    { id: 'suzuki-escudo-2019', name: 'Suzuki Escudo', seats: 3, trans: 'Automatic', year: 2019, fuel: 'Petrol', price: 26.50, color: '#2EC4D6', image: 'images/Suzuki Escudo 2doors.jpeg' },
    { id: 'land-cruiser-2019', name: 'Toyota Land Cruiser', seats: 5, trans: 'Automatic', year: 2019, fuel: 'Diesel', price: 102.89, color: '#06364D', image: 'images/Toyota Land Cruiser.jpeg' },
    { id: 'toyota-c-class', name: 'Toyota C-Class', seats: 5, trans: 'Automatic', year: 2010, fuel: 'Diesel', price: 90.00, color: '#C9A36A', image: 'images/Toyota C-Class.jpeg' },
    { id: 'toyota-g-class', name: 'Toyota G-Class', seats: 5, trans: 'Automatic', year: 2015, fuel: 'Petrol', price: 35.00, color: '#0B6E99', image: 'images/Toyota G-Class.jpeg' },
    { id: 'land-cruiser-2013', name: 'Toyota Land Cruiser', seats: 5, trans: 'Automatic', year: 2013, fuel: 'Petrol', price: 92.55, color: '#2EC4D6', image: 'images/Toyota Land Cruiser.jpeg' },
    { id: 'toyota-escudo-2013', name: 'Toyota Escudo', seats: 5, trans: 'Automatic', year: 2013, fuel: 'Petrol', price: 25.89, color: '#06364D', image: 'images/Toyota Escudo.jpg' },
    { id: 'toyota-ist', name: 'Toyota IST', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 20.00, color: '#C9A36A', image: 'images/Toyota Ist-card.jpg' },
    { id: 'toyota-alphad', name: 'Toyota Alphad', seats: 8, trans: 'Automatic', year: 2013, fuel: 'Petrol', price: 35.00, color: '#0B6E99', image: 'images/Toyota Alphard.jpeg' }
  ]
};

/* ===== Translations ===== */
const T = {
  en: {
    nav_fleet: 'Cars', nav_book: 'Book', nav_terms: 'Terms', nav_faq: 'FAQ', nav_contact: 'Contact', wa: 'WhatsApp us',
    h1: 'Drive Zanzibar your way', hero_p: 'Clean, well-kept cars delivered to the airport or your hotel. Book in a minute on WhatsApp.',
    cta_book: 'Book now', cta_fleet: 'See the cars', fleet_h: 'Choose your car', fleet_p: 'Prices are per day. Fuel is not included.',
    per_day: '/ day', seats: 'seats', book_car: 'Book this car',
    book_h: 'Request your booking', book_p: 'Fill in the form and your booking message opens in WhatsApp, ready to send.',
    f_name: 'Full name', f_phone: 'Phone number', f_car: 'Car', f_choose: 'Choose a car', f_pick: 'Pickup date', f_ret: 'Return date',
    f_loc: 'Pickup place', l_air: 'Zanzibar airport', l_hotel: 'Hotel', l_other: 'Other address', f_place: 'Hotel name or address',
    f_notes: 'Notes (optional)', est: 'Estimated total', est_none: 'Choose a car and dates', days: 'days', send: 'Send on WhatsApp',
    note: 'This is a booking request. We will confirm availability and payment details with you on WhatsApp.',
    ok: 'Opening WhatsApp… press Send to finish.',
    e_req: 'Please fill in all required fields.', e_date: 'Return date must be after pickup date.',
    e_past: 'Pickup date cannot be in the past.', e_place: 'Please add your hotel name or address.',
    why_h: 'Why book with us', w1t: 'Clear prices', w1p: 'The price you see is the price per day. No hidden fees.',
    w2t: 'Airport and hotel delivery', w2p: 'We bring the car to you and collect it when you leave.',
    w3t: 'Support any time', w3p: 'Message us on WhatsApp day or night.', w4t: 'Well-kept cars', w4p: 'Cleaned and checked before every rental.',
    terms_h: 'Rental terms', tm1: 'A deposit is arranged when we confirm your booking.', tm2: 'Fuel: return the car with the same fuel level.',
    tm3: 'Mileage: [unlimited / X km per day].', tm4: 'Drivers need a valid licence. Visitors need an International Driving Permit.',
    rev_h: 'What guests say', r1: '“The car was waiting at the airport. Easy and friendly.” Anna, Germany',
    r2: '“Great price and clear terms. We explored the whole island.” James, UK', r3: '“Booking on WhatsApp took two minutes.” Fatma, Dar es Salaam',
    faq_h: 'Questions', q1: 'Can you deliver to my hotel?', a1: 'Yes. Add your hotel in the form and we will meet you there.',
    q2: 'How do I pay?', a2: 'Payment is arranged with us on WhatsApp after your booking is confirmed.',
    q3: 'Can I get a driver?', a3: 'Yes. Tell us in the notes and we will confirm the price.',
    contact_h: 'Contact us', contact_p: 'Message us on WhatsApp or visit us in Zanzibar.', rights: 'All rights reserved.'
  },
  sw: {
    nav_fleet: 'Magari', nav_book: 'Weka nafasi', nav_terms: 'Masharti', nav_faq: 'Maswali', nav_contact: 'Mawasiliano', wa: 'Tuandikie WhatsApp',
    h1: 'Tembea Zanzibar kwa uhuru wako', hero_p: 'Magari safi yaliyotunzwa vizuri, tunayaleta uwanja wa ndege au hotelini kwako. Weka nafasi kwa dakika moja kupitia WhatsApp.',
    cta_book: 'Weka nafasi', cta_fleet: 'Tazama magari', fleet_h: 'Chagua gari lako', fleet_p: 'Bei ni kwa siku. Mafuta hayajajumuishwa.',
    per_day: '/ siku', seats: 'viti', book_car: 'Chagua gari hili',
    book_h: 'Omba kuweka nafasi', book_p: 'Jaza fomu na ujumbe wako utafunguka WhatsApp ukiwa tayari kutumwa.',
    f_name: 'Jina kamili', f_phone: 'Namba ya simu', f_car: 'Gari', f_choose: 'Chagua gari', f_pick: 'Tarehe ya kuchukua', f_ret: 'Tarehe ya kurudisha',
    f_loc: 'Mahali pa kuchukua', l_air: 'Uwanja wa ndege wa Zanzibar', l_hotel: 'Hotelini', l_other: 'Anwani nyingine', f_place: 'Jina la hotel au anwani',
    f_notes: 'Maelezo (hiari)', est: 'Jumla ya makadirio', est_none: 'Chagua gari na tarehe', days: 'siku', send: 'Tuma kupitia WhatsApp',
    note: 'Hili ni ombi la kuweka nafasi. Tutathibitisha upatikanaji na maelezo ya malipo nawe kupitia WhatsApp.',
    ok: 'Tunafungua WhatsApp… bonyeza Send kukamilisha.',
    e_req: 'Tafadhali jaza sehemu zote muhimu.', e_date: 'Tarehe ya kurudisha lazima iwe baada ya ya kuchukua.',
    e_past: 'Tarehe ya kuchukua haiwezi kuwa ya zamani.', e_place: 'Tafadhali weka jina la hotel au anwani.',
    why_h: 'Kwa nini utuchague', w1t: 'Bei wazi', w1p: 'Bei unayoiona ni bei ya siku. Hakuna gharama zilizofichwa.',
    w2t: 'Tunaleta uwanja wa ndege au hotelini', w2p: 'Tunakuletea gari na kulichukua unapoondoka.',
    w3t: 'Msaada wakati wowote', w3p: 'Tuandikie WhatsApp mchana au usiku.', w4t: 'Magari yaliyotunzwa', w4p: 'Husafishwa na kukaguliwa kabla ya kila kukodisha.',
    terms_h: 'Masharti ya kukodisha', tm1: 'Amana hupangwa tunapothibitisha nafasi yako.', tm2: 'Mafuta: rudisha gari na kiwango cha mafuta kilekile.',
    tm3: 'Umbali: [bila kikomo / X km kwa siku].', tm4: 'Dereva lazima awe na leseni halali. Wageni wanahitaji International Driving Permit.',
    rev_h: 'Wateja wanasemaje', r1: '“Gari lilikuwa linanisubiri uwanja wa ndege. Rahisi na ukarimu mkubwa.” Anna, Ujerumani',
    r2: '“Bei nzuri na masharti wazi. Tulizunguka kisiwa kizima.” James, Uingereza', r3: '“Kuweka nafasi kwa WhatsApp kulichukua dakika mbili.” Fatma, Dar es Salaam',
    faq_h: 'Maswali', q1: 'Mnaweza kuleta gari hotelini kwangu?', a1: 'Ndiyo. Weka hotel yako kwenye fomu nasi tutakutana nawe hapo.',
    q2: 'Nalipaje?', a2: 'Malipo hupangwa nasi kupitia WhatsApp baada ya nafasi yako kuthibitishwa.',
    q3: 'Naweza kupata dereva?', a3: 'Ndiyo. Tuandikie kwenye maelezo nasi tutathibitisha bei.',
    contact_h: 'Wasiliana nasi', contact_p: 'Tuandikie WhatsApp au tutembelee Zanzibar.', rights: 'Haki zote zimehifadhiwa.'
  },
  it: {
    nav_fleet: "Auto", nav_book: "Prenota", nav_terms: "Condizioni", nav_faq: "FAQ", nav_contact: "Contatti", wa: "Scrivici su WhatsApp",
    h1: "Scopri Zanzibar a modo tuo", hero_p: "Auto pulite e curate, consegnate in aeroporto o al tuo hotel. Prenota in un minuto su WhatsApp.",
    cta_book: "Prenota ora", cta_fleet: "Vedi le auto", fleet_h: "Scegli la tua auto", fleet_p: "I prezzi sono al giorno. Carburante escluso.",
    per_day: "/ giorno", seats: "posti", book_car: "Prenota questa auto",
    book_h: "Richiedi la tua prenotazione", book_p: "Compila il modulo: il messaggio si apre su WhatsApp, pronto da inviare.",
    f_name: "Nome e cognome", f_phone: "Numero di telefono", f_car: "Auto", f_choose: "Scegli un'auto", f_pick: "Data di ritiro", f_ret: "Data di riconsegna",
    f_loc: "Luogo di ritiro", l_air: "Aeroporto di Zanzibar", l_hotel: "Hotel", l_other: "Altro indirizzo", f_place: "Nome dell'hotel o indirizzo",
    f_notes: "Note (facoltativo)", est: "Totale stimato", est_none: "Scegli auto e date", days: "giorni", send: "Invia su WhatsApp",
    note: "Questa è una richiesta di prenotazione. Confermeremo disponibilità e dettagli di pagamento con te su WhatsApp.",
    ok: "Apertura di WhatsApp… premi Invia per completare.",
    e_req: "Compila tutti i campi obbligatori.", e_date: "La data di riconsegna deve essere successiva al ritiro.",
    e_past: "La data di ritiro non può essere nel passato.", e_place: "Aggiungi il nome dell'hotel o l'indirizzo.",
    why_h: "Perché prenotare con noi", w1t: "Prezzi chiari", w1p: "Il prezzo che vedi è il prezzo al giorno. Nessun costo nascosto.",
    w2t: "Consegna in aeroporto e hotel", w2p: "Ti portiamo l'auto e la ritiriamo alla partenza.",
    w3t: "Assistenza sempre", w3p: "Scrivici su WhatsApp di giorno e di notte.", w4t: "Auto ben curate", w4p: "Pulite e controllate prima di ogni noleggio.",
    terms_h: "Condizioni di noleggio", tm1: "Un deposito viene concordato alla conferma della prenotazione.", tm2: "Carburante: riconsegna l'auto con lo stesso livello.",
    tm3: "Chilometraggio: [illimitato / X km al giorno].", tm4: "Serve una patente valida. I visitatori devono avere la patente internazionale.",
    rev_h: "Cosa dicono i clienti", r1: "“L'auto ci aspettava in aeroporto. Facile e gentilissimi.” Anna, Germania",
    r2: "“Ottimo prezzo e condizioni chiare. Abbiamo girato tutta l'isola.” James, Regno Unito", r3: "“Prenotare su WhatsApp ha richiesto due minuti.” Fatma, Dar es Salaam",
    faq_h: "Domande", q1: "Consegnate al mio hotel?", a1: "Sì. Inserisci il tuo hotel nel modulo e ci incontreremo lì.",
    q2: "Come si paga?", a2: "Il pagamento si concorda con noi su WhatsApp dopo la conferma della prenotazione.",
    q3: "Posso avere un autista?", a3: "Sì. Scrivilo nelle note e ti confermeremo il prezzo.",
    contact_h: "Contattaci", contact_p: "Scrivici su WhatsApp o vieni a trovarci a Zanzibar.", rights: "Tutti i diritti riservati."
  },
  de: {
    nav_fleet: "Autos", nav_book: "Buchen", nav_terms: "Bedingungen", nav_faq: "FAQ", nav_contact: "Kontakt", wa: "Schreib uns auf WhatsApp",
    h1: "Sansibar auf deine Art erleben", hero_p: "Saubere, gepflegte Autos, geliefert zum Flughafen oder Hotel. Buche in einer Minute über WhatsApp.",
    cta_book: "Jetzt buchen", cta_fleet: "Autos ansehen", fleet_h: "Wähle dein Auto", fleet_p: "Preise pro Tag. Kraftstoff nicht inbegriffen.",
    per_day: "/ Tag", seats: "Sitze", book_car: "Dieses Auto buchen",
    book_h: "Buchung anfragen", book_p: "Formular ausfüllen, und deine Nachricht öffnet sich in WhatsApp, fertig zum Senden.",
    f_name: "Vollständiger Name", f_phone: "Telefonnummer", f_car: "Auto", f_choose: "Auto wählen", f_pick: "Abholdatum", f_ret: "Rückgabedatum",
    f_loc: "Abholort", l_air: "Flughafen Sansibar", l_hotel: "Hotel", l_other: "Andere Adresse", f_place: "Hotelname oder Adresse",
    f_notes: "Anmerkungen (optional)", est: "Geschätzter Gesamtpreis", est_none: "Auto und Daten wählen", days: "Tage", send: "Über WhatsApp senden",
    note: "Dies ist eine Buchungsanfrage. Wir bestätigen Verfügbarkeit und Zahlungsdetails mit dir über WhatsApp.",
    ok: "WhatsApp wird geöffnet… tippe auf Senden, um abzuschließen.",
    e_req: "Bitte alle Pflichtfelder ausfüllen.", e_date: "Das Rückgabedatum muss nach dem Abholdatum liegen.",
    e_past: "Das Abholdatum darf nicht in der Vergangenheit liegen.", e_place: "Bitte Hotelname oder Adresse angeben.",
    why_h: "Warum bei uns buchen", w1t: "Klare Preise", w1p: "Der angezeigte Preis ist der Tagespreis. Keine versteckten Kosten.",
    w2t: "Lieferung zu Flughafen und Hotel", w2p: "Wir bringen das Auto zu dir und holen es bei deiner Abreise ab.",
    w3t: "Jederzeit Hilfe", w3p: "Schreib uns auf WhatsApp, Tag und Nacht.", w4t: "Gepflegte Autos", w4p: "Vor jeder Vermietung gereinigt und geprüft.",
    terms_h: "Mietbedingungen", tm1: "Eine Kaution wird bei der Bestätigung deiner Buchung vereinbart.", tm2: "Kraftstoff: Gib das Auto mit demselben Tankstand zurück.",
    tm3: "Kilometer: [unbegrenzt / X km pro Tag].", tm4: "Fahrer brauchen einen gültigen Führerschein. Besucher benötigen einen Internationalen Führerschein.",
    rev_h: "Das sagen unsere Gäste", r1: "“Das Auto wartete am Flughafen. Unkompliziert und freundlich.” Anna, Deutschland",
    r2: "“Toller Preis und klare Bedingungen. Wir haben die ganze Insel erkundet.” James, Großbritannien", r3: "“Die Buchung über WhatsApp dauerte zwei Minuten.” Fatma, Daressalam",
    faq_h: "Fragen", q1: "Liefert ihr zu meinem Hotel?", a1: "Ja. Gib dein Hotel im Formular an, und wir treffen uns dort.",
    q2: "Wie bezahle ich?", a2: "Die Zahlung wird nach der Bestätigung deiner Buchung mit uns über WhatsApp vereinbart.",
    q3: "Kann ich einen Fahrer bekommen?", a3: "Ja. Schreib es in die Anmerkungen, und wir bestätigen den Preis.",
    contact_h: "Kontakt", contact_p: "Schreib uns auf WhatsApp oder besuche uns auf Sansibar.", rights: "Alle Rechte vorbehalten."
  },
  fr: {
    nav_fleet: "Voitures", nav_book: "Réserver", nav_terms: "Conditions", nav_faq: "FAQ", nav_contact: "Contact", wa: "Écrivez-nous sur WhatsApp",
    h1: "Découvrez Zanzibar à votre façon", hero_p: "Des voitures propres et bien entretenues, livrées à l'aéroport ou à votre hôtel. Réservez en une minute sur WhatsApp.",
    cta_book: "Réserver", cta_fleet: "Voir les voitures", fleet_h: "Choisissez votre voiture", fleet_p: "Prix par jour. Carburant non inclus.",
    per_day: "/ jour", seats: "places", book_car: "Réserver cette voiture",
    book_h: "Demandez votre réservation", book_p: "Remplissez le formulaire : votre message s'ouvre dans WhatsApp, prêt à envoyer.",
    f_name: "Nom complet", f_phone: "Numéro de téléphone", f_car: "Voiture", f_choose: "Choisir une voiture", f_pick: "Date de prise en charge", f_ret: "Date de retour",
    f_loc: "Lieu de prise en charge", l_air: "Aéroport de Zanzibar", l_hotel: "Hôtel", l_other: "Autre adresse", f_place: "Nom de l'hôtel ou adresse",
    f_notes: "Remarques (facultatif)", est: "Total estimé", est_none: "Choisissez voiture et dates", days: "jours", send: "Envoyer sur WhatsApp",
    note: "Ceci est une demande de réservation. Nous confirmerons la disponibilité et les modalités de paiement avec vous sur WhatsApp.",
    ok: "Ouverture de WhatsApp… appuyez sur Envoyer pour terminer.",
    e_req: "Veuillez remplir tous les champs obligatoires.", e_date: "La date de retour doit être après la date de prise en charge.",
    e_past: "La date de prise en charge ne peut pas être dans le passé.", e_place: "Veuillez indiquer le nom de l'hôtel ou l'adresse.",
    why_h: "Pourquoi réserver chez nous", w1t: "Prix clairs", w1p: "Le prix affiché est le prix par jour. Aucun frais caché.",
    w2t: "Livraison aéroport et hôtel", w2p: "Nous amenons la voiture jusqu'à vous et la récupérons à votre départ.",
    w3t: "Assistance à toute heure", w3p: "Écrivez-nous sur WhatsApp, de jour comme de nuit.", w4t: "Voitures bien entretenues", w4p: "Nettoyées et contrôlées avant chaque location.",
    terms_h: "Conditions de location", tm1: "Une caution est convenue lors de la confirmation de votre réservation.", tm2: "Carburant : rendez la voiture avec le même niveau.",
    tm3: "Kilométrage : [illimité / X km par jour].", tm4: "Un permis valide est requis. Les visiteurs doivent avoir un permis de conduire international.",
    rev_h: "Ce que disent nos clients", r1: "“La voiture nous attendait à l'aéroport. Simple et très aimable.” Anna, Allemagne",
    r2: "“Super prix et conditions claires. Nous avons exploré toute l'île.” James, Royaume-Uni", r3: "“Réserver sur WhatsApp a pris deux minutes.” Fatma, Dar es Salaam",
    faq_h: "Questions", q1: "Livrez-vous à mon hôtel ?", a1: "Oui. Indiquez votre hôtel dans le formulaire et nous vous retrouverons là-bas.",
    q2: "Comment payer ?", a2: "Le paiement est convenu avec nous sur WhatsApp une fois votre réservation confirmée.",
    q3: "Puis-je avoir un chauffeur ?", a3: "Oui. Dites-le-nous dans les remarques et nous confirmerons le prix.",
    contact_h: "Contactez-nous", contact_p: "Écrivez-nous sur WhatsApp ou rendez-nous visite à Zanzibar.", rights: "Tous droits réservés."
  },
  es: {
    nav_fleet: "Coches", nav_book: "Reservar", nav_terms: "Condiciones", nav_faq: "Preguntas", nav_contact: "Contacto", wa: "Escríbenos por WhatsApp",
    h1: "Descubre Zanzíbar a tu manera", hero_p: "Coches limpios y bien cuidados, entregados en el aeropuerto o en tu hotel. Reserva en un minuto por WhatsApp.",
    cta_book: "Reservar ahora", cta_fleet: "Ver los coches", fleet_h: "Elige tu coche", fleet_p: "Precios por día. Combustible no incluido.",
    per_day: "/ día", seats: "plazas", book_car: "Reservar este coche",
    book_h: "Solicita tu reserva", book_p: "Rellena el formulario y tu mensaje se abrirá en WhatsApp, listo para enviar.",
    f_name: "Nombre completo", f_phone: "Número de teléfono", f_car: "Coche", f_choose: "Elige un coche", f_pick: "Fecha de recogida", f_ret: "Fecha de devolución",
    f_loc: "Lugar de recogida", l_air: "Aeropuerto de Zanzíbar", l_hotel: "Hotel", l_other: "Otra dirección", f_place: "Nombre del hotel o dirección",
    f_notes: "Notas (opcional)", est: "Total estimado", est_none: "Elige coche y fechas", days: "días", send: "Enviar por WhatsApp",
    note: "Esto es una solicitud de reserva. Confirmaremos la disponibilidad y los detalles de pago contigo por WhatsApp.",
    ok: "Abriendo WhatsApp… pulsa Enviar para terminar.",
    e_req: "Rellena todos los campos obligatorios.", e_date: "La fecha de devolución debe ser posterior a la de recogida.",
    e_past: "La fecha de recogida no puede ser pasada.", e_place: "Añade el nombre del hotel o la dirección.",
    why_h: "Por qué reservar con nosotros", w1t: "Precios claros", w1p: "El precio que ves es el precio por día. Sin costes ocultos.",
    w2t: "Entrega en aeropuerto y hotel", w2p: "Te llevamos el coche y lo recogemos cuando te vas.",
    w3t: "Ayuda a cualquier hora", w3p: "Escríbenos por WhatsApp de día o de noche.", w4t: "Coches bien cuidados", w4p: "Limpiados y revisados antes de cada alquiler.",
    terms_h: "Condiciones de alquiler", tm1: "Se acuerda un depósito al confirmar tu reserva.", tm2: "Combustible: devuelve el coche con el mismo nivel.",
    tm3: "Kilometraje: [ilimitado / X km al día].", tm4: "Se necesita un carné de conducir válido. Los visitantes necesitan el permiso de conducir internacional.",
    rev_h: "Lo que dicen nuestros clientes", r1: "“El coche nos esperaba en el aeropuerto. Fácil y muy amables.” Anna, Alemania",
    r2: "“Buen precio y condiciones claras. Recorrimos toda la isla.” James, Reino Unido", r3: "“Reservar por WhatsApp llevó dos minutos.” Fatma, Dar es Salaam",
    faq_h: "Preguntas", q1: "¿Entregáis en mi hotel?", a1: "Sí. Indica tu hotel en el formulario y nos veremos allí.",
    q2: "¿Cómo se paga?", a2: "El pago se acuerda con nosotros por WhatsApp tras confirmar tu reserva.",
    q3: "¿Puedo tener conductor?", a3: "Sí. Indícalo en las notas y confirmaremos el precio.",
    contact_h: "Contacto", contact_p: "Escríbenos por WhatsApp o visítanos en Zanzíbar.", rights: "Todos los derechos reservados."
  }
};

/* ===== Helpers ===== */
let lang = 'en';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t = k => T[lang][k] || T.en[k] || k;
const money = n => CONFIG.currency + Number(n).toFixed(2);
const waLink = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const dayCount = () => {
  const a = $('#from').value, b = $('#to').value;
  return a && b ? Math.round((new Date(b + 'T00:00') - new Date(a + 'T00:00')) / 864e5) : 0;
};

// Placeholder car picture (used when image is empty)
function carImg(c) {
  if (c.image) return c.image;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160'><rect width='320' height='160' fill='#E8D4B0'/><path d='M36 112l22-34q10-16 30-16h124q18 0 30 16l30 28q14 4 14 16v6H36z' fill='${c.color}'/><path d='M80 78q6-10 18-10h46v36H66zM156 68h50q10 0 18 10l14 26h-82z' fill='#fff' opacity='.85'/><circle cx='92' cy='126' r='19' fill='#06364D'/><circle cx='236' cy='126' r='19' fill='#06364D'/><circle cx='92' cy='126' r='7' fill='#F3E7D3'/><circle cx='236' cy='126' r='7' fill='#F3E7D3'/></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function renderFleet() {
  $('#fleet').innerHTML = CONFIG.fleet.map(c => `
    <article class="card">
      <img src="${carImg(c)}" alt="${c.name}" loading="lazy">
      <div class="cb">
        <h3>${c.name}</h3>
        <div class="specs">
          <span class="trans">${c.trans}</span>
          <span class="seats">${c.seats} ${t('seats')}</span>
          ${c.year ? `<span class="year">${c.year}</span>` : ''}
          ${c.fuel ? `<span class="fuel">${c.fuel}</span>` : ''}
        </div>
        <p class="price"><b>${money(c.price)}</b> ${t('per_day')}</p>
        <a class="btn btn-b" href="#book" data-car="${c.id}">${t('book_car')}</a>
      </div>
    </article>`).join('');
  const sel = $('#car'), keep = sel.value;
  sel.innerHTML = `<option value="">${t('f_choose')}</option>` +
    CONFIG.fleet.map(c => `<option value="${c.id}">${c.name} (${money(c.price)} ${t('per_day')})</option>`).join('');
  sel.value = keep;
}

function estimate() {
  const c = CONFIG.fleet.find(x => x.id === $('#car').value), d = dayCount();
  $('#total').textContent = c && d > 0 ? `${money(c.price * d)} (${d} ${t('days')})` : t('est_none');
  const img = $('#estImg');
  img.hidden = !c;
  if (c) { img.src = carImg(c); img.alt = c.name; }
}

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $$('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  $$('[data-ph]').forEach(e => e.placeholder = t(e.dataset.ph));
  $('#lang').value = l;
  renderFleet();
  estimate();
  try { localStorage.setItem('lang', l); } catch (e) { }
}

/* ===== Init ===== */
$$('[data-biz]').forEach(e => e.textContent = CONFIG.business);
$$('[data-wa]').forEach(e => { e.href = waLink(); e.target = '_blank'; e.rel = 'noopener'; });
$('#year').textContent = new Date().getFullYear();
$('#contactInfo').innerHTML =
  `<a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">💬 +${CONFIG.whatsapp}</a>
   <a href="https://maps.google.com/?q=${encodeURIComponent(CONFIG.address)}" target="_blank" rel="noopener">📍 ${CONFIG.address}</a>`;

// Date limits (local time)
const now = new Date();
const todayISO = new Date(now - now.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
$('#from').min = $('#to').min = todayISO;
$('#from').addEventListener('change', e => { $('#to').min = e.target.value || todayISO; estimate(); });
$('#to').addEventListener('change', estimate);
$('#car').addEventListener('change', estimate);

// "Book this car" buttons preselect the car
document.addEventListener('click', e => {
  const a = e.target.closest('[data-car]');
  if (a) {
    $('#car').value = a.dataset.car; estimate();
    const fc = $('#form');
    fc.classList.remove('flash'); void fc.offsetWidth; fc.classList.add('flash');
    setTimeout(() => $('#form [name=name]').focus({ preventScroll: true }), 600);
  }
  if (e.target.closest('#nav a')) setMenu(false);
});

const setMenu = open => {
  $('#nav').classList.toggle('open', open);
  $('#menu').setAttribute('aria-expanded', open);
  $('#menu').textContent = open ? '✕' : '☰';
};
$('#menu').addEventListener('click', () => setMenu(!$('#nav').classList.contains('open')));
$('#lang').addEventListener('change', e => applyLang(e.target.value));

// Submit: validate, then open WhatsApp with a prepared message
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target)), msg = $('#msg');
  const c = CONFIG.fleet.find(x => x.id === f.car);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const fail = (k, bad) => {
    msg.textContent = t(k); msg.className = 'msg err';
    bad.forEach(n => e.target.elements[n].setAttribute('aria-invalid', 'true'));
    e.target.elements[bad[0]].focus();
  };
  const empty = ['name', 'phone', 'car', 'from', 'to'].filter(n => !String(f[n]).trim());
  if (empty.length) return fail('e_req', empty);
  if (new Date(f.from + 'T00:00') < today) return fail('e_past', ['from']);
  if (dayCount() < 1) return fail('e_date', ['to']);
  if (f.where !== 'airport' && !f.place.trim()) return fail('e_place', ['place']);
  const place = f.where === 'airport' ? 'Zanzibar airport' : f.place.trim();
  const text = [
    `Hello ${CONFIG.business}, I would like to book a car.`,
    `Name: ${f.name.trim()}`, `Phone: ${f.phone.trim()}`, `Car: ${c.name}`,
    `Pickup: ${f.from}`, `Return: ${f.to}`, `Pickup place: ${place}`,
    f.notes.trim() ? `Notes: ${f.notes.trim()}` : '',
    `Estimated total: ${money(c.price * dayCount())} (${dayCount()} days)`
  ].filter(Boolean).join('\n');
  msg.textContent = t('ok'); msg.className = 'msg ok';
  window.open(waLink(text), '_blank', 'noopener');
});

// Clear the error state of a field as soon as the user fixes it
$('#form').addEventListener('input', e => e.target.removeAttribute('aria-invalid'));
$('#form').addEventListener('change', e => e.target.removeAttribute('aria-invalid'));

// Header shadow on scroll + highlight the nav link of the section in view
const onScroll = () => document.querySelector('header').classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
if ('IntersectionObserver' in window) {
  const links = $$('#nav a[href^="#"]');
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const s = $(l.getAttribute('href')); if (s) spy.observe(s); });
}

let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
applyLang(T[saved] ? saved : 'en');