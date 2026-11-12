/* ===== CONFIG: edit this part ===== */
const CONFIG = {
  business: 'Rafiki Car Hire',          // your business name
  siteUrl: 'https://kingkunta28.github.io/ZanCarRental/', // live address (change if you get your own domain)
  whatsapp: '255715518980',            // international format, no + or spaces
  phone: '+255 715 518 980',           // how the number is shown on the site
  address: 'Abeid Amani Karume International Airport, Zanzibar',
  currency: '$',
  // Delivery / collection: free at locations marked free: true,
  // deliveryFee is charged separately for EACH location (pickup and return) outside the free zone.
  deliveryFee: 25,
  // Optional extras (one-off price per booking)
  babySeatFee: 60,     // per seat, per booking (1 seat)
  babySeatMultiFee: 50, // per seat when 2 or more seats are booked
  babySeatMax: 5,      // most seats one booking can ask for
  // Default arrival airport shown in the Flight Information section
  arrivalAirport: 'Abeid Amani Karume International Airport, Zanzibar',
  // Pickup / return options in the booking form. "outside" covers ANY place outside
  // Zanzibar Town and the airport; the customer types the area and exact address by hand.
  // address: an exact address is required. area: an area / destination is required too.
  locations: [
    { id: 'airport', i18n: 'l_air', name: 'Zanzibar Airport', full: 'Abeid Amani Karume International Airport (Zanzibar)', free: true },
    { id: 'town', i18n: 'l_town', name: 'Zanzibar Town', full: 'Zanzibar Town (Stone Town)', free: true, address: true },
    { id: 'outside', i18n: 'l_outside', name: 'Outside Free Zone', address: true, area: true }
  ],
  // Areas outside the free zone. Used for the delivery-area pages and SEO only,
  // NOT as booking options (they are all booked as "Outside Free Zone").
  areas: [
    { id: 'nungwi', name: 'Nungwi' },
    { id: 'kendwa', name: 'Kendwa' },
    { id: 'matemwe', name: 'Matemwe' },
    { id: 'pongwe', name: 'Pongwe' },
    { id: 'paje', name: 'Paje' },
    { id: 'jambiani', name: 'Jambiani' },
    { id: 'bwejuu', name: 'Bwejuu' },
    { id: 'michamvi', name: 'Michamvi' },
    { id: 'kizimkazi', name: 'Kizimkazi' }
  ],
  // type: 'suv' | 'small' | 'van' | 'pickup' (used by the fleet filter)
  // image: '' uses a placeholder. To use a real photo: image: 'images/vitz.jpg'
  fleet: [
    { id: 'nissan-e-class', type: 'small', name: 'Nissan Juke', seats: 4, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 25, color: '#0B6E99', image: 'images/cars/nissan-juke-2018-car-hire-zanzibar.webp' },
    { id: 'rav4-2018', type: 'suv', name: 'Toyota RAV4 New', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 35, color: '#2EC4D6', image: 'images/cars/toyota-rav4-2018-suv-rental-zanzibar.webp' },
    { id: 'vanguard-2018', type: 'suv', name: 'Toyota Vanguard', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 40, color: '#0B6E99', image: 'images/cars/toyota-vanguard-2018-suv-rental-zanzibar.webp' },
    { id: 'rav4-2016', type: 'suv', name: 'Toyota RAV4', seats: 2, trans: 'Automatic', year: 2016, fuel: 'Petrol', price: 30, color: '#06364D', image: 'images/cars/toyota-rav4-2016-3-door-rental-zanzibar.webp' },
    { id: 'land-cruiser-2020', type: 'suv', name: 'Toyota Land Cruiser', seats: 5, trans: 'Automatic', year: 2020, fuel: 'Petrol', price: 150.00, color: '#0B6E99', image: 'images/cars/toyota-land-cruiser-2020-4x4-rental-zanzibar.webp' },
    { id: 'suzuki-escudo-2019', type: 'suv', name: 'Suzuki Escudo', seats: 3, trans: 'Automatic', year: 2019, fuel: 'Petrol', price: 26, color: '#2EC4D6', image: 'images/cars/suzuki-escudo-2019-4x4-rental-zanzibar.webp' },
   
    { id: 'toyota-c-class', type: 'pickup', name: 'Toyota Hilux', seats: 5, trans: 'Automatic', year: 2010, fuel: 'Diesel', price: 90.00, color: '#C9A36A', image: 'images/cars/toyota-hilux-pickup-rental-zanzibar.webp' },
    { id: 'toyota-g-class', type: 'suv', name: 'Toyota Harrier', seats: 5, trans: 'Automatic', year: 2015, fuel: 'Petrol', price: 45.00, color: '#0B6E99', image: 'images/cars/toyota-harrier-2015-suv-rental-zanzibar.webp' },
    { id: 'toyota-ist', type: 'small', name: 'Toyota IST', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 20.00, color: '#C9A36A', image: 'images/cars/toyota-ist-2018-compact-car-hire-zanzibar.webp' },
    { id: 'toyota-alphad', type: 'van', name: 'Toyota Alphard', seats: 8, trans: 'Automatic', year: 2013, fuel: 'Petrol', price: 45.00, color: '#0B6E99', image: 'images/cars/toyota-alphard-minivan-rental-zanzibar.webp' }
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
    q4: "How old do I need to be to rent a car?", a4: "The minimum age to rent a car is 21 years. Drivers under 25 may incur a young driver surcharge. Maximum age is 80 years.",
    q5: "What documents do I need to rent a car?", a5: "You need a valid driver's license, passport or ID card, and a credit card for the security deposit.",
    q6: "Can I cancel my booking for free?", a6: "Yes, you can cancel for free up to 48 hours before your pickup time. Cancellations within 48 hours may incur a fee.",
    q7: "How do I make a booking?", a7: "Choose a car, your dates and your pickup and return locations, then add your name and phone number. The summary shows your total, including any delivery fees. Tap \"Send on WhatsApp\" and send the message. We will confirm availability and payment with you on WhatsApp.",
    q8: "Can I modify my booking after confirmation?", a8: "Yes, you can modify your booking by contacting our support team at least 24 hours before pickup.",
    q9: "What payment methods do you accept?", a9: "We accept credit cards (Visa, Mastercard), bank transfers, and cash on delivery (for local bookings).",
    q10: "Is my payment secure?", a10: "Yes, all payments are processed through secure PesaPal payment gateway. Your card details are never stored on our servers.",
    q11: "What does the insurance cover?", a11: "Basic insurance includes CDW (Collision Damage Waiver) and Theft Protection. Full coverage adds zero excess and roadside assistance.",
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
    q4: "Ninahitaji kuwa na umri gani kukodisha gari?", a4: "Umri wa chini wa kukodisha gari ni miaka 21. Madereva walio chini ya miaka 25 wanaweza kutozwa ada ya ziada ya dereva kijana. Umri wa juu ni miaka 80.",
    q5: "Ninahitaji nyaraka gani kukodisha gari?", a5: "Unahitaji leseni halali ya udereva, pasipoti au kitambulisho, na kadi ya mkopo kwa ajili ya amana.",
    q6: "Naweza kughairi nafasi yangu bila malipo?", a6: "Ndiyo, unaweza kughairi bila malipo hadi saa 48 kabla ya muda wa kuchukua gari. Kughairi ndani ya saa 48 kunaweza kutozwa ada.",
    q7: "Ninawekaje nafasi?", a7: "Chagua gari, tarehe na mahali pa kuchukua na kurudisha, kisha weka jina na namba yako ya simu. Muhtasari unaonyesha jumla yako, pamoja na ada za kuleta gari. Bonyeza \"Tuma kupitia WhatsApp\" na utume ujumbe. Tutathibitisha upatikanaji na malipo nawe kupitia WhatsApp.",
    q8: "Naweza kubadilisha nafasi yangu baada ya kuthibitishwa?", a8: "Ndiyo, unaweza kubadilisha nafasi yako kwa kuwasiliana na timu yetu ya msaada angalau saa 24 kabla ya kuchukua gari.",
    q9: "Mnapokea njia gani za malipo?", a9: "Tunapokea kadi za mkopo (Visa, Mastercard), uhamisho wa benki, na pesa taslimu wakati wa kukabidhiwa gari (kwa nafasi za ndani).",
    q10: "Je, malipo yangu ni salama?", a10: "Ndiyo, malipo yote hufanywa kupitia mfumo salama wa malipo wa PesaPal. Taarifa za kadi yako hazihifadhiwi kwenye seva zetu.",
    q11: "Bima inashughulikia nini?", a11: "Bima ya msingi inajumuisha CDW (Collision Damage Waiver) na kinga dhidi ya wizi. Bima kamili huondoa gharama ya ziada (excess) na kuongeza msaada wa barabarani.",
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
    q4: "Quanti anni devo avere per noleggiare un'auto?", a4: "L'età minima per noleggiare un'auto è 21 anni. I conducenti sotto i 25 anni possono pagare un supplemento giovane conducente. L'età massima è 80 anni.",
    q5: "Quali documenti servono per noleggiare un'auto?", a5: "Servono una patente valida, il passaporto o la carta d'identità e una carta di credito per il deposito cauzionale.",
    q6: "Posso cancellare gratuitamente la prenotazione?", a6: "Sì, puoi cancellare gratuitamente fino a 48 ore prima dell'orario di ritiro. Le cancellazioni nelle 48 ore precedenti possono comportare un costo.",
    q7: "Come faccio a prenotare?", a7: "Scegli l'auto, le date e i luoghi di ritiro e riconsegna, poi inserisci nome e numero di telefono. Il riepilogo mostra il totale, compresi eventuali costi di consegna. Tocca \"Invia su WhatsApp\" e invia il messaggio. Confermeremo con te disponibilità e pagamento su WhatsApp.",
    q8: "Posso modificare la prenotazione dopo la conferma?", a8: "Sì, puoi modificarla contattando il nostro servizio clienti almeno 24 ore prima del ritiro.",
    q9: "Quali metodi di pagamento accettate?", a9: "Accettiamo carte di credito (Visa, Mastercard), bonifici bancari e contanti alla consegna (per le prenotazioni locali).",
    q10: "Il pagamento è sicuro?", a10: "Sì, tutti i pagamenti passano dal gateway di pagamento sicuro PesaPal. I dati della tua carta non vengono mai salvati sui nostri server.",
    q11: "Cosa copre l'assicurazione?", a11: "L'assicurazione base include CDW (Collision Damage Waiver) e protezione furto. La copertura completa azzera la franchigia e aggiunge l'assistenza stradale.",
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
    q4: "Wie alt muss ich sein, um ein Auto zu mieten?", a4: "Das Mindestalter für die Anmietung beträgt 21 Jahre. Für Fahrer unter 25 kann eine Jungfahrergebühr anfallen. Das Höchstalter beträgt 80 Jahre.",
    q5: "Welche Dokumente brauche ich, um ein Auto zu mieten?", a5: "Du brauchst einen gültigen Führerschein, einen Reisepass oder Personalausweis und eine Kreditkarte für die Kaution.",
    q6: "Kann ich meine Buchung kostenlos stornieren?", a6: "Ja, du kannst bis 48 Stunden vor der Abholung kostenlos stornieren. Bei Stornierungen innerhalb von 48 Stunden kann eine Gebühr anfallen.",
    q7: "Wie buche ich?", a7: "Wähle ein Auto, deine Daten sowie Abhol- und Rückgabeort und gib Name und Telefonnummer ein. Die Übersicht zeigt deinen Gesamtpreis inklusive eventueller Liefergebühren. Tippe auf \"Über WhatsApp senden\" und schick die Nachricht ab. Verfügbarkeit und Zahlung bestätigen wir dir dann über WhatsApp.",
    q8: "Kann ich meine Buchung nach der Bestätigung ändern?", a8: "Ja, du kannst deine Buchung ändern, indem du dich mindestens 24 Stunden vor der Abholung an unser Support-Team wendest.",
    q9: "Welche Zahlungsmethoden akzeptiert ihr?", a9: "Wir akzeptieren Kreditkarten (Visa, Mastercard), Banküberweisungen und Barzahlung bei Übergabe (für lokale Buchungen).",
    q10: "Ist meine Zahlung sicher?", a10: "Ja, alle Zahlungen laufen über das sichere Zahlungsportal PesaPal. Deine Kartendaten werden nie auf unseren Servern gespeichert.",
    q11: "Was deckt die Versicherung ab?", a11: "Die Basisversicherung umfasst CDW (Collision Damage Waiver) und Diebstahlschutz. Der Vollschutz bietet null Selbstbeteiligung und Pannenhilfe.",
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
    q4: "Quel âge faut-il avoir pour louer une voiture ?", a4: "L'âge minimum pour louer une voiture est de 21 ans. Les conducteurs de moins de 25 ans peuvent payer un supplément jeune conducteur. L'âge maximum est de 80 ans.",
    q5: "Quels documents faut-il pour louer une voiture ?", a5: "Il vous faut un permis de conduire valide, un passeport ou une carte d'identité, et une carte de crédit pour la caution.",
    q6: "Puis-je annuler ma réservation gratuitement ?", a6: "Oui, vous pouvez annuler gratuitement jusqu'à 48 heures avant l'heure de prise en charge. Une annulation dans les 48 heures peut entraîner des frais.",
    q7: "Comment réserver ?", a7: "Choisissez une voiture, vos dates et vos lieux de prise en charge et de retour, puis indiquez votre nom et votre numéro de téléphone. Le récapitulatif affiche votre total, frais de livraison compris. Appuyez sur \"Envoyer sur WhatsApp\" et envoyez le message. Nous confirmerons la disponibilité et le paiement avec vous sur WhatsApp.",
    q8: "Puis-je modifier ma réservation après confirmation ?", a8: "Oui, vous pouvez la modifier en contactant notre équipe d'assistance au moins 24 heures avant la prise en charge.",
    q9: "Quels moyens de paiement acceptez-vous ?", a9: "Nous acceptons les cartes de crédit (Visa, Mastercard), les virements bancaires et le paiement en espèces à la livraison (pour les réservations locales).",
    q10: "Mon paiement est-il sécurisé ?", a10: "Oui, tous les paiements passent par la passerelle de paiement sécurisée PesaPal. Vos données de carte ne sont jamais conservées sur nos serveurs.",
    q11: "Que couvre l'assurance ?", a11: "L'assurance de base comprend la CDW (Collision Damage Waiver) et la protection vol. La couverture complète supprime la franchise et ajoute l'assistance routière.",
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
    q4: "¿Qué edad necesito para alquilar un coche?", a4: "La edad mínima para alquilar un coche es de 21 años. Los conductores menores de 25 años pueden pagar un recargo por conductor joven. La edad máxima es de 80 años.",
    q5: "¿Qué documentos necesito para alquilar un coche?", a5: "Necesitas un carné de conducir válido, pasaporte o documento de identidad y una tarjeta de crédito para el depósito de garantía.",
    q6: "¿Puedo cancelar mi reserva gratis?", a6: "Sí, puedes cancelar gratis hasta 48 horas antes de la hora de recogida. Las cancelaciones con menos de 48 horas pueden tener un coste.",
    q7: "¿Cómo hago una reserva?", a7: "Elige un coche, las fechas y los lugares de recogida y devolución, y añade tu nombre y teléfono. El resumen muestra tu total, con los cargos de entrega incluidos. Pulsa \"Enviar por WhatsApp\" y envía el mensaje. Confirmaremos contigo la disponibilidad y el pago por WhatsApp.",
    q8: "¿Puedo modificar mi reserva después de la confirmación?", a8: "Sí, puedes modificarla contactando con nuestro equipo de atención al menos 24 horas antes de la recogida.",
    q9: "¿Qué métodos de pago aceptáis?", a9: "Aceptamos tarjetas de crédito (Visa, Mastercard), transferencias bancarias y pago en efectivo a la entrega (para reservas locales).",
    q10: "¿Es seguro mi pago?", a10: "Sí, todos los pagos se procesan a través de la pasarela de pago segura PesaPal. Los datos de tu tarjeta nunca se guardan en nuestros servidores.",
    q11: "¿Qué cubre el seguro?", a11: "El seguro básico incluye CDW (Collision Damage Waiver) y protección contra robo. La cobertura total elimina la franquicia y añade asistencia en carretera.",
    contact_h: "Contacto", contact_p: "Escríbenos por WhatsApp o visítanos en Zanzíbar.", rights: "Todos los derechos reservados."
  }
};


/* ===== Extra translations for the redesigned interface ===== */
const T2 = {
  en: {
    skip: 'Skip to content', nav_how: 'How it works', hero_kicker: 'Car rental in Zanzibar',
    stat_cars: 'cars in our fleet', stat_from: 'per day, from', stat_support: 'support on WhatsApp',
    how_h: 'Book in three easy steps', how_p: 'No account and no paperwork online. Pick, message and drive.',
    s1t: 'Choose your car', s1p: 'Compare cars, seats and daily prices.',
    s2t: 'Send on WhatsApp', s2p: 'Your booking message is ready. Just press Send.',
    s3t: 'We deliver it', s3p: 'Meet your car at the airport or your hotel.',
    cat_all: 'All', cat_suv: 'SUV & 4x4', cat_small: 'Compact', cat_van: 'Minivan', cat_pickup: 'Pickup',
    empty: 'No cars in this category right now.', details: 'View details', close: 'Close',
    sum_h: 'Your booking', sum_none: 'No car selected yet', why_p: 'A small local team, simple rules and cars we look after ourselves.',
    cta_h: 'Ready to explore Zanzibar?', foot_explore: 'Explore',
    l_town: "Zanzibar Town (Stone Town)", f_ret_loc: "Return place", f_ret_place: "Return hotel or address", free: "Free", fee_note: "Delivery and collection are free at Zanzibar Airport and Zanzibar Town. Other locations cost {fee} each, for pickup and for return.", sum_rental: "Car rental", sum_pfee: "Pickup fee", sum_rfee: "Return fee", sum_loc: "Location fees", sum_total: "Final total", fee_zone: "Outside the free zone"
  },
  sw: {
    skip: 'Ruka hadi maudhui', nav_how: 'Jinsi inavyofanya kazi', hero_kicker: 'Kukodisha magari Zanzibar',
    stat_cars: 'magari ya kuchagua', stat_from: 'kwa siku, kuanzia', stat_support: 'msaada kupitia WhatsApp',
    how_h: 'Weka nafasi kwa hatua tatu', how_p: 'Hakuna akaunti wala makaratasi. Chagua, tuma ujumbe, endesha.',
    s1t: 'Chagua gari lako', s1p: 'Linganisha magari, viti na bei za kila siku.',
    s2t: 'Tuma kupitia WhatsApp', s2p: 'Ujumbe wako uko tayari. Bonyeza Send tu.',
    s3t: 'Tunakuletea', s3p: 'Pokea gari lako uwanja wa ndege au hotelini.',
    cat_all: 'Yote', cat_suv: 'SUV na 4x4', cat_small: 'Magari madogo', cat_van: 'Minivan', cat_pickup: 'Pickup',
    empty: 'Hakuna magari katika kundi hili kwa sasa.', details: 'Tazama maelezo', close: 'Funga',
    sum_h: 'Nafasi yako', sum_none: 'Bado hujachagua gari', why_p: 'Timu ndogo ya hapa, masharti rahisi na magari tunayoyatunza wenyewe.',
    cta_h: 'Uko tayari kuizunguka Zanzibar?', foot_explore: 'Gundua',
    l_town: "Mji wa Zanzibar (Stone Town)", f_ret_loc: "Mahali pa kurudisha", f_ret_place: "Hoteli au anwani ya kurudisha", free: "Bure", fee_note: "Kuleta na kuchukua gari ni bure uwanja wa ndege wa Zanzibar na Mji wa Zanzibar. Maeneo mengine ni {fee} kila moja, kwa kuleta na kwa kurudisha.", sum_rental: "Kukodisha gari", sum_pfee: "Ada ya kuleta", sum_rfee: "Ada ya kurudisha", sum_loc: "Ada za mahali", sum_total: "Jumla kuu", fee_zone: "Nje ya eneo la bure"
  },
  it: {
    skip: 'Vai al contenuto', nav_how: 'Come funziona', hero_kicker: 'Noleggio auto a Zanzibar',
    stat_cars: 'auto nella nostra flotta', stat_from: 'al giorno, da', stat_support: 'assistenza su WhatsApp',
    how_h: 'Prenota in tre semplici passi', how_p: 'Nessun account e nessuna burocrazia online. Scegli, scrivi e guida.',
    s1t: "Scegli l'auto", s1p: 'Confronta auto, posti e prezzi giornalieri.',
    s2t: 'Invia su WhatsApp', s2p: 'Il messaggio è pronto. Premi solo Invia.',
    s3t: 'Te la consegniamo', s3p: "Trovi l'auto in aeroporto o al tuo hotel.",
    cat_all: 'Tutte', cat_suv: 'SUV e 4x4', cat_small: 'Compatte', cat_van: 'Monovolume', cat_pickup: 'Pick-up',
    empty: 'Nessuna auto in questa categoria al momento.', details: 'Vedi dettagli', close: 'Chiudi',
    sum_h: 'La tua prenotazione', sum_none: 'Nessuna auto selezionata', why_p: 'Un piccolo team locale, regole semplici e auto curate da noi.',
    cta_h: 'Pronto a scoprire Zanzibar?', foot_explore: 'Esplora',
    l_town: "Zanzibar Town (Stone Town)", f_ret_loc: "Luogo di riconsegna", f_ret_place: "Hotel o indirizzo di riconsegna", free: "Gratis", fee_note: "Consegna e ritiro sono gratuiti all'aeroporto di Zanzibar e a Zanzibar Town. Altrove costano {fee} ciascuno, sia per la consegna sia per la riconsegna.", sum_rental: "Noleggio auto", sum_pfee: "Costo consegna", sum_rfee: "Costo riconsegna", sum_loc: "Costi di località", sum_total: "Totale finale", fee_zone: "Fuori dalla zona gratuita"
  },
  de: {
    skip: 'Zum Inhalt springen', nav_how: "So funktioniert's", hero_kicker: 'Autovermietung auf Sansibar',
    stat_cars: 'Autos in unserer Flotte', stat_from: 'pro Tag, ab', stat_support: 'Hilfe per WhatsApp',
    how_h: 'In drei Schritten gebucht', how_p: 'Kein Konto, kein Papierkram. Auswählen, schreiben, losfahren.',
    s1t: 'Auto wählen', s1p: 'Vergleiche Autos, Sitze und Tagespreise.',
    s2t: 'Per WhatsApp senden', s2p: 'Deine Nachricht ist fertig. Einfach auf Senden tippen.',
    s3t: 'Wir liefern', s3p: 'Übernimm dein Auto am Flughafen oder im Hotel.',
    cat_all: 'Alle', cat_suv: 'SUV & 4x4', cat_small: 'Kompakt', cat_van: 'Van', cat_pickup: 'Pick-up',
    empty: 'Derzeit keine Autos in dieser Kategorie.', details: 'Details ansehen', close: 'Schließen',
    sum_h: 'Deine Buchung', sum_none: 'Noch kein Auto gewählt', why_p: 'Kleines lokales Team, einfache Regeln und Autos, die wir selbst pflegen.',
    cta_h: 'Bereit, Sansibar zu entdecken?', foot_explore: 'Entdecken',
    l_town: "Zanzibar Town (Stone Town)", f_ret_loc: "Rückgabeort", f_ret_place: "Hotel oder Adresse für die Rückgabe", free: "Gratis", fee_note: "Zustellung und Abholung sind am Flughafen Sansibar und in Zanzibar Town kostenlos. An anderen Orten kostet es je {fee}, für Übergabe und für Rückgabe.", sum_rental: "Automiete", sum_pfee: "Zustellgebühr", sum_rfee: "Rückgabegebühr", sum_loc: "Ortsgebühren", sum_total: "Gesamtpreis", fee_zone: "Außerhalb der Gratiszone"
  },
  fr: {
    skip: 'Aller au contenu', nav_how: 'Comment ça marche', hero_kicker: 'Location de voitures à Zanzibar',
    stat_cars: 'voitures dans notre flotte', stat_from: 'par jour, dès', stat_support: 'assistance sur WhatsApp',
    how_h: 'Réservez en trois étapes', how_p: 'Pas de compte, pas de paperasse. Choisissez, écrivez, roulez.',
    s1t: 'Choisissez votre voiture', s1p: 'Comparez voitures, places et prix par jour.',
    s2t: 'Envoyez sur WhatsApp', s2p: 'Votre message est prêt. Appuyez simplement sur Envoyer.',
    s3t: 'Nous livrons', s3p: "Récupérez la voiture à l'aéroport ou à votre hôtel.",
    cat_all: 'Toutes', cat_suv: 'SUV et 4x4', cat_small: 'Citadines', cat_van: 'Monospaces', cat_pickup: 'Pick-up',
    empty: 'Aucune voiture dans cette catégorie pour le moment.', details: 'Voir les détails', close: 'Fermer',
    sum_h: 'Votre réservation', sum_none: 'Aucune voiture choisie', why_p: 'Une petite équipe locale, des règles simples et des voitures que nous entretenons nous-mêmes.',
    cta_h: 'Prêt à explorer Zanzibar ?', foot_explore: 'Explorer',
    l_town: "Zanzibar Town (Stone Town)", f_ret_loc: "Lieu de retour", f_ret_place: "Hôtel ou adresse de retour", free: "Gratuit", fee_note: "La livraison et la reprise sont gratuites à l'aéroport de Zanzibar et à Zanzibar Town. Ailleurs, {fee} par lieu, à la livraison comme au retour.", sum_rental: "Location de la voiture", sum_pfee: "Frais de livraison", sum_rfee: "Frais de retour", sum_loc: "Frais de lieu", sum_total: "Total final", fee_zone: "Hors zone gratuite"
  },
  es: {
    skip: 'Ir al contenido', nav_how: 'Cómo funciona', hero_kicker: 'Alquiler de coches en Zanzíbar',
    stat_cars: 'coches en nuestra flota', stat_from: 'por día, desde', stat_support: 'ayuda por WhatsApp',
    how_h: 'Reserva en tres pasos', how_p: 'Sin cuentas ni papeleo. Elige, escribe y conduce.',
    s1t: 'Elige tu coche', s1p: 'Compara coches, plazas y precios por día.',
    s2t: 'Envía por WhatsApp', s2p: 'Tu mensaje está listo. Solo pulsa Enviar.',
    s3t: 'Te lo llevamos', s3p: 'Recoge el coche en el aeropuerto o en tu hotel.',
    cat_all: 'Todos', cat_suv: 'SUV y 4x4', cat_small: 'Compactos', cat_van: 'Monovolúmenes', cat_pickup: 'Pick-up',
    empty: 'No hay coches en esta categoría ahora.', details: 'Ver detalles', close: 'Cerrar',
    sum_h: 'Tu reserva', sum_none: 'Aún no has elegido coche', why_p: 'Un pequeño equipo local, normas sencillas y coches que cuidamos nosotros.',
    cta_h: '¿Listo para descubrir Zanzíbar?', foot_explore: 'Explorar',
    l_town: "Zanzibar Town (Stone Town)", f_ret_loc: "Lugar de devolución", f_ret_place: "Hotel o dirección de devolución", free: "Gratis", fee_note: "La entrega y la recogida son gratis en el aeropuerto de Zanzíbar y en Zanzibar Town. En otros lugares cuestan {fee} cada una, tanto la entrega como la devolución.", sum_rental: "Alquiler del coche", sum_pfee: "Tarifa de entrega", sum_rfee: "Tarifa de devolución", sum_loc: "Tarifas de ubicación", sum_total: "Total final", fee_zone: "Fuera de la zona gratuita"
  }
};
Object.keys(T2).forEach(l => Object.assign(T[l], T2[l]));
/* ===== "Before you rent" guide ===== */
const T3 = {
  en: {
    g_k: 'Essential guide', g_h: 'Before you rent', g_p: 'Seven things to know before you rent and drive in Zanzibar.', nav_guide: 'Before you rent',
    g1t: 'Driving permit', g1p: "To drive legally in Zanzibar, you may need a local driving permit. If you need assistance arranging one through Rafiki Car Hire, please provide:",
    g1a: "A copy of your passport.", g1b: "A copy of your valid driving licence.", g1c: "Driving permit arrangement fee",
    g1n: "Please provide the required documents in advance to allow enough time for the arrangement.",
    g2t: 'Transparent pricing', g2p: 'Compare the full cost, not just the daily rate. Our car rental prices show every total with the permit included and no deposit.',
    g3t: 'Right vehicle', g3p: 'Check that the vehicle meets your travel needs. Consider terrain, passenger count and luggage space.',
    g4t: 'Insurance coverage', g4p: 'Check what your rental insurance covers. Our cars have third-party insurance, the basic cover required by law, which does not cover damage to the rental car itself. Some travel insurance policies offer cover for rental car damage.',
    g5t: 'Road rules and safety', g5p: 'Zanzibar drives on the left and police checkpoints are common.',
    g6t: 'Pickup logistics', g6p: 'Confirm clear pickup and drop-off locations and times to avoid any delays or confusion.',
    g7t: 'Book ahead', g7p: 'Reserve your vehicle in advance, especially during peak tourist season, to guarantee availability.'
  },
  sw: {
    g_k: 'Mwongozo muhimu', g_h: 'Kabla ya kukodisha', g_p: 'Mambo saba ya kujua kabla ya kukodisha na kuendesha gari Zanzibar.', nav_guide: 'Kabla ya kukodisha',
    g1t: 'Kibali cha udereva', g1p: "Ili kuendesha gari kihalali Zanzibar, huenda ukahitaji kibali cha udereva cha ndani. Ukihitaji msaada wa kukipata kupitia Rafiki Car Hire, tafadhali tuma:",
    g1a: "Nakala ya pasipoti yako.", g1b: "Nakala ya leseni yako halali ya udereva.", g1c: "Ada ya kushughulikia kibali cha udereva",
    g1n: "Tafadhali tuma nyaraka zinazohitajika mapema ili kuwe na muda wa kutosha wa kushughulikia.",
    g2t: 'Bei za wazi', g2p: 'Linganisha gharama yote, si bei ya siku pekee. Bei zetu zinaonyesha jumla yote pamoja na kibali na bila amana.',
    g3t: 'Gari linalokufaa', g3p: 'Hakikisha gari linakidhi mahitaji ya safari yako. Fikiria aina ya barabara, idadi ya abiria na nafasi ya mizigo.',
    g4t: 'Bima', g4p: 'Hakikisha unajua bima ya gari inashughulikia nini. Magari yetu yana bima ya mtu wa tatu, bima ya msingi inayotakiwa kisheria, ambayo haishughulikii uharibifu wa gari lenyewe. Baadhi ya bima za safari hushughulikia uharibifu wa gari la kukodi.',
    g5t: 'Sheria za barabarani na usalama', g5p: 'Zanzibar magari huendeshwa upande wa kushoto, na vizuizi vya polisi ni vya kawaida.',
    g6t: 'Mpango wa kuchukua gari', g6p: 'Thibitisha mahali na muda wa kuchukua na kurudisha gari ili kuepuka ucheleweshaji au mkanganyiko.',
    g7t: 'Weka nafasi mapema', g7p: 'Weka nafasi ya gari lako mapema, hasa msimu wa watalii wengi, ili kuhakikisha linapatikana.'
  },
  it: {
    g_k: 'Guida essenziale', g_h: 'Prima di noleggiare', g_p: 'Sette cose da sapere prima di noleggiare e guidare a Zanzibar.', nav_guide: 'Prima di noleggiare',
    g1t: 'Permesso di guida', g1p: "Per guidare legalmente a Zanzibar potrebbe servirti un permesso di guida locale. Se vuoi che Rafiki Car Hire ti aiuti a ottenerlo, inviaci:",
    g1a: "Una copia del passaporto.", g1b: "Una copia della tua patente di guida valida.", g1c: "Costo per la pratica del permesso di guida",
    g1n: "Invia i documenti richiesti in anticipo, così abbiamo il tempo necessario per la pratica.",
    g2t: 'Prezzi trasparenti', g2p: 'Confronta il costo totale, non solo la tariffa giornaliera. I nostri prezzi mostrano ogni totale con il permesso incluso e senza deposito.',
    g3t: 'Il veicolo giusto', g3p: 'Verifica che il veicolo sia adatto al tuo viaggio: tipo di strade, numero di passeggeri e spazio per i bagagli.',
    g4t: 'Copertura assicurativa', g4p: "Verifica cosa copre l'assicurazione del noleggio. Le nostre auto hanno l'assicurazione RC verso terzi, la copertura base obbligatoria per legge, che non copre i danni all'auto noleggiata. Alcune assicurazioni di viaggio coprono i danni alle auto a noleggio.",
    g5t: 'Regole della strada e sicurezza', g5p: 'A Zanzibar si guida a sinistra e i posti di blocco della polizia sono frequenti.',
    g6t: 'Ritiro e riconsegna', g6p: 'Conferma con chiarezza luoghi e orari di ritiro e riconsegna per evitare ritardi o malintesi.',
    g7t: 'Prenota in anticipo', g7p: "Prenota il veicolo in anticipo, soprattutto in alta stagione, per essere certo della disponibilità."
  },
  de: {
    g_k: 'Wichtiger Ratgeber', g_h: 'Vor der Anmietung', g_p: 'Sieben Dinge, die du wissen solltest, bevor du auf Sansibar ein Auto mietest und fährst.', nav_guide: 'Vor der Anmietung',
    g1t: 'Fahrerlaubnis', g1p: "Um auf Sansibar legal zu fahren, brauchst du eventuell eine lokale Fahrerlaubnis. Wenn Rafiki Car Hire dir bei der Beantragung helfen soll, schick uns bitte:",
    g1a: "Eine Kopie deines Reisepasses.", g1b: "Eine Kopie deines gültigen Führerscheins.", g1c: "Gebühr für die Beantragung der Fahrerlaubnis",
    g1n: "Bitte schick die Unterlagen frühzeitig, damit genug Zeit für die Beantragung bleibt.",
    g2t: 'Transparente Preise', g2p: 'Vergleiche die Gesamtkosten, nicht nur den Tagespreis. Unsere Mietpreise zeigen jede Summe inklusive Fahrerlaubnis und ohne Kaution.',
    g3t: 'Das passende Fahrzeug', g3p: 'Prüfe, ob das Fahrzeug zu deiner Reise passt: Gelände, Anzahl der Mitfahrer und Platz für Gepäck.',
    g4t: 'Versicherungsschutz', g4p: 'Prüfe, was deine Mietwagenversicherung abdeckt. Unsere Autos haben eine Haftpflichtversicherung, den gesetzlich vorgeschriebenen Grundschutz, der Schäden am Mietwagen selbst nicht abdeckt. Manche Reiseversicherungen decken Schäden an Mietwagen ab.',
    g5t: 'Verkehrsregeln und Sicherheit', g5p: 'Auf Sansibar herrscht Linksverkehr, und Polizeikontrollen sind häufig.',
    g6t: 'Abholung planen', g6p: 'Lege Abhol- und Rückgabeort sowie die Zeiten klar fest, um Verzögerungen und Missverständnisse zu vermeiden.',
    g7t: 'Früh buchen', g7p: 'Reserviere dein Fahrzeug rechtzeitig, besonders in der Hauptsaison, damit es sicher verfügbar ist.'
  },
  fr: {
    g_k: 'Guide essentiel', g_h: 'Avant de louer', g_p: 'Sept choses à savoir avant de louer et de conduire à Zanzibar.', nav_guide: 'Avant de louer',
    g1t: 'Permis de conduire local', g1p: "Pour conduire légalement à Zanzibar, vous pourriez avoir besoin d'un permis de conduire local. Si vous souhaitez que Rafiki Car Hire vous aide à l'obtenir, merci de fournir :",
    g1a: "Une copie de votre passeport.", g1b: "Une copie de votre permis de conduire valide.", g1c: "Frais de démarche pour le permis de conduire",
    g1n: "Merci d'envoyer les documents demandés à l'avance pour laisser le temps nécessaire à la démarche.",
    g2t: 'Prix transparents', g2p: 'Comparez le coût total, pas seulement le tarif journalier. Nos prix de location affichent chaque total permis compris et sans caution.',
    g3t: 'Le bon véhicule', g3p: 'Vérifiez que le véhicule correspond à votre voyage : type de routes, nombre de passagers et place pour les bagages.',
    g4t: 'Assurance', g4p: "Vérifiez ce que couvre l'assurance de votre location. Nos voitures sont assurées au tiers, la couverture de base exigée par la loi, qui ne couvre pas les dommages à la voiture louée elle-même. Certaines assurances voyage couvrent les dommages aux voitures de location.",
    g5t: 'Code de la route et sécurité', g5p: 'À Zanzibar, on roule à gauche et les contrôles de police sont fréquents.',
    g6t: 'Prise en charge', g6p: 'Confirmez clairement les lieux et horaires de prise en charge et de retour pour éviter retards et malentendus.',
    g7t: "Réservez à l'avance", g7p: "Réservez votre véhicule à l'avance, surtout en haute saison, pour être sûr qu'il soit disponible."
  },
  es: {
    g_k: 'Guía esencial', g_h: 'Antes de alquilar', g_p: 'Siete cosas que debes saber antes de alquilar y conducir en Zanzíbar.', nav_guide: 'Antes de alquilar',
    g1t: 'Permiso de conducir', g1p: "Para conducir legalmente en Zanzíbar, es posible que necesites un permiso de conducir local. Si quieres que Rafiki Car Hire te ayude a tramitarlo, envíanos:",
    g1a: "Una copia de tu pasaporte.", g1b: "Una copia de tu permiso de conducir vigente.", g1c: "Tarifa de gestión del permiso de conducir",
    g1n: "Envía los documentos necesarios con antelación para que haya tiempo suficiente para la gestión.",
    g2t: 'Precios transparentes', g2p: 'Compara el coste total, no solo la tarifa diaria. Nuestros precios de alquiler muestran cada total con el permiso incluido y sin depósito.',
    g3t: 'El vehículo adecuado', g3p: 'Comprueba que el vehículo se ajusta a tu viaje: tipo de terreno, número de pasajeros y espacio para el equipaje.',
    g4t: 'Cobertura del seguro', g4p: 'Comprueba qué cubre el seguro del alquiler. Nuestros coches tienen seguro a terceros, la cobertura básica obligatoria por ley, que no cubre los daños al propio coche alquilado. Algunos seguros de viaje cubren daños a coches de alquiler.',
    g5t: 'Normas de tráfico y seguridad', g5p: 'En Zanzíbar se conduce por la izquierda y los controles policiales son habituales.',
    g6t: 'Recogida y devolución', g6p: 'Confirma claramente los lugares y horarios de recogida y devolución para evitar retrasos o confusiones.',
    g7t: 'Reserva con antelación', g7p: 'Reserva tu vehículo con antelación, sobre todo en temporada alta, para asegurar la disponibilidad.'
  }
};
Object.keys(T3).forEach(l => Object.assign(T[l], T3[l]));

/* ===== SEO copy: delivery areas, fee FAQ, clearer headings ({fee} = delivery fee, {fee2} = twice the fee) ===== */
const T4 = {
  en: {
    nav_home: 'Home',
    hero_kicker: 'Self-drive car rental in Zanzibar', h1: 'Car hire in Zanzibar, your way',
    fleet_h: 'Rental cars in Zanzibar', book_h: 'Book your Zanzibar car rental',
    area_h: 'Where we deliver in Zanzibar',
    area_p: 'Pick up your car at the airport, in Stone Town or at your beach hotel. Delivery is free at Zanzibar Airport and in Zanzibar Town, and {fee} per pickup or return anywhere else.',
    area_paid: '{fee} each way', foot_areas: 'Car hire by area',
    q12: 'Do you charge for delivery and collection?',
    a12: 'Delivery and collection are free at Zanzibar Airport and in Zanzibar Town (Stone Town). Anywhere else costs {fee} for the pickup and {fee} for the return, so picking up in Nungwi and returning in Paje costs {fee2} in total. The booking summary shows these fees before you send your request.'
  },
  sw: {
    nav_home: 'Nyumbani',
    h1: 'Kodisha gari Zanzibar kwa uhuru wako',
    area_h: 'Tunakoleta magari Zanzibar',
    area_p: 'Chukua gari lako uwanja wa ndege, Stone Town au hotelini ufukweni. Kuleta ni bure uwanja wa ndege wa Zanzibar na Mji wa Zanzibar, na {fee} kwa kila kuleta au kurudisha maeneo mengine.',
    area_paid: '{fee} kila upande', foot_areas: 'Magari kwa eneo',
    q12: 'Je, mnatoza ada ya kuleta na kuchukua gari?',
    a12: 'Kuleta na kuchukua gari ni bure uwanja wa ndege wa Zanzibar na Mji wa Zanzibar (Stone Town). Maeneo mengine ni {fee} kwa kuleta na {fee} kwa kurudisha, hivyo kuchukua Nungwi na kurudisha Paje ni {fee2} kwa jumla. Muhtasari wa nafasi unaonyesha ada hizi kabla hujatuma ombi lako.'
  },
  it: {
    nav_home: 'Home',
    h1: 'Noleggio auto a Zanzibar, a modo tuo',
    area_h: 'Dove consegniamo a Zanzibar',
    area_p: "Ritira l'auto in aeroporto, a Stone Town o al tuo hotel sulla spiaggia. La consegna è gratuita all'aeroporto di Zanzibar e a Zanzibar Town, e costa {fee} per ogni consegna o riconsegna altrove.",
    area_paid: '{fee} a tratta', foot_areas: 'Noleggio per zona',
    q12: 'Consegna e ritiro sono a pagamento?',
    a12: "Consegna e ritiro sono gratuiti all'aeroporto di Zanzibar e a Zanzibar Town (Stone Town). Altrove costano {fee} per la consegna e {fee} per la riconsegna: ritiro a Nungwi e riconsegna a Paje costano {fee2} in totale. Il riepilogo mostra questi costi prima dell'invio della richiesta."
  },
  de: {
    nav_home: 'Startseite',
    h1: 'Mietwagen auf Sansibar, ganz nach deinem Plan',
    area_h: 'Wohin wir auf Sansibar liefern',
    area_p: 'Übernimm dein Auto am Flughafen, in Stone Town oder an deinem Strandhotel. Am Flughafen Sansibar und in Zanzibar Town ist die Lieferung kostenlos, überall sonst kostet jede Übergabe oder Rückgabe {fee}.',
    area_paid: '{fee} pro Strecke', foot_areas: 'Mietwagen nach Region',
    q12: 'Kosten Lieferung und Abholung extra?',
    a12: 'Lieferung und Abholung sind am Flughafen Sansibar und in Zanzibar Town (Stone Town) kostenlos. Überall sonst kosten die Übergabe {fee} und die Rückgabe {fee}; Abholung in Nungwi und Rückgabe in Paje kosten also insgesamt {fee2}. Die Buchungsübersicht zeigt diese Gebühren, bevor du die Anfrage sendest.'
  },
  fr: {
    nav_home: 'Accueil',
    h1: 'Location de voiture à Zanzibar, à votre façon',
    area_h: 'Où nous livrons à Zanzibar',
    area_p: "Récupérez votre voiture à l'aéroport, à Stone Town ou à votre hôtel en bord de mer. La livraison est gratuite à l'aéroport de Zanzibar et à Zanzibar Town, et coûte {fee} par prise en charge ou retour ailleurs.",
    area_paid: '{fee} par trajet', foot_areas: 'Location par région',
    q12: 'La livraison et la reprise sont-elles payantes ?',
    a12: "La livraison et la reprise sont gratuites à l'aéroport de Zanzibar et à Zanzibar Town (Stone Town). Ailleurs, elles coûtent {fee} pour la prise en charge et {fee} pour le retour : une prise en charge à Nungwi et un retour à Paje coûtent donc {fee2} au total. Le récapitulatif affiche ces frais avant l'envoi de votre demande."
  },
  es: {
    nav_home: 'Inicio',
    h1: 'Alquiler de coches en Zanzíbar, a tu manera',
    area_h: 'Dónde entregamos en Zanzíbar',
    area_p: 'Recoge tu coche en el aeropuerto, en Stone Town o en tu hotel de playa. La entrega es gratis en el aeropuerto de Zanzíbar y en Zanzibar Town, y cuesta {fee} por cada recogida o devolución en otros lugares.',
    area_paid: '{fee} por trayecto', foot_areas: 'Alquiler por zona',
    q12: '¿Cobráis por la entrega y la recogida?',
    a12: 'La entrega y la recogida son gratis en el aeropuerto de Zanzíbar y en Zanzibar Town (Stone Town). En otros lugares cuestan {fee} la recogida y {fee} la devolución, así que recoger en Nungwi y devolver en Paje cuesta {fee2} en total. El resumen de la reserva muestra estos cargos antes de enviar tu solicitud.'
  }
};
Object.keys(T4).forEach(l => Object.assign(T[l], T4[l]));

/* ===== Texts shared by the home page and the location pages ({place}, {price}, {n}, {fee}) ===== */
const T5 = {
  en: {
    meta_title: 'Car Hire Zanzibar | Rafiki Car Hire – Airport & Hotel Delivery',
    nav_areas: 'Delivery areas',
    v_Automatic: 'Automatic', v_Manual: 'Manual', v_Petrol: 'Petrol', v_Diesel: 'Diesel', v_Hybrid: 'Hybrid',
    pg_book: 'Book a car', pg_ask: 'Ask on WhatsApp', pg_deliv_to: 'Delivery to {place}', pg_fees: 'Delivery fees',
    pg_other: 'Other locations',
    pg_side_note: 'Pickup and return are charged separately. Zanzibar Airport and Zanzibar Town (Stone Town) are always free.',
    pg_from: 'Cars from {price} per day', pg_check: 'Check prices and book', pg_rec: 'Recommended cars for {place}',
    pg_popular: 'Popular rental cars in Zanzibar', pg_all: 'See all {n} cars', pg_more: 'Car hire in other parts of Zanzibar',
    pg_chip_free: 'Free delivery and return', pg_chip_paid: 'Hotel delivery {fee} each way',
    pg_cta_p: 'Message us on WhatsApp or book online in a minute.',
    pg_404_h: 'Sorry, this page does not exist',
    pg_404_p: 'The link may be old or mistyped. You can still book a car in Zanzibar from our home page.',
    'lk_car-hire-zanzibar-airport': 'Zanzibar Airport car rental', 'lk_car-hire-stone-town': 'Car hire in Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Car hire in Nungwi & Kendwa', 'lk_car-hire-matemwe-pongwe': 'Car hire in Matemwe & Pongwe',
    'lk_car-hire-paje-jambiani': 'Car hire in Paje & Jambiani', 'lk_car-hire-kizimkazi': 'Car hire in Kizimkazi',
    'lk_driving-in-zanzibar': 'Driving in Zanzibar guide',
    'lbl_car-hire-zanzibar-airport': 'Zanzibar Airport', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi & Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe & Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu & Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Driving in Zanzibar',
    'bk_car-hire-zanzibar-airport': 'Book a car at the airport', 'bk_car-hire-stone-town': 'Book a car for Stone Town',
    'bk_car-hire-nungwi-kendwa': 'Book a car for Nungwi', 'bk_car-hire-matemwe-pongwe': 'Book a car for Matemwe',
    'bk_car-hire-paje-jambiani': 'Book a car for Paje', 'bk_car-hire-kizimkazi': 'Book a car for Kizimkazi',
    'bk_driving-in-zanzibar': 'Book a car'
  },
  sw: {
    meta_title: 'Kukodisha Gari Zanzibar | Rafiki Car Hire – Uwanja wa Ndege na Hotelini',
    nav_areas: 'Maeneo tunayofikia',
    v_Automatic: 'Automatiki', v_Manual: 'Manuali', v_Petrol: 'Petroli', v_Diesel: 'Dizeli', v_Hybrid: 'Haibridi',
    pg_book: 'Weka nafasi ya gari', pg_ask: 'Uliza kupitia WhatsApp', pg_deliv_to: 'Kuleta gari: {place}', pg_fees: 'Ada za kuleta gari',
    pg_other: 'Maeneo mengine',
    pg_side_note: 'Kuleta na kurudisha hutozwa kila kimoja. Uwanja wa ndege wa Zanzibar na Mji wa Zanzibar (Stone Town) ni bure kila wakati.',
    pg_from: 'Magari kuanzia {price} kwa siku', pg_check: 'Angalia bei na weka nafasi', pg_rec: 'Magari tunayopendekeza: {place}',
    pg_popular: 'Magari maarufu ya kukodisha Zanzibar', pg_all: 'Tazama magari yote {n}', pg_more: 'Kukodisha gari maeneo mengine ya Zanzibar',
    pg_chip_free: 'Kuleta na kurudisha bure', pg_chip_paid: 'Kuleta hotelini {fee} kila upande',
    pg_cta_p: 'Tuandikie WhatsApp au weka nafasi mtandaoni kwa dakika moja.',
    pg_404_h: 'Samahani, ukurasa huu haupo',
    pg_404_p: 'Huenda kiungo ni cha zamani au kimekosewa. Bado unaweza kukodisha gari Zanzibar kupitia ukurasa wetu wa mwanzo.',
    'lk_car-hire-zanzibar-airport': 'Kukodisha gari uwanja wa ndege', 'lk_car-hire-stone-town': 'Kukodisha gari Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Kukodisha gari Nungwi na Kendwa', 'lk_car-hire-matemwe-pongwe': 'Kukodisha gari Matemwe na Pongwe',
    'lk_car-hire-paje-jambiani': 'Kukodisha gari Paje na Jambiani', 'lk_car-hire-kizimkazi': 'Kukodisha gari Kizimkazi',
    'lk_driving-in-zanzibar': 'Mwongozo wa kuendesha Zanzibar',
    'lbl_car-hire-zanzibar-airport': 'Uwanja wa ndege wa Zanzibar', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi na Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe na Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu na Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Kuendesha gari Zanzibar',
    'bk_car-hire-zanzibar-airport': 'Weka nafasi uwanja wa ndege', 'bk_car-hire-stone-town': 'Weka nafasi Stone Town',
    'bk_car-hire-nungwi-kendwa': 'Weka nafasi Nungwi', 'bk_car-hire-matemwe-pongwe': 'Weka nafasi Matemwe',
    'bk_car-hire-paje-jambiani': 'Weka nafasi Paje', 'bk_car-hire-kizimkazi': 'Weka nafasi Kizimkazi',
    'bk_driving-in-zanzibar': 'Weka nafasi ya gari'
  },
  it: {
    meta_title: 'Noleggio Auto Zanzibar | Rafiki Car Hire – Consegna in Aeroporto e Hotel',
    nav_areas: 'Zone di consegna',
    v_Automatic: 'Automatico', v_Manual: 'Manuale', v_Petrol: 'Benzina', v_Diesel: 'Diesel', v_Hybrid: 'Ibrido',
    pg_book: "Prenota un'auto", pg_ask: 'Chiedi su WhatsApp', pg_deliv_to: 'Consegna: {place}', pg_fees: 'Costi di consegna',
    pg_other: 'Altre località',
    pg_side_note: "Consegna e riconsegna si pagano separatamente. L'aeroporto di Zanzibar e Zanzibar Town (Stone Town) sono sempre gratuiti.",
    pg_from: 'Auto da {price} al giorno', pg_check: 'Vedi i prezzi e prenota', pg_rec: 'Auto consigliate: {place}',
    pg_popular: 'Le auto a noleggio più richieste a Zanzibar', pg_all: 'Vedi tutte le {n} auto', pg_more: 'Noleggio auto in altre zone di Zanzibar',
    pg_chip_free: 'Consegna e riconsegna gratuite', pg_chip_paid: 'Consegna in hotel {fee} a tratta',
    pg_cta_p: 'Scrivici su WhatsApp o prenota online in un minuto.',
    pg_404_h: 'Spiacenti, questa pagina non esiste',
    pg_404_p: "Il link potrebbe essere vecchio o errato. Puoi comunque prenotare un'auto a Zanzibar dalla nostra home page.",
    'lk_car-hire-zanzibar-airport': "Noleggio auto all'aeroporto di Zanzibar", 'lk_car-hire-stone-town': 'Noleggio auto a Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Noleggio auto a Nungwi e Kendwa', 'lk_car-hire-matemwe-pongwe': 'Noleggio auto a Matemwe e Pongwe',
    'lk_car-hire-paje-jambiani': 'Noleggio auto a Paje e Jambiani', 'lk_car-hire-kizimkazi': 'Noleggio auto a Kizimkazi',
    'lk_driving-in-zanzibar': 'Guidare a Zanzibar: la guida',
    'lbl_car-hire-zanzibar-airport': 'Aeroporto di Zanzibar', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi e Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe e Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu e Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Guidare a Zanzibar',
    'bk_car-hire-zanzibar-airport': "Prenota un'auto in aeroporto", 'bk_car-hire-stone-town': "Prenota un'auto a Stone Town",
    'bk_car-hire-nungwi-kendwa': "Prenota un'auto a Nungwi", 'bk_car-hire-matemwe-pongwe': "Prenota un'auto a Matemwe",
    'bk_car-hire-paje-jambiani': "Prenota un'auto a Paje", 'bk_car-hire-kizimkazi': "Prenota un'auto a Kizimkazi",
    'bk_driving-in-zanzibar': "Prenota un'auto"
  },
  de: {
    meta_title: 'Mietwagen Sansibar | Rafiki Car Hire – Lieferung zu Flughafen & Hotel',
    nav_areas: 'Liefergebiete',
    v_Automatic: 'Automatik', v_Manual: 'Schaltgetriebe', v_Petrol: 'Benzin', v_Diesel: 'Diesel', v_Hybrid: 'Hybrid',
    pg_book: 'Auto buchen', pg_ask: 'Per WhatsApp fragen', pg_deliv_to: 'Lieferung: {place}', pg_fees: 'Liefergebühren',
    pg_other: 'Andere Orte',
    pg_side_note: 'Übergabe und Rückgabe werden getrennt berechnet. Der Flughafen Sansibar und Zanzibar Town (Stone Town) sind immer kostenlos.',
    pg_from: 'Autos ab {price} pro Tag', pg_check: 'Preise prüfen und buchen', pg_rec: 'Empfohlene Autos: {place}',
    pg_popular: 'Beliebte Mietwagen auf Sansibar', pg_all: 'Alle {n} Autos ansehen', pg_more: 'Mietwagen in anderen Teilen Sansibars',
    pg_chip_free: 'Lieferung und Rückgabe kostenlos', pg_chip_paid: 'Hotellieferung {fee} pro Strecke',
    pg_cta_p: 'Schreib uns auf WhatsApp oder buche in einer Minute online.',
    pg_404_h: 'Diese Seite gibt es leider nicht',
    pg_404_p: 'Der Link ist vielleicht veraltet oder falsch. Über unsere Startseite kannst du trotzdem ein Auto auf Sansibar buchen.',
    'lk_car-hire-zanzibar-airport': 'Mietwagen am Flughafen Sansibar', 'lk_car-hire-stone-town': 'Mietwagen in Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Mietwagen in Nungwi & Kendwa', 'lk_car-hire-matemwe-pongwe': 'Mietwagen in Matemwe & Pongwe',
    'lk_car-hire-paje-jambiani': 'Mietwagen in Paje & Jambiani', 'lk_car-hire-kizimkazi': 'Mietwagen in Kizimkazi',
    'lk_driving-in-zanzibar': 'Ratgeber: Autofahren auf Sansibar',
    'lbl_car-hire-zanzibar-airport': 'Flughafen Sansibar', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi & Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe & Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu & Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Autofahren auf Sansibar',
    'bk_car-hire-zanzibar-airport': 'Auto am Flughafen buchen', 'bk_car-hire-stone-town': 'Auto in Stone Town buchen',
    'bk_car-hire-nungwi-kendwa': 'Auto in Nungwi buchen', 'bk_car-hire-matemwe-pongwe': 'Auto in Matemwe buchen',
    'bk_car-hire-paje-jambiani': 'Auto in Paje buchen', 'bk_car-hire-kizimkazi': 'Auto in Kizimkazi buchen',
    'bk_driving-in-zanzibar': 'Auto buchen'
  },
  fr: {
    meta_title: 'Location de Voiture Zanzibar | Rafiki Car Hire – Livraison Aéroport & Hôtel',
    nav_areas: 'Zones de livraison',
    v_Automatic: 'Automatique', v_Manual: 'Manuelle', v_Petrol: 'Essence', v_Diesel: 'Diesel', v_Hybrid: 'Hybride',
    pg_book: 'Réserver une voiture', pg_ask: 'Demander sur WhatsApp', pg_deliv_to: 'Livraison : {place}', pg_fees: 'Frais de livraison',
    pg_other: 'Autres lieux',
    pg_side_note: "La livraison et le retour sont facturés séparément. L'aéroport de Zanzibar et Zanzibar Town (Stone Town) sont toujours gratuits.",
    pg_from: 'Voitures à partir de {price} par jour', pg_check: 'Voir les prix et réserver', pg_rec: 'Voitures recommandées : {place}',
    pg_popular: 'Voitures de location populaires à Zanzibar', pg_all: 'Voir les {n} voitures', pg_more: 'Location de voiture ailleurs à Zanzibar',
    pg_chip_free: 'Livraison et retour gratuits', pg_chip_paid: "Livraison à l'hôtel {fee} par trajet",
    pg_cta_p: 'Écrivez-nous sur WhatsApp ou réservez en ligne en une minute.',
    pg_404_h: "Désolé, cette page n'existe pas",
    pg_404_p: "Le lien est peut-être ancien ou erroné. Vous pouvez toujours réserver une voiture à Zanzibar depuis notre page d'accueil.",
    'lk_car-hire-zanzibar-airport': "Location de voiture à l'aéroport de Zanzibar", 'lk_car-hire-stone-town': 'Location de voiture à Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Location de voiture à Nungwi et Kendwa', 'lk_car-hire-matemwe-pongwe': 'Location de voiture à Matemwe et Pongwe',
    'lk_car-hire-paje-jambiani': 'Location de voiture à Paje et Jambiani', 'lk_car-hire-kizimkazi': 'Location de voiture à Kizimkazi',
    'lk_driving-in-zanzibar': 'Guide : conduire à Zanzibar',
    'lbl_car-hire-zanzibar-airport': 'Aéroport de Zanzibar', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi et Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe et Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu et Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Conduire à Zanzibar',
    'bk_car-hire-zanzibar-airport': "Réserver à l'aéroport", 'bk_car-hire-stone-town': 'Réserver à Stone Town',
    'bk_car-hire-nungwi-kendwa': 'Réserver à Nungwi', 'bk_car-hire-matemwe-pongwe': 'Réserver à Matemwe',
    'bk_car-hire-paje-jambiani': 'Réserver à Paje', 'bk_car-hire-kizimkazi': 'Réserver à Kizimkazi',
    'bk_driving-in-zanzibar': 'Réserver une voiture'
  },
  es: {
    meta_title: 'Alquiler de Coches Zanzíbar | Rafiki Car Hire – Entrega en Aeropuerto y Hotel',
    nav_areas: 'Zonas de entrega',
    v_Automatic: 'Automático', v_Manual: 'Manual', v_Petrol: 'Gasolina', v_Diesel: 'Diésel', v_Hybrid: 'Híbrido',
    pg_book: 'Reservar un coche', pg_ask: 'Preguntar por WhatsApp', pg_deliv_to: 'Entrega: {place}', pg_fees: 'Cargos de entrega',
    pg_other: 'Otros lugares',
    pg_side_note: 'La entrega y la devolución se cobran por separado. El aeropuerto de Zanzíbar y Zanzibar Town (Stone Town) son siempre gratis.',
    pg_from: 'Coches desde {price} al día', pg_check: 'Ver precios y reservar', pg_rec: 'Coches recomendados: {place}',
    pg_popular: 'Coches de alquiler populares en Zanzíbar', pg_all: 'Ver los {n} coches', pg_more: 'Alquiler de coches en otras zonas de Zanzíbar',
    pg_chip_free: 'Entrega y devolución gratis', pg_chip_paid: 'Entrega en hotel {fee} por trayecto',
    pg_cta_p: 'Escríbenos por WhatsApp o reserva online en un minuto.',
    pg_404_h: 'Lo sentimos, esta página no existe',
    pg_404_p: 'Puede que el enlace sea antiguo o incorrecto. Aun así puedes reservar un coche en Zanzíbar desde nuestra página de inicio.',
    'lk_car-hire-zanzibar-airport': 'Alquiler de coches en el aeropuerto de Zanzíbar', 'lk_car-hire-stone-town': 'Alquiler de coches en Stone Town',
    'lk_car-hire-nungwi-kendwa': 'Alquiler de coches en Nungwi y Kendwa', 'lk_car-hire-matemwe-pongwe': 'Alquiler de coches en Matemwe y Pongwe',
    'lk_car-hire-paje-jambiani': 'Alquiler de coches en Paje y Jambiani', 'lk_car-hire-kizimkazi': 'Alquiler de coches en Kizimkazi',
    'lk_driving-in-zanzibar': 'Guía para conducir en Zanzíbar',
    'lbl_car-hire-zanzibar-airport': 'Aeropuerto de Zanzíbar', 'lbl_car-hire-stone-town': 'Stone Town',
    'lbl_car-hire-nungwi-kendwa': 'Nungwi y Kendwa', 'lbl_car-hire-matemwe-pongwe': 'Matemwe y Pongwe',
    'lbl_car-hire-paje-jambiani': 'Paje, Jambiani, Bwejuu y Michamvi', 'lbl_car-hire-kizimkazi': 'Kizimkazi',
    'lbl_driving-in-zanzibar': 'Conducir en Zanzíbar',
    'bk_car-hire-zanzibar-airport': 'Reservar en el aeropuerto', 'bk_car-hire-stone-town': 'Reservar en Stone Town',
    'bk_car-hire-nungwi-kendwa': 'Reservar en Nungwi', 'bk_car-hire-matemwe-pongwe': 'Reservar en Matemwe',
    'bk_car-hire-paje-jambiani': 'Reservar en Paje', 'bk_car-hire-kizimkazi': 'Reservar en Kizimkazi',
    'bk_driving-in-zanzibar': 'Reservar un coche'
  }
};
Object.keys(T5).forEach(l => Object.assign(T[l], T5[l]));

/* ===== Booking extras, flight information, simplified locations and the new home hero ===== */
const T6 = {
  en: {
    hh_a: 'Discover Zanzibar', hh_b: 'your way.',
    hh_p: 'Explore the beauty of Zanzibar with reliable car hire, flexible pickup locations, and the freedom to travel at your own pace.',
    cta_explore: 'Explore our cars', cta_ride: 'Book your ride', hh_free: 'Free airport & town delivery', hh_scroll: 'Scroll',
    fs_you: 'Your details', fs_trip: 'Car and dates', fs_loc: 'Pickup and return',
    f_email: 'Email', opt: 'optional',
    l_air: 'Zanzibar Airport', l_town: 'Zanzibar Town', l_outside: 'Outside Free Zone',
    fee_note: 'Pickup and return are free at Zanzibar Airport and Zanzibar Town. Anywhere outside the free zone costs {fee} for pickup and {fee} for return.',
    fl_h: 'Flight information',
    fl_p: 'Please provide your flight details so we can coordinate your arrival and car pickup smoothly.',
    fl_air: 'Airline name', fl_air_ph: 'e.g. Qatar Airways', fl_no: 'Flight number', fl_no_ph: 'e.g. QR1349',
    fl_date: 'Arrival date', fl_time: 'Arrival time', fl_port: 'Arrival airport', fl_notes: 'Additional flight notes',
    fl_notes_ph: 'Connecting flight, expected delays, number of passengers…',
    fl_note: 'Flight details help us coordinate your airport pickup, and we track delays so your car is ready when you land.',
    x_h: 'Optional extras', x_seat: 'Baby seat', x_seat_p: 'Child safety seat, fitted and ready at handover.',
    sum_car: 'Vehicle', sum_dur: 'Rental duration', sum_pick: 'Pickup', sum_ret: 'Return', sum_seat: 'Baby seat',
    sel: 'Selected', not_sel: 'Not added', e_email: 'Please check your email address.'
  },
  sw: {
    hh_a: 'Gundua Zanzibar', hh_b: 'kwa njia yako.',
    hh_p: 'Furahia uzuri wa Zanzibar kwa magari ya kuaminika, sehemu rahisi za kuchukua gari na uhuru wa kusafiri kwa mwendo wako.',
    cta_explore: 'Tazama magari yetu', cta_ride: 'Weka nafasi ya gari', hh_free: 'Kuleta bure uwanja wa ndege na mjini', hh_scroll: 'Shuka',
    fs_you: 'Taarifa zako', fs_trip: 'Gari na tarehe', fs_loc: 'Kuchukua na kurudisha',
    f_email: 'Barua pepe', opt: 'hiari',
    l_air: 'Uwanja wa Ndege wa Zanzibar', l_town: 'Mji wa Zanzibar', l_outside: 'Nje ya eneo la bure',
    fee_note: 'Kuchukua na kurudisha ni bure Uwanja wa Ndege wa Zanzibar na Mji wa Zanzibar. Nje ya eneo la bure ni {fee} kwa kuchukua na {fee} kwa kurudisha.',
    fl_h: 'Taarifa za ndege',
    fl_p: 'Tafadhali tupe taarifa za ndege yako ili tupange vizuri kuwasili kwako na kukabidhiwa gari.',
    fl_air: 'Jina la shirika la ndege', fl_air_ph: 'mf. Qatar Airways', fl_no: 'Namba ya ndege', fl_no_ph: 'mf. QR1349',
    fl_date: 'Tarehe ya kuwasili', fl_time: 'Saa ya kuwasili', fl_port: 'Uwanja wa kuwasili', fl_notes: 'Maelezo mengine ya ndege',
    fl_notes_ph: 'Ndege ya kuunganisha, uwezekano wa kuchelewa, idadi ya abiria…',
    fl_note: 'Taarifa za ndege hutusaidia kupanga kukupokea uwanjani, na tunafuatilia ucheleweshaji ili gari liwe tayari ukitua.',
    x_h: 'Huduma za ziada', x_seat: 'Kiti cha mtoto', x_seat_p: 'Kiti cha usalama cha mtoto, kimefungwa tayari wakati wa kukabidhi.',
    sum_car: 'Gari', sum_dur: 'Muda wa kukodi', sum_pick: 'Kuchukua', sum_ret: 'Kurudisha', sum_seat: 'Kiti cha mtoto',
    sel: 'Kimechaguliwa', not_sel: 'Hakijaongezwa', e_email: "Tafadhali hakiki barua pepe yako."
  },
  it: {
    hh_a: 'Scopri Zanzibar', hh_b: 'a modo tuo.',
    hh_p: "Esplora la bellezza di Zanzibar con un noleggio auto affidabile, luoghi di ritiro flessibili e la libertà di viaggiare con i tuoi tempi.",
    cta_explore: 'Scopri le nostre auto', cta_ride: 'Prenota la tua auto', hh_free: 'Consegna gratuita in aeroporto e in città', hh_scroll: 'Scorri',
    fs_you: 'I tuoi dati', fs_trip: 'Auto e date', fs_loc: 'Ritiro e riconsegna',
    f_email: 'Email', opt: 'facoltativo',
    l_air: 'Aeroporto di Zanzibar', l_town: 'Zanzibar Town', l_outside: 'Fuori dalla zona gratuita',
    fee_note: "Ritiro e riconsegna sono gratuiti all'aeroporto di Zanzibar e a Zanzibar Town. Fuori dalla zona gratuita costano {fee} per il ritiro e {fee} per la riconsegna.",
    fl_h: 'Informazioni sul volo',
    fl_p: "Indicaci i dettagli del tuo volo così possiamo coordinare al meglio il tuo arrivo e la consegna dell'auto.",
    fl_air: 'Compagnia aerea', fl_air_ph: 'es. Qatar Airways', fl_no: 'Numero di volo', fl_no_ph: 'es. QR1349',
    fl_date: 'Data di arrivo', fl_time: 'Ora di arrivo', fl_port: 'Aeroporto di arrivo', fl_notes: 'Note aggiuntive sul volo',
    fl_notes_ph: 'Volo in coincidenza, possibili ritardi, numero di passeggeri…',
    fl_note: "I dettagli del volo ci aiutano a organizzare il ritiro in aeroporto; seguiamo eventuali ritardi così l'auto è pronta quando atterri.",
    x_h: 'Extra facoltativi', x_seat: 'Seggiolino per bambini', x_seat_p: 'Seggiolino di sicurezza, montato e pronto alla consegna.',
    sum_car: 'Veicolo', sum_dur: 'Durata del noleggio', sum_pick: 'Ritiro', sum_ret: 'Riconsegna', sum_seat: 'Seggiolino',
    sel: 'Selezionato', not_sel: 'Non aggiunto', e_email: "Controlla il tuo indirizzo email."
  },
  de: {
    hh_a: 'Entdecke Sansibar', hh_b: 'auf deine Art.',
    hh_p: 'Erlebe die Schönheit Sansibars mit zuverlässigen Mietwagen, flexiblen Abholorten und der Freiheit, in deinem eigenen Tempo zu reisen.',
    cta_explore: 'Unsere Autos entdecken', cta_ride: 'Jetzt Auto buchen', hh_free: 'Kostenlose Lieferung an Flughafen & Stadt', hh_scroll: 'Scrollen',
    fs_you: 'Deine Daten', fs_trip: 'Auto und Daten', fs_loc: 'Abholung und Rückgabe',
    f_email: 'E-Mail', opt: 'optional',
    l_air: 'Flughafen Sansibar', l_town: 'Sansibar-Stadt', l_outside: 'Außerhalb der Gratiszone',
    fee_note: 'Abholung und Rückgabe sind am Flughafen Sansibar und in Sansibar-Stadt kostenlos. Außerhalb der Gratiszone kosten sie {fee} für die Abholung und {fee} für die Rückgabe.',
    fl_h: 'Fluginformationen',
    fl_p: 'Bitte gib deine Flugdaten an, damit wir deine Ankunft und die Fahrzeugübergabe reibungslos abstimmen können.',
    fl_air: 'Fluggesellschaft', fl_air_ph: 'z. B. Qatar Airways', fl_no: 'Flugnummer', fl_no_ph: 'z. B. QR1349',
    fl_date: 'Ankunftsdatum', fl_time: 'Ankunftszeit', fl_port: 'Ankunftsflughafen', fl_notes: 'Weitere Hinweise zum Flug',
    fl_notes_ph: 'Anschlussflug, mögliche Verspätung, Anzahl der Reisenden…',
    fl_note: 'Mit deinen Flugdaten planen wir die Übergabe am Flughafen und verfolgen Verspätungen, damit dein Auto bei der Landung bereitsteht.',
    x_h: 'Optionale Extras', x_seat: 'Kindersitz', x_seat_p: 'Kindersitz, eingebaut und bereit bei der Übergabe.',
    sum_car: 'Fahrzeug', sum_dur: 'Mietdauer', sum_pick: 'Abholung', sum_ret: 'Rückgabe', sum_seat: 'Kindersitz',
    sel: 'Ausgewählt', not_sel: 'Nicht gewählt', e_email: "Bitte überprüfe deine E-Mail-Adresse."
  },
  fr: {
    hh_a: 'Découvrez Zanzibar', hh_b: 'à votre façon.',
    hh_p: "Explorez la beauté de Zanzibar avec une location de voiture fiable, des lieux de prise en charge flexibles et la liberté de voyager à votre rythme.",
    cta_explore: 'Découvrir nos voitures', cta_ride: 'Réserver votre voiture', hh_free: "Livraison gratuite à l'aéroport et en ville", hh_scroll: 'Défiler',
    fs_you: 'Vos coordonnées', fs_trip: 'Voiture et dates', fs_loc: 'Prise en charge et retour',
    f_email: 'E-mail', opt: 'facultatif',
    l_air: 'Aéroport de Zanzibar', l_town: 'Zanzibar Town', l_outside: 'Hors zone gratuite',
    fee_note: "La prise en charge et le retour sont gratuits à l'aéroport de Zanzibar et à Zanzibar Town. Hors zone gratuite, ils coûtent {fee} pour la prise en charge et {fee} pour le retour.",
    fl_h: 'Informations de vol',
    fl_p: 'Indiquez-nous les détails de votre vol afin que nous puissions coordonner votre arrivée et la remise du véhicule en toute simplicité.',
    fl_air: 'Compagnie aérienne', fl_air_ph: 'ex. Qatar Airways', fl_no: 'Numéro de vol', fl_no_ph: 'ex. QR1349',
    fl_date: "Date d'arrivée", fl_time: "Heure d'arrivée", fl_port: "Aéroport d'arrivée", fl_notes: 'Remarques sur le vol',
    fl_notes_ph: 'Vol de correspondance, retard prévu, nombre de passagers…',
    fl_note: "Les détails du vol nous aident à organiser la remise à l'aéroport, et nous suivons les retards pour que votre voiture soit prête à l'atterrissage.",
    x_h: 'Options supplémentaires', x_seat: 'Siège bébé', x_seat_p: 'Siège auto pour enfant, installé et prêt à la remise.',
    sum_car: 'Véhicule', sum_dur: 'Durée de location', sum_pick: 'Prise en charge', sum_ret: 'Retour', sum_seat: 'Siège bébé',
    sel: 'Sélectionné', not_sel: 'Non ajouté', e_email: "Veuillez vérifier votre adresse e-mail."
  },
  es: {
    hh_a: 'Descubre Zanzíbar', hh_b: 'a tu manera.',
    hh_p: 'Explora la belleza de Zanzíbar con un alquiler de coches fiable, lugares de recogida flexibles y la libertad de viajar a tu ritmo.',
    cta_explore: 'Ver nuestros coches', cta_ride: 'Reserva tu coche', hh_free: 'Entrega gratis en aeropuerto y ciudad', hh_scroll: 'Desliza',
    fs_you: 'Tus datos', fs_trip: 'Coche y fechas', fs_loc: 'Recogida y devolución',
    f_email: 'Correo electrónico', opt: 'opcional',
    l_air: 'Aeropuerto de Zanzíbar', l_town: 'Ciudad de Zanzíbar', l_outside: 'Fuera de la zona gratuita',
    fee_note: 'La recogida y la devolución son gratis en el aeropuerto de Zanzíbar y en la ciudad de Zanzíbar. Fuera de la zona gratuita cuestan {fee} la recogida y {fee} la devolución.',
    fl_h: 'Información del vuelo',
    fl_p: 'Indícanos los datos de tu vuelo para coordinar tu llegada y la entrega del coche sin complicaciones.',
    fl_air: 'Aerolínea', fl_air_ph: 'p. ej. Qatar Airways', fl_no: 'Número de vuelo', fl_no_ph: 'p. ej. QR1349',
    fl_date: 'Fecha de llegada', fl_time: 'Hora de llegada', fl_port: 'Aeropuerto de llegada', fl_notes: 'Notas adicionales del vuelo',
    fl_notes_ph: 'Vuelo de conexión, posibles retrasos, número de pasajeros…',
    fl_note: 'Los datos del vuelo nos ayudan a coordinar la entrega en el aeropuerto, y seguimos los retrasos para que tu coche esté listo al aterrizar.',
    x_h: 'Extras opcionales', x_seat: 'Silla de bebé', x_seat_p: 'Silla de seguridad infantil, instalada y lista en la entrega.',
    sum_car: 'Vehículo', sum_dur: 'Duración del alquiler', sum_pick: 'Recogida', sum_ret: 'Devolución', sum_seat: 'Silla de bebé',
    sel: 'Seleccionada', not_sel: 'No añadida', e_email: "Revisa tu correo electrónico."
  }
};
Object.keys(T6).forEach(l => Object.assign(T[l], T6[l]));

// Pickup / return address fields (shown per location type)
const T7 = {
  en: {
    ad_air_pickup: 'We meet you in the arrivals hall with a name sign. Add your flight in step 4 so we can follow any delays.',
    ad_air_return: 'Return the car at the airport before your flight. We meet you at the departures drop-off.',
    ad_area: 'Area / destination', ad_area_ph: 'e.g. Nungwi, Paje, Kendwa...',
    ad_ins: 'Additional instructions',
    ad_pickup_town: 'Pickup address', ad_pickup_outside: 'Exact pickup address',
    ad_return_town: 'Return address', ad_return_outside: 'Exact return address',
    adp_pickup_town: 'Enter your hotel name, street, building or exact pickup address in Zanzibar Town.',
    adp_pickup_outside: 'Enter your hotel name, resort, street or exact pickup location.',
    adp_return_town: 'Enter your hotel name, street, building or exact return address in Zanzibar Town.',
    adp_return_outside: 'Enter your hotel name, resort, street or exact return location.',
    adi_pickup_air: 'e.g. Meet me at the arrivals exit', adi_return_air: 'e.g. Meet me at the departures drop-off',
    adi_ph: 'e.g. Meet at main reception',
    e_area: 'Please enter the area or destination.', e_addr: 'Please enter the exact address.'
  },
  sw: {
    ad_air_pickup: 'Tutakupokea ukumbi wa kuwasili tukiwa na kibao chenye jina lako. Andika ndege yako katika hatua ya 4 ili tufuatilie ucheleweshaji.',
    ad_air_return: 'Rudisha gari uwanja wa ndege kabla ya safari yako. Tutakutana nawe eneo la kushukia abiria wanaoondoka.',
    ad_area: 'Eneo / unakoenda', ad_area_ph: 'mf. Nungwi, Paje, Kendwa...',
    ad_ins: 'Maelekezo ya ziada',
    ad_pickup_town: 'Anwani ya kuchukua gari', ad_pickup_outside: 'Anwani kamili ya kuchukua gari',
    ad_return_town: 'Anwani ya kurudisha gari', ad_return_outside: 'Anwani kamili ya kurudisha gari',
    adp_pickup_town: 'Andika jina la hoteli, mtaa, jengo au anwani kamili ya kuchukua gari Mji wa Zanzibar.',
    adp_pickup_outside: 'Andika jina la hoteli, resort, mtaa au mahali kamili pa kuchukua gari.',
    adp_return_town: 'Andika jina la hoteli, mtaa, jengo au anwani kamili ya kurudisha gari Mji wa Zanzibar.',
    adp_return_outside: 'Andika jina la hoteli, resort, mtaa au mahali kamili pa kurudisha gari.',
    adi_pickup_air: 'mf. Nikute mlango wa kutokea wa wanaowasili', adi_return_air: 'mf. Nikute eneo la kushukia wanaoondoka',
    adi_ph: 'mf. Mapokezi makuu, nipigie ukifika',
    e_area: 'Tafadhali andika eneo au unakoenda.', e_addr: 'Tafadhali andika anwani kamili.'
  },
  it: {
    ad_air_pickup: "Ti aspettiamo nella sala arrivi con un cartello con il tuo nome. Aggiungi il volo al punto 4 così seguiamo eventuali ritardi.",
    ad_air_return: "Riconsegna l'auto in aeroporto prima del volo. Ci troviamo all'area di sosta delle partenze.",
    ad_area: 'Zona / destinazione', ad_area_ph: 'es. Nungwi, Paje, Kendwa...',
    ad_ins: 'Istruzioni aggiuntive',
    ad_pickup_town: 'Indirizzo di consegna', ad_pickup_outside: 'Indirizzo esatto di consegna',
    ad_return_town: 'Indirizzo di riconsegna', ad_return_outside: 'Indirizzo esatto di riconsegna',
    adp_pickup_town: "Inserisci il nome dell'hotel, la via, l'edificio o l'indirizzo esatto di consegna a Zanzibar Town.",
    adp_pickup_outside: "Inserisci il nome dell'hotel, del resort, la via o il luogo esatto di consegna.",
    adp_return_town: "Inserisci il nome dell'hotel, la via, l'edificio o l'indirizzo esatto di riconsegna a Zanzibar Town.",
    adp_return_outside: "Inserisci il nome dell'hotel, del resort, la via o il luogo esatto di riconsegna.",
    adi_pickup_air: "es. Incontriamoci all'uscita arrivi", adi_return_air: "es. Incontriamoci all'area partenze",
    adi_ph: "es. Reception principale, chiamami quando arrivi",
    e_area: 'Inserisci la zona o la destinazione.', e_addr: "Inserisci l'indirizzo esatto."
  },
  de: {
    ad_air_pickup: 'Wir erwarten dich in der Ankunftshalle mit einem Namensschild. Gib in Schritt 4 deinen Flug an, damit wir Verspätungen verfolgen können.',
    ad_air_return: 'Gib das Auto vor deinem Abflug am Flughafen zurück. Wir treffen dich an der Abflug-Vorfahrt.',
    ad_area: 'Gebiet / Ziel', ad_area_ph: 'z. B. Nungwi, Paje, Kendwa...',
    ad_ins: 'Zusätzliche Hinweise',
    ad_pickup_town: 'Übergabeadresse', ad_pickup_outside: 'Genaue Übergabeadresse',
    ad_return_town: 'Rückgabeadresse', ad_return_outside: 'Genaue Rückgabeadresse',
    adp_pickup_town: 'Hotelname, Straße, Gebäude oder genaue Übergabeadresse in Zanzibar Town eingeben.',
    adp_pickup_outside: 'Hotel, Resort, Straße oder genauen Übergabeort eingeben.',
    adp_return_town: 'Hotelname, Straße, Gebäude oder genaue Rückgabeadresse in Zanzibar Town eingeben.',
    adp_return_outside: 'Hotel, Resort, Straße oder genauen Rückgabeort eingeben.',
    adi_pickup_air: 'z. B. Treffpunkt am Ausgang der Ankunftshalle', adi_return_air: 'z. B. Treffpunkt an der Abflug-Vorfahrt',
    adi_ph: 'z. B. Hauptrezeption, bitte bei Ankunft anrufen',
    e_area: 'Bitte gib das Gebiet oder Ziel ein.', e_addr: 'Bitte gib die genaue Adresse ein.'
  },
  fr: {
    ad_air_pickup: "Nous vous attendons dans le hall des arrivées avec une pancarte à votre nom. Indiquez votre vol à l'étape 4 pour que nous suivions les retards.",
    ad_air_return: "Rendez la voiture à l'aéroport avant votre vol. Nous vous retrouvons au dépose-minute des départs.",
    ad_area: 'Zone / destination', ad_area_ph: 'ex. Nungwi, Paje, Kendwa...',
    ad_ins: 'Instructions supplémentaires',
    ad_pickup_town: 'Adresse de livraison', ad_pickup_outside: 'Adresse exacte de livraison',
    ad_return_town: 'Adresse de retour', ad_return_outside: 'Adresse exacte de retour',
    adp_pickup_town: "Indiquez le nom de l'hôtel, la rue, le bâtiment ou l'adresse exacte de livraison à Zanzibar Town.",
    adp_pickup_outside: "Indiquez l'hôtel, le resort, la rue ou le lieu exact de livraison.",
    adp_return_town: "Indiquez le nom de l'hôtel, la rue, le bâtiment ou l'adresse exacte de retour à Zanzibar Town.",
    adp_return_outside: "Indiquez l'hôtel, le resort, la rue ou le lieu exact de retour.",
    adi_pickup_air: 'ex. Retrouvez-moi à la sortie des arrivées', adi_return_air: 'ex. Retrouvez-moi au dépose-minute des départs',
    adi_ph: "ex. Réception principale, appelez-moi à l'arrivée",
    e_area: 'Veuillez indiquer la zone ou la destination.', e_addr: "Veuillez indiquer l'adresse exacte."
  },
  es: {
    ad_air_pickup: 'Te esperamos en la sala de llegadas con un cartel con tu nombre. Añade tu vuelo en el paso 4 para seguir posibles retrasos.',
    ad_air_return: 'Devuelve el coche en el aeropuerto antes de tu vuelo. Nos vemos en la zona de salidas.',
    ad_area: 'Zona / destino', ad_area_ph: 'p. ej. Nungwi, Paje, Kendwa...',
    ad_ins: 'Instrucciones adicionales',
    ad_pickup_town: 'Dirección de entrega', ad_pickup_outside: 'Dirección exacta de entrega',
    ad_return_town: 'Dirección de devolución', ad_return_outside: 'Dirección exacta de devolución',
    adp_pickup_town: 'Escribe el nombre del hotel, la calle, el edificio o la dirección exacta de entrega en Zanzibar Town.',
    adp_pickup_outside: 'Escribe el hotel, resort, calle o lugar exacto de entrega.',
    adp_return_town: 'Escribe el nombre del hotel, la calle, el edificio o la dirección exacta de devolución en Zanzibar Town.',
    adp_return_outside: 'Escribe el hotel, resort, calle o lugar exacto de devolución.',
    adi_pickup_air: 'p. ej. Nos vemos en la salida de llegadas', adi_return_air: 'p. ej. Nos vemos en la zona de salidas',
    adi_ph: 'p. ej. Recepción principal, llámame al llegar',
    e_area: 'Indica la zona o el destino.', e_addr: 'Indica la dirección exacta.'
  }
};
Object.keys(T7).forEach(l => Object.assign(T[l], T7[l]));

// Baby seats quantity selector
const T8 = {
  en: { x_multi: "{seat} each when you take 2 or more", x_seat: 'Baby seats', x_seat_p: 'Child safety seats, fitted and ready at handover.', x_each: 'per seat, per booking', x_less: 'Remove a baby seat', x_more: 'Add a baby seat', sum_seat: 'Baby seats', e_seat: 'Please choose a valid number of baby seats.' },
  sw: { x_multi: "{seat} kila kimoja ukichukua viti 2 au zaidi", x_seat: 'Viti vya watoto', x_seat_p: 'Viti vya usalama vya watoto, vimefungwa tayari wakati wa kukabidhi.', x_each: 'kwa kiti, kwa oda', x_less: 'Punguza kiti cha mtoto', x_more: 'Ongeza kiti cha mtoto', sum_seat: 'Viti vya watoto', e_seat: 'Tafadhali chagua idadi sahihi ya viti vya watoto.' },
  it: { x_multi: "{seat} ciascuno se ne prendi 2 o più", x_seat: 'Seggiolini per bambini', x_seat_p: 'Seggiolini di sicurezza, montati e pronti alla consegna.', x_each: 'a seggiolino, per prenotazione', x_less: 'Togli un seggiolino', x_more: 'Aggiungi un seggiolino', sum_seat: 'Seggiolini', e_seat: 'Scegli un numero valido di seggiolini.' },
  de: { x_multi: "{seat} pro Sitz ab 2 Sitzen", x_seat: 'Kindersitze', x_seat_p: 'Kindersitze, eingebaut und bereit bei der Übergabe.', x_each: 'pro Sitz, pro Buchung', x_less: 'Einen Kindersitz entfernen', x_more: 'Einen Kindersitz hinzufügen', sum_seat: 'Kindersitze', e_seat: 'Bitte wähle eine gültige Anzahl Kindersitze.' },
  fr: { x_multi: "{seat} chacun à partir de 2 sièges", x_seat: 'Sièges bébé', x_seat_p: 'Sièges auto pour enfant, installés et prêts à la remise.', x_each: 'par siège, par réservation', x_less: 'Retirer un siège bébé', x_more: 'Ajouter un siège bébé', sum_seat: 'Sièges bébé', e_seat: 'Veuillez choisir un nombre valide de sièges bébé.' },
  es: { x_multi: "{seat} cada una si llevas 2 o más", x_seat: 'Sillas de bebé', x_seat_p: 'Sillas de seguridad infantil, instaladas y listas en la entrega.', x_each: 'por silla, por reserva', x_less: 'Quitar una silla de bebé', x_more: 'Añadir una silla de bebé', sum_seat: 'Sillas de bebé', e_seat: 'Elige un número válido de sillas de bebé.' }
};
Object.keys(T8).forEach(l => Object.assign(T[l], T8[l]));

/* ===== Helpers ===== */
let lang = 'en', filter = 'all';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t = k => String(T[lang][k] || T.en[k] || k.replace(/^v_/, ''))
  .replace(/\{fee2\}/g, money(CONFIG.deliveryFee * 2)).replace(/\{fee\}/g, money(CONFIG.deliveryFee));
const money = n => CONFIG.currency + Number(n).toFixed(2);
const waLink = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const dayCount = () => {
  const a = $('#from').value, b = $('#to').value;
  return a && b ? Math.round((new Date(b + 'T00:00') - new Date(a + 'T00:00')) / 864e5) : 0;
};
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const fmtDate = iso => {
  if (!iso) return '—';
  try { return new Date(iso + 'T00:00').toLocaleDateString(lang, { weekday: 'short', day: 'numeric', month: 'short' }); }
  catch (e) { return iso; }
};

// Line icons (24x24, stroke)
const ICONS = {
  seats: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  trans: '<circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v8M12 8v8M18 8v3a1 1 0 0 1-1 1H6"/>',
  fuel: '<path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M2 22h14M6 7h6M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
  year: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>'
};
const icon = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

// Placeholder car picture (used when image is empty)
function carImg(c) {
  if (c.image) return c.image;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160'><rect width='320' height='160' fill='#E8D4B0'/><path d='M36 112l22-34q10-16 30-16h124q18 0 30 16l30 28q14 4 14 16v6H36z' fill='${c.color}'/><path d='M80 78q6-10 18-10h46v36H66zM156 68h50q10 0 18 10l14 26h-82z' fill='#fff' opacity='.85'/><circle cx='92' cy='126' r='19' fill='#06364D'/><circle cx='236' cy='126' r='19' fill='#06364D'/><circle cx='92' cy='126' r='7' fill='#F3E7D3'/><circle cx='236' cy='126' r='7' fill='#F3E7D3'/></svg>`;
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Descriptive image text, e.g. "Toyota Hilux 2010 pickup for hire in Zanzibar"
const TYPE_ALT = { suv: 'SUV', small: 'compact car', van: 'minivan', pickup: 'pickup' };
const carAlt = c => `${c.name}${c.year ? ' ' + c.year : ''} ${TYPE_ALT[c.type] || 'car'} for hire in Zanzibar`;
// Analytics hook (see analytics.js). Does nothing until a GA4 ID is set there.
const track = (name, params) => { try { window.rafikiTrack && window.rafikiTrack(name, params); } catch (e) { } };

const specsHTML = c => `
  <li>${icon('seats')}${c.seats} ${esc(t('seats'))}</li>
  <li>${icon('trans')}${esc(t('v_' + c.trans))}</li>
  ${c.fuel ? `<li>${icon('fuel')}${esc(t('v_' + c.fuel))}</li>` : ''}
  ${c.year ? `<li>${icon('year')}${c.year}</li>` : ''}`;

/* ===== Scroll reveal ===== */
const io = 'IntersectionObserver' in window && !reduceMotion
  ? new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' })
  : null;
const observe = els => els.forEach(el => io ? io.observe(el) : el.classList.add('in'));

/* ===== Fleet ===== */
function renderFilters() {
  const types = ['all', ...new Set(CONFIG.fleet.map(c => c.type).filter(Boolean))];
  $('#filters').innerHTML = types.map(k => {
    const n = k === 'all' ? CONFIG.fleet.length : CONFIG.fleet.filter(c => c.type === k).length;
    return `<button type="button" class="fchip${k === filter ? ' on' : ''}" data-filter="${k}" aria-pressed="${k === filter}">${esc(t('cat_' + k))}<span>${n}</span></button>`;
  }).join('');
}

function renderFleet() {
  renderFilters();
  const list = CONFIG.fleet.filter(c => filter === 'all' || c.type === filter);
  $('#fleet').innerHTML = list.length ? list.map((c, i) => `
    <article class="card reveal" style="--i:${i % 4}">
      <button type="button" class="card-media" data-details="${c.id}" aria-label="${esc(t('details'))}: ${esc(c.name)}">
        <img src="${carImg(c)}" alt="${esc(carAlt(c))}" width="800" height="533" loading="lazy" decoding="async">
        ${c.type ? `<span class="tag">${esc(t('cat_' + c.type))}</span>` : ''}
        <span class="peek">${icon('expand')}</span>
      </button>
      <div class="cb">
        <h3>${esc(c.name)}</h3>
        <ul class="specs">${specsHTML(c)}</ul>
        <div class="card-foot">
          <p class="price"><b>${money(c.price)}</b><span>${esc(t('per_day'))}</span></p>
          <a class="btn btn-b" href="#book" data-car="${c.id}">${esc(t('book_car'))}${icon('arrow')}</a>
        </div>
      </div>
    </article>`).join('')
    : `<p class="empty">${esc(t('empty'))}</p>`;
  observe($$('#fleet .reveal'));

  const sel = $('#car'), keep = sel.value;
  sel.innerHTML = `<option value="">${esc(t('f_choose'))}</option>` +
    CONFIG.fleet.map(c => `<option value="${c.id}">${esc(c.name)} ${c.year ? '(' + c.year + ') ' : ''}· ${money(c.price)} ${esc(t('per_day'))}</option>`).join('');
  sel.value = keep;
}

/* ===== Car details modal ===== */
const modal = $('#carModal');
function openCar(id) {
  const c = CONFIG.fleet.find(x => x.id === id);
  if (!c || !modal.showModal) return;
  $('#mImg').src = carImg(c); $('#mImg').alt = carAlt(c);
  track('view_item', { item_id: c.id, item_name: c.name, value: c.price, currency: 'USD' });
  $('#mType').textContent = c.type ? t('cat_' + c.type) : '';
  $('#mTitle').textContent = c.name;
  $('#mSpecs').innerHTML = specsHTML(c);
  $('#mPrice').innerHTML = `<b>${money(c.price)}</b> <span>${esc(t('per_day'))}</span>`;
  $('#mBook').dataset.car = c.id;
  modal.showModal();
  document.documentElement.classList.add('lock');
}
modal.addEventListener('close', () => document.documentElement.classList.remove('lock'));
modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) modal.close(); });

/* ===== Pricing (single source of truth) ===== */
const findLoc = id => CONFIG.locations.find(l => l.id === id);
const findArea = id => (CONFIG.areas || []).find(a => a.id === id);
const locName = (id, inLang = true) => {
  const l = findLoc(id);
  if (!l) return '—';
  return inLang && l.i18n ? t(l.i18n) : l.name;
};
// Unknown or missing locations are never treated as free.
const locFee = id => (findLoc(id) || {}).free ? 0 : CONFIG.deliveryFee;
const feeText = fee => fee === 0 ? t('free') : money(fee);
const needsAddr = id => !!(findLoc(id) || {}).address;
const needsArea = id => !!(findLoc(id) || {}).area;
const SIDES = ['pickup', 'return'];
const clean = (v, max = 120) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max);
const cents = n => Math.max(0, Math.round((Number(n) || 0) * 100) / 100);

// Builds the full price breakdown from raw inputs. Used for the live summary AND
// recalculated from scratch on submit, so the WhatsApp message never relies on what is shown on screen.
// Pickup and return fees are charged independently (outside -> outside = 2 x fee).
// Whole number of baby seats between 0 and CONFIG.babySeatMax (anything else becomes 0 / the max).
const seatQty = v => Math.min(CONFIG.babySeatMax, Math.max(0, Math.floor(Number(v)) || 0));
function quote({ carId, from, to, pickupLoc, returnLoc, babySeats }) {
  const car = CONFIG.fleet.find(x => x.id === carId) || null;
  const days = from && to ? Math.round((new Date(to + 'T00:00') - new Date(from + 'T00:00')) / 864e5) : 0;
  const rental = car && days > 0 ? cents(car.price * days) : 0;
  const pickupFee = cents(locFee(pickupLoc));
  const returnFee = cents(locFee(returnLoc));
  const locationFees = cents(pickupFee + returnFee);
  // Baby Seat Total = number of seats x price per seat
  const seats = seatQty(babySeats), seatPrice = cents(seats > 1 ? CONFIG.babySeatMultiFee : CONFIG.babySeatFee), babySeatTotal = cents(seats * seatPrice);
  return {
    car, days, rental, pickupLoc, returnLoc, pickupFee, returnFee, locationFees,
    babySeats: seats, seatPrice, babySeatTotal,
    total: cents(rental + locationFees + babySeatTotal), complete: !!car && days > 0
  };
}
const formQuote = () => quote({
  carId: $('#car').value, from: $('#from').value, to: $('#to').value,
  pickupLoc: $('#pickupLoc').value, returnLoc: $('#returnLoc').value,
  babySeats: $('#babySeats').value
});

function renderLocations() {
  const label = l => `${l.i18n ? t(l.i18n) : l.name} · ${l.free ? t('free') : '+' + money(CONFIG.deliveryFee)}`;
  $$('.loc-select').forEach(sel => {
    const keep = sel.value || 'airport';
    sel.innerHTML = CONFIG.locations.map(l => `<option value="${l.id}">${esc(label(l))}</option>`).join('');
    sel.value = findLoc(keep) ? keep : 'airport';
  });
  $('#feeNote').textContent = t('fee_note');
  $('#seatPrice').textContent = money(CONFIG.babySeatFee);
  $('#seatDeal').textContent = t('x_multi').replace('{seat}', money(CONFIG.babySeatMultiFee));
  $('#babySeats').max = CONFIG.babySeatMax;
}

// Show only the address fields that fit the chosen location, for pickup and return separately:
// airport -> info + optional instructions; town -> address (required); outside -> area + exact address (required).
function syncExact() {
  SIDES.forEach(s => {
    const type = $(`#${s}Loc`).value, air = type === 'airport';
    const toggle = (wrap, on) => {
      const input = wrap.querySelector('input, textarea');
      wrap.hidden = !on; input.required = on;
      if (!on) input.removeAttribute('aria-invalid');
    };
    $(`#${s}Box`).dataset.type = type;
    $(`#${s}Info`).hidden = !air;
    toggle($(`#${s}AreaWrap`), needsArea(type));
    toggle($(`#${s}AddrWrap`), needsAddr(type));
    if (needsAddr(type)) {
      $(`#${s}AddrLbl`).textContent = t(`ad_${s}_${type}`);
      $(`#${s}Addr`).placeholder = t(`adp_${s}_${type}`);
    }
    $(`#${s}Ins`).placeholder = t(air ? `adi_${s}_air` : 'adi_ph');
  });
}
// The address details of one side, cleaned and limited to what the location type uses.
const addrOf = (s, type, src) => ({
  area: needsArea(type) ? clean(src[`${s}_area`], 80) : '',
  address: needsAddr(type) ? clean(src[`${s}_address`], 160) : '',
  instructions: clean(src[`${s}_instructions`], 200)
});
const addrForm = s => addrOf(s, $(`#${s}Loc`).value, {
  [`${s}_area`]: $(`#${s}Area`).value, [`${s}_address`]: $(`#${s}Addr`).value, [`${s}_instructions`]: $(`#${s}Ins`).value
});

const pill = (el, fee) => {
  el.textContent = fee === 0 ? t('free') : '+' + money(fee);
  el.className = 'fee-pill ' + (fee === 0 ? 'is-free' : 'is-paid');
};

/* ===== Booking summary ===== */
function estimate() {
  const q = formQuote(), c = q.car, d = q.days;
  pill($('#pickupFeePill'), q.pickupFee);
  pill($('#returnFeePill'), q.returnFee);

  const row = (label, value, cls = '') => `<div class="${cls}"><dt>${esc(label)}</dt><dd>${value}</dd></div>`;
  const fee = f => `<span class="fee-pill ${f === 0 ? 'is-free' : 'is-paid'}">${esc(feeText(f))}</span>`;
  const where = (id, s) => {
    const a = addrForm(s);
    return [locName(id), a.area, a.address].filter(Boolean).map(esc).join(' · ');
  };
  $('#sumTrip').innerHTML =
    row(t('sum_pick'), `${esc(fmtDate($('#from').value))}<small>${where(q.pickupLoc, 'pickup')}</small>`) +
    row(t('sum_ret'), `${esc(fmtDate($('#to').value))}<small>${where(q.returnLoc, 'return')}</small>`) +
    row(t('sum_dur'), d > 0 ? `${d} ${esc(t('days'))}` : '—');
  $('#sumMoney').innerHTML =
    row(t('sum_rental'), c && d > 0 ? `${money(q.rental)}<small>${money(c.price)} × ${d}</small>` : '—') +
    row(t('sum_pfee'), fee(q.pickupFee)) +
    row(t('sum_rfee'), fee(q.returnFee)) +
    row(t('sum_loc'), `<b>${q.locationFees === 0 ? esc(t('free')) : money(q.locationFees)}</b>`, 'sub') +
    row(t('sum_seat'), q.babySeats
      ? `${money(q.babySeatTotal)}<small>${q.babySeats} × ${money(q.seatPrice)}</small>`
      : `<span class="sum-off">${esc(t('not_sel'))}</span>`);
  // Quantity selector state
  $('#seatTotal').textContent = money(q.babySeatTotal);
  $('#seatMinus').disabled = q.babySeats <= 0;
  $('#seatPlus').disabled = q.babySeats >= CONFIG.babySeatMax;
  $('#seatCard').classList.toggle('is-on', q.babySeats > 0);

  const tot = $('#total');
  const next = q.complete ? money(q.total) : '—';
  if (tot.textContent !== next) { tot.textContent = next; tot.classList.remove('bump'); void tot.offsetWidth; tot.classList.add('bump'); }
  $('#sumCar').textContent = c ? c.name : t('sum_none');
  $('#sumRate').textContent = c ? `${money(c.price)} ${t('per_day')}` : '';
  $('#sumHint').textContent = q.complete ? '' : t('est_none');
  const img = $('#estImg');
  img.hidden = !c; $('#sumPh').hidden = !!c;
  if (c) { img.src = carImg(c); img.alt = c.name; }
}

/* ===== Language ===== */
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.title = t('meta_title');
  $$('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  $$('[data-ph]').forEach(e => e.placeholder = t(e.dataset.ph));
  $$('[data-review]').forEach(e => {
    const [q, who] = t(e.dataset.review).split('”');
    e.innerHTML = `<p>${esc(q)}”</p>${who ? `<cite>${esc(who.trim())}</cite>` : ''}`;
  });
  $$('[data-i18n-label]').forEach(e => e.setAttribute('aria-label', t(e.dataset.i18nLabel)));
  $$('.lang').forEach(s => s.value = l);
  renderFleet();
  renderLocations();
  syncExact();
  estimate();
  try { localStorage.setItem('lang', l); } catch (e) { }
}

/* ===== Toast feedback ===== */
let toastTimer;
function toast(text, type) {
  const el = $('#toast');
  el.textContent = text; el.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 4200);
}

/* ===== Counters ===== */
function countUp(el) {
  const end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, pre = el.dataset.pre || '';
  const out = v => el.textContent = pre + v.toFixed(dec);
  if (reduceMotion) return out(end);
  let start = null;
  const step = ts => {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / 1400, 1);
    out(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ===== Init ===== */
const hdr = $('#hdr');
$$('[data-biz]').forEach(e => e.textContent = CONFIG.business);
$$('[data-wa]').forEach(e => { e.href = waLink(); e.target = '_blank'; e.rel = 'noopener'; });
$('#year').textContent = new Date().getFullYear();
$('#contactInfo').innerHTML =
  `<a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">💬 ${CONFIG.phone || "+" + CONFIG.whatsapp}</a>
   <a class="addr" href="tel:+${CONFIG.whatsapp}">📞 ${esc(CONFIG.phone)}</a>
   <a class="addr" href="https://maps.google.com/?q=${encodeURIComponent(CONFIG.address)}" target="_blank" rel="noopener">📍 ${esc(CONFIG.address)}</a>`;

// Hero stats come from the fleet data
const minPrice = Math.min(...CONFIG.fleet.map(c => c.price));
$('#statCars').dataset.count = CONFIG.fleet.length;
$('#statFrom').dataset.count = minPrice;
$('#statFrom').dataset.pre = CONFIG.currency;
$('#heroFrom').textContent = money(minPrice);
$('#statCars').textContent = CONFIG.fleet.length;
$('#statFrom').textContent = CONFIG.currency + Math.round(minPrice);
const statIO = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { countUp(en.target); statIO.unobserve(en.target); }
}), { threshold: .6 }) : null;
$$('[data-count]').forEach(el => statIO ? statIO.observe(el) : countUp(el));

// Date limits (local time)
const now = new Date();
const todayISO = new Date(now - now.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
$('#from').min = $('#to').min = $('#arrDate').min = todayISO;
// Arrival date follows the pickup date until the customer sets it themselves.
let arrTouched = false;
$('#arrDate').addEventListener('change', () => { arrTouched = true; });
$('#from').addEventListener('change', e => {
  $('#to').min = e.target.value || todayISO;
  if (!arrTouched) $('#arrDate').value = e.target.value;
  estimate();
});
$('#to').addEventListener('change', estimate);
$('#car').addEventListener('change', estimate);
// Baby seats: − / + buttons, typing and arrow keys all stay within 0..max.
const seatsInput = $('#babySeats');
const setSeats = n => {
  const next = seatQty(n);
  if (String(next) !== seatsInput.value) seatsInput.value = next;
  seatsInput.removeAttribute('aria-invalid');
  estimate();
};
$$('.qty-btn').forEach(b => b.addEventListener('click', () => {
  setSeats(seatQty(seatsInput.value) + Number(b.dataset.step));
  const card = $('#seatCard'); card.classList.remove('pop'); void card.offsetWidth; card.classList.add('pop');
}));
seatsInput.addEventListener('input', () => { if (seatsInput.value !== '') setSeats(seatsInput.value); else estimate(); });
seatsInput.addEventListener('change', () => setSeats(seatsInput.value));
seatsInput.addEventListener('focus', () => seatsInput.select());
$$('.loc-select').forEach(s => s.addEventListener('change', () => {
  syncExact(); estimate();
  // Jump to the first address field the customer now has to fill in.
  const first = $$(`#${s.id.replace('Loc', 'Box')} .exact:not([hidden]) :is(input, textarea)`).find(i => !i.value.trim());
  if (first) first.focus({ preventScroll: true });
}));
SIDES.forEach(s => ['Area', 'Addr'].forEach(k => $(`#${s}${k}`).addEventListener('input', estimate)));
$('#arrPort').value = CONFIG.arrivalAirport;

// Mobile menu
const setMenu = open => {
  $('#nav').classList.toggle('open', open);
  $('#menu').setAttribute('aria-expanded', open);
  hdr.classList.toggle('menu-open', open);
  document.documentElement.classList.toggle('lock', open);
};
$('#menu').addEventListener('click', () => setMenu(!$('#nav').classList.contains('open')));
addEventListener('keydown', e => { if (e.key === 'Escape' && $('#nav').classList.contains('open')) setMenu(false); });

document.addEventListener('click', e => {
  // "Book this car" buttons preselect the car
  const a = e.target.closest('[data-car]');
  if (a) {
    if (modal.open) modal.close();
    $('#car').value = a.dataset.car; $('#car').removeAttribute('aria-invalid'); estimate();
    const fc = $('.book-grid');
    fc.classList.remove('flash'); void fc.offsetWidth; fc.classList.add('flash');
    setTimeout(() => $('#form [name=name]').focus({ preventScroll: true }), 700);
  }
  const d = e.target.closest('[data-details]');
  if (d) openCar(d.dataset.details);
  const f = e.target.closest('[data-filter]');
  if (f && f.dataset.filter !== filter) { filter = f.dataset.filter; renderFleet(); }
  if (e.target.closest('#nav a')) setMenu(false);
});

$$('.lang').forEach(s => s.addEventListener('change', e => applyLang(e.target.value)));

// Clear the error state of a field as soon as the user fixes it
['input', 'change'].forEach(ev => $('#form').addEventListener(ev, e => e.target.removeAttribute('aria-invalid')));

// Submit: validate, then open WhatsApp with a prepared message
$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target)), msg = $('#msg');
  const c = CONFIG.fleet.find(x => x.id === f.car);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const fail = (k, bad) => {
    msg.textContent = t(k); msg.className = 'msg err';
    toast(t(k), 'err');
    bad.forEach(n => e.target.elements[n].setAttribute('aria-invalid', 'true'));
    e.target.elements[bad[0]].focus();
  };
  const isDate = v => /^\d{4}-\d{2}-\d{2}$/.test(v || '');
  const empty = ['name', 'phone', 'car', 'from', 'to'].filter(n => !clean(f[n]));
  if (empty.length) return fail('e_req', empty);
  if (!c) return fail('e_req', ['car']);
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) return fail('e_email', ['email']);
  if (!isDate(f.from) || new Date(f.from + 'T00:00') < today) return fail('e_past', ['from']);
  if (!isDate(f.to) || dayCount() < 1) return fail('e_date', ['to']);
  // Only the known location types are accepted.
  if (!findLoc(f.pickup_loc)) return fail('e_req', ['pickup_loc']);
  if (!findLoc(f.return_loc)) return fail('e_req', ['return_loc']);
  // Zanzibar Town needs an exact address; Outside Free Zone needs the area and the exact address.
  const addr = {};
  for (const s of SIDES) {
    const type = f[`${s}_loc`], a = addr[s] = addrOf(s, type, f);
    if (needsArea(type) && !a.area) return fail('e_area', [`${s}_area`]);
    if (needsAddr(type) && !a.address) return fail('e_addr', [`${s}_address`]);
  }
  if (f.arrival_date && !isDate(f.arrival_date)) return fail('e_req', ['arrival_date']);

  // Recalculate everything from the raw form values (not from the on-screen summary).
  // Baby seats must be a whole number from 0 to the maximum.
  const seatsRaw = String(f.baby_seats == null || f.baby_seats === '' ? '0' : f.baby_seats).trim();
  if (!/^\d{1,2}$/.test(seatsRaw) || +seatsRaw > CONFIG.babySeatMax) return fail('e_seat', ['baby_seats']);
  const q = quote({ carId: f.car, from: f.from, to: f.to, pickupLoc: f.pickup_loc, returnLoc: f.return_loc, babySeats: +seatsRaw });
  if (!q.complete || !Number.isFinite(q.total) || q.total < 0) return fail('e_req', ['car']);

  // One record with every field, named for a future backend / database.
  const booking = {
    customer_name: clean(f.name, 80), customer_email: clean(f.email, 120), customer_phone: fullPhone(clean(f.phone, 30), f.dial || '255'),
    car_id: c.id, car_name: c.name, daily_rate: c.price,
    pickup_date: f.from, return_date: f.to, rental_days: q.days, rental_price: q.rental,
    pickup_location_type: q.pickupLoc, pickup_area: addr.pickup.area, pickup_exact_address: addr.pickup.address,
    pickup_instructions: addr.pickup.instructions, pickup_fee: q.pickupFee,
    return_location_type: q.returnLoc, return_area: addr.return.area, return_exact_address: addr.return.address,
    return_instructions: addr.return.instructions, return_fee: q.returnFee,
    total_location_fee: q.locationFees,
    baby_seat_quantity: q.babySeats, baby_seat_unit_price: q.seatPrice, baby_seat_total: q.babySeatTotal,
    airline_name: clean(f.airline, 60), flight_number: clean(f.flight_no, 20).toUpperCase(),
    arrival_date: f.arrival_date || '', arrival_time: /^\d{2}:\d{2}/.test(f.arrival_time || '') ? f.arrival_time.slice(0, 5) : '',
    arrival_airport: clean(f.arrival_airport, 120) || CONFIG.arrivalAirport, flight_notes: clean(f.flight_notes, 400),
    notes: clean(f.notes, 600), final_total: q.total, currency: 'USD', language: lang, created_at: new Date().toISOString()
  };

  // The message goes to the business, so it is always in English.
  const enDate = iso => { try { return new Date(iso + 'T00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }); } catch (err) { return iso; } };
  const fee = n => n === 0 ? 'FREE' : money(n);
  const dur = n => `${n} ${n === 1 ? 'day' : 'days'}`;
  const locLabel = id => (findLoc(id) || {}).name || id;
  // [label, value] pairs; empty values are left out, and a section with nothing in it is skipped.
  const section = (title, pairs) => {
    const lines = pairs.filter(([, v]) => v !== '' && v !== null && v !== undefined).map(([k, v]) => `${k}: ${v}`);
    return lines.length ? [title, ...lines].join('\n') : '';
  };
  // The arrival date is pre-filled from the pickup date, so on its own it does not count as flight details.
  const hasFlight = !!(booking.airline_name || booking.flight_number || booking.arrival_time || booking.flight_notes || arrTouched);
  if (!hasFlight) booking.arrival_date = '';
  const text = [
    `NEW CAR RENTAL BOOKING – ${CONFIG.business.toUpperCase()}`,
    section('CUSTOMER INFORMATION', [['Name', booking.customer_name], ['Email', booking.customer_email], ['Phone', booking.customer_phone]]),
    section('VEHICLE INFORMATION', [
      ['Vehicle', `${c.name}${c.year ? ' (' + c.year + ')' : ''}`],
      ['Rental Start Date', enDate(booking.pickup_date)], ['Rental End Date', enDate(booking.return_date)],
      ['Rental Duration', dur(booking.rental_days)]
    ]),
    section('PICKUP DETAILS', [
      ['Location Type', locLabel(booking.pickup_location_type)], ['Area', booking.pickup_area],
      ['Exact Address', booking.pickup_exact_address], ['Instructions', booking.pickup_instructions],
      ['Pickup Fee', fee(booking.pickup_fee)]
    ]),
    section('RETURN DETAILS', [
      ['Location Type', locLabel(booking.return_location_type)], ['Area', booking.return_area],
      ['Exact Address', booking.return_exact_address], ['Return Instructions', booking.return_instructions],
      ['Return Fee', fee(booking.return_fee)]
    ]),
    hasFlight ? section('FLIGHT INFORMATION', [
      ['Airline', booking.airline_name], ['Flight Number', booking.flight_number],
      ['Arrival Date', booking.arrival_date ? enDate(booking.arrival_date) : ''], ['Arrival Time', booking.arrival_time],
      ['Arrival Airport', booking.arrival_airport], ['Additional Notes', booking.flight_notes]
    ]) : '',
    section('ADDITIONAL SERVICES', [
      ['Baby Seats', booking.baby_seat_quantity ? `${booking.baby_seat_quantity} x ${money(booking.baby_seat_unit_price)}${booking.baby_seat_quantity > 1 ? ' (multi-seat price)' : ''}` : 'None'],
      ['Baby Seat Total', money(booking.baby_seat_total)]
    ]),
    section('PAYMENT SUMMARY', [
      ['Vehicle Rental', `${money(booking.rental_price)} (${money(c.price)} x ${dur(booking.rental_days)})`],
      ['Pickup Fee', fee(booking.pickup_fee)], ['Return Fee', fee(booking.return_fee)],
      ['Location Fees', money(booking.total_location_fee)],
      ['Baby Seats', money(booking.baby_seat_total)],
      ['TOTAL', money(booking.final_total)]
    ]),
    booking.notes ? `NOTES\n${booking.notes}` : ''
  ].filter(Boolean).join('\n\n');

  window.lastBooking = booking; // separate fields, ready for a future backend
  msg.textContent = t('ok'); msg.className = 'msg ok';
  toast(t('ok'), 'ok');
  const btn = $('#sendBtn');
  btn.classList.add('is-sent'); setTimeout(() => btn.classList.remove('is-sent'), 2400);
  track('generate_lead', { value: booking.final_total, currency: 'USD', item_id: c.id, item_name: c.name, days: booking.rental_days, pickup: q.pickupLoc, return: q.returnLoc, baby_seats: booking.baby_seat_quantity });
  window.open(waLink(text), '_blank', 'noopener');
});

// Header state, scroll spy and subtle hero parallax
const heroBg = $('.hero-bg'), heroCar = $('.hero-visual');
let ticking = false;
const onScroll = () => {
  hdr.classList.toggle('scrolled', scrollY > 24);
  if (!reduceMotion && scrollY < innerHeight) {
    if (heroBg) heroBg.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
    if (heroCar) heroCar.style.transform = `translate3d(${scrollY * 0.06}px, ${scrollY * -0.06}px, 0)`;
  }
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

if ('IntersectionObserver' in window) {
  const links = $$('#nav a[href^="#"]');
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { const id = en.target.classList.contains('hero') ? 'top' : en.target.id; links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id)); }
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const h = l.getAttribute('href'); const s = h === '#top' ? $('.hero') : $(h); if (s) { if (h === '#top') s.id = s.id || 'top-hero'; spy.observe(s); } });
}

observe($$('.reveal'));

// Pause the hero's animations while it is off-screen (saves battery and keeps scrolling smooth)
if ('IntersectionObserver' in window) {
  const heroEl = $('.hero');
  new IntersectionObserver(([en]) => heroEl.classList.toggle('is-off', !en.isIntersecting)).observe(heroEl);
}

let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
applyLang(T[saved] ? saved : 'en');

// Links from the location pages can preselect a car and pickup place: ?car=toyota-ist&pickup=nungwi#book
// Beach areas (nungwi, paje…) are booked as "Outside Free Zone" with the area filled in; the customer adds the exact address.
(() => {
  const p = new URLSearchParams(location.search);
  const car = p.get('car'), pick = p.get('pickup');
  if (car && CONFIG.fleet.some(c => c.id === car)) $('#car').value = car;
  const area = pick && findArea(pick);
  if (pick && findLoc(pick)) { $('#pickupLoc').value = pick; $('#returnLoc').value = pick; }
  else if (area) {
    $('#pickupLoc').value = $('#returnLoc').value = 'outside';
    $('#pickupArea').value = $('#returnArea').value = area.name;
  }
  syncExact();
  if (car || pick) estimate();
})();

/* ===== Phone country code picker (flags) ===== */
Object.assign(T.en, { cc_search: 'Search country or code', cc_label: 'Country code' });
Object.assign(T.sw, { cc_search: 'Tafuta nchi au namba', cc_label: 'Namba ya nchi' });
Object.assign(T.it, { cc_search: 'Cerca paese o prefisso', cc_label: 'Prefisso internazionale' });
Object.assign(T.de, { cc_search: 'Land oder Vorwahl suchen', cc_label: 'Ländervorwahl' });
Object.assign(T.fr, { cc_search: 'Rechercher un pays ou un indicatif', cc_label: 'Indicatif du pays' });
Object.assign(T.es, { cc_search: 'Buscar país o prefijo', cc_label: 'Prefijo del país' });

const COUNTRIES = [
  ['tz', 'Tanzania', '255'],
  ['ar', 'Argentina', '54'], ['au', 'Australia', '61'], ['at', 'Austria', '43'], ['be', 'Belgium', '32'],
  ['br', 'Brazil', '55'], ['ca', 'Canada', '1'], ['cn', 'China', '86'], ['cz', 'Czechia', '420'],
  ['dk', 'Denmark', '45'], ['eg', 'Egypt', '20'], ['et', 'Ethiopia', '251'], ['fi', 'Finland', '358'],
  ['fr', 'France', '33'], ['de', 'Germany', '49'], ['gr', 'Greece', '30'], ['hu', 'Hungary', '36'],
  ['in', 'India', '91'], ['ie', 'Ireland', '353'], ['il', 'Israel', '972'], ['it', 'Italy', '39'],
  ['jp', 'Japan', '81'], ['ke', 'Kenya', '254'], ['my', 'Malaysia', '60'], ['mx', 'Mexico', '52'],
  ['nl', 'Netherlands', '31'], ['nz', 'New Zealand', '64'], ['ng', 'Nigeria', '234'], ['no', 'Norway', '47'],
  ['om', 'Oman', '968'], ['pk', 'Pakistan', '92'], ['pl', 'Poland', '48'], ['pt', 'Portugal', '351'],
  ['qa', 'Qatar', '974'], ['ro', 'Romania', '40'], ['ru', 'Russia', '7'], ['rw', 'Rwanda', '250'],
  ['sa', 'Saudi Arabia', '966'], ['sg', 'Singapore', '65'], ['za', 'South Africa', '27'], ['kr', 'South Korea', '82'],
  ['es', 'Spain', '34'], ['se', 'Sweden', '46'], ['ch', 'Switzerland', '41'], ['tr', 'Türkiye', '90'],
  ['ug', 'Uganda', '256'], ['ua', 'Ukraine', '380'], ['ae', 'United Arab Emirates', '971'],
  ['gb', 'United Kingdom', '44'], ['us', 'United States', '1']
];
const flag = iso => `<img class="cc-flag" src="https://flagcdn.com/w40/${iso}.png" alt="" width="24" height="18" loading="lazy" />`;

const cc = { iso: 'tz', touched: false };
const ccBtn = $('#ccBtn'), ccPop = $('#ccPop'), ccList = $('#ccList'), ccSearch = $('#ccSearch');

function ccSet(iso, byUser) {
  const c = COUNTRIES.find(x => x[0] === iso) || COUNTRIES[0];
  cc.iso = c[0];
  if (byUser) cc.touched = true;
  $('#dial').value = c[2];
  ccBtn.innerHTML = `${flag(c[0])}<span class="cc-code">+${c[2]}</span>`;
  ccBtn.setAttribute('aria-label', `${t('cc_label')}: ${ccName(c[0], c[1])} +${c[2]}`);
  $$('#ccList [role=option]').forEach(o => o.setAttribute('aria-selected', o.dataset.iso === c[0]));
}

let regionNames = null;
const ccName = (iso, en) => {
  try {
    if (!regionNames || regionNames.lang !== lang) regionNames = { lang, dn: new Intl.DisplayNames([lang, 'en'], { type: 'region' }) };
    return regionNames.dn.of(iso.toUpperCase()) || en;
  } catch (e) { return en; }
};
function ccRender(filter = '') {
  const q = filter.trim().toLowerCase().replace(/^\+/, '');
  const coll = new Intl.Collator(lang);
  const list = COUNTRIES.map(([iso, en, dial]) => [iso, ccName(iso, en), dial, en])
    .sort((a, b) => (a[0] === 'tz' ? -1 : b[0] === 'tz' ? 1 : coll.compare(a[1], b[1])));
  const rows = list.filter(([iso, name, dial, en]) => !q || name.toLowerCase().includes(q) || en.toLowerCase().includes(q) || dial.startsWith(q) || iso === q);
  ccList.innerHTML = rows.map(([iso, name, dial]) =>
    `<li role="option" tabindex="-1" data-iso="${iso}" aria-selected="${iso === cc.iso}">${flag(iso)}<span class="cc-name">${esc(name)}</span><span class="cc-dial">+${dial}</span></li>`
  ).join('');
}

function ccOpen(open) {
  ccPop.hidden = !open;
  ccBtn.setAttribute('aria-expanded', open);
  if (open) { ccSearch.value = ''; ccRender(); ccSearch.focus(); }
}

function ccPick(li) {
  if (!li) return;
  ccSet(li.dataset.iso, true);
  ccOpen(false);
  $('#phone').focus();
}

ccBtn.addEventListener('click', () => ccOpen(ccPop.hidden));
ccSearch.addEventListener('input', () => ccRender(ccSearch.value));
ccList.addEventListener('click', e => ccPick(e.target.closest('[role=option]')));
ccPop.addEventListener('keydown', e => {
  const opts = [...ccList.querySelectorAll('[role=option]')];
  const i = opts.indexOf(document.activeElement);
  if (e.key === 'Escape') { e.preventDefault(); ccOpen(false); ccBtn.focus(); }
  else if (e.key === 'ArrowDown') { e.preventDefault(); (opts[i + 1] || opts[0])?.focus(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); i <= 0 ? ccSearch.focus() : opts[i - 1].focus(); }
  else if (e.key === 'Enter') { e.preventDefault(); ccPick(i >= 0 ? opts[i] : opts[0]); }
  else if (e.key === ' ' && i >= 0) { e.preventDefault(); ccPick(opts[i]); }
});
document.addEventListener('click', e => { if (!ccPop.hidden && !e.target.closest('#telGroup')) ccOpen(false); });

// Suggest a country from the site language until the visitor picks one.
const LANG_CC = { sw: 'tz', it: 'it', de: 'de', fr: 'fr', es: 'es', en: 'tz' };
$$('.lang').forEach(s => s.addEventListener('change', () => { ccSet(cc.touched ? cc.iso : (LANG_CC[s.value] || 'tz')); ccRender(ccSearch.value); }));
ccRender();
ccSet(LANG_CC[lang] || 'tz');
$('#ccSearch').placeholder = t('cc_search');

// Full international number for the booking: keeps a number typed with + or 00 as is.
function fullPhone(raw, dial) {
  const n = String(raw).trim();
  if (n.startsWith('+')) return n;
  if (n.startsWith('00')) return '+' + n.slice(2);
  return `+${dial} ${n.replace(/^0+/, '')}`;
}
