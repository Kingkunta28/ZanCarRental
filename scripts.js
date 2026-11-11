/* ===== CONFIG: edit this part ===== */
const CONFIG = {
  business: 'Rafiki Car Hire',          // your business name
  whatsapp: '255715518980',            // international format, no + or spaces
  phone: '+255 715 518 980',           // how the number is shown on the site
  address: 'Zanzibar Airport',
  currency: '$',
  // Delivery / collection: free at locations marked free: true,
  // deliveryFee is charged separately for EACH location (pickup and return) outside the free zone.
  deliveryFee: 25,
  locations: [
    { id: 'airport', i18n: 'l_air', name: 'Zanzibar Airport', free: true },
    { id: 'town', i18n: 'l_town', name: 'Zanzibar Town (Stone Town)', free: true },
    { id: 'nungwi', name: 'Nungwi' },
    { id: 'kendwa', name: 'Kendwa' },
    { id: 'matemwe', name: 'Matemwe' },
    { id: 'pongwe', name: 'Pongwe' },
    { id: 'paje', name: 'Paje' },
    { id: 'jambiani', name: 'Jambiani' },
    { id: 'bwejuu', name: 'Bwejuu' },
    { id: 'michamvi', name: 'Michamvi' },
    { id: 'kizimkazi', name: 'Kizimkazi' },
    { id: 'other', i18n: 'l_other', name: 'Other location' }
  ],
  // type: 'suv' | 'small' | 'van' | 'pickup' (used by the fleet filter)
  // image: '' uses a placeholder. To use a real photo: image: 'images/vitz.jpg'
  fleet: [
    { id: 'nissan-e-class', type: 'small', name: 'Nissan Juke', seats: 4, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 25, color: '#0B6E99', image: 'images/Nissan E-Class.jpeg' },
    { id: 'rav4-2018', type: 'suv', name: 'Toyota RAV4 New', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 35, color: '#2EC4D6', image: 'images/Toyota RAV4.jpeg' },
    { id: 'vanguard-2018', type: 'suv', name: 'Toyota Vanguard ', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 40, color: '#0B6E99', image: 'images/Toyota RAV4_2.jpeg' },
    { id: 'rav4-2016', type: 'suv', name: 'Toyota RAV4 ', seats: 2, trans: 'Automatic', year: 2016, fuel: 'Petrol', price: 30, color: '#06364D', image: 'images/Toyota RAV4 2doors.jpeg' },
    { id: 'land-cruiser-2020', type: 'suv', name: 'Toyota Land Cruiser', seats: 5, trans: 'Automatic', year: 2020, fuel: 'Petrol', price: 150.00, color: '#0B6E99', image: 'images/Toyota Land Cruiser.png' },
    { id: 'suzuki-escudo-2019', type: 'suv', name: 'Suzuki Escudo', seats: 3, trans: 'Automatic', year: 2019, fuel: 'Petrol', price: 26, color: '#2EC4D6', image: 'images/Suzuki Escudo 2doors.jpeg' },
   
    { id: 'toyota-c-class', type: 'pickup', name: 'Toyota Hilux', seats: 5, trans: 'Automatic', year: 2010, fuel: 'Diesel', price: 90.00, color: '#C9A36A', image: 'images/Toyota C-Class.jpeg' },
    { id: 'toyota-g-class', type: 'suv', name: 'Toyota Harrier', seats: 5, trans: 'Automatic', year: 2015, fuel: 'Petrol', price: 45.00, color: '#0B6E99', image: 'images/Toyota G-Class.jpeg' },
    { id: 'toyota-ist', type: 'small', name: 'Toyota IST', seats: 5, trans: 'Automatic', year: 2018, fuel: 'Petrol', price: 20.00, color: '#C9A36A', image: 'images/Toyota Ist-card.jpg' },
    { id: 'toyota-alphad', type: 'van', name: 'Toyota Alphad', seats: 8, trans: 'Automatic', year: 2013, fuel: 'Petrol', price: 45.00, color: '#0B6E99', image: 'images/Toyota Alphard.jpeg' }
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
    g1t: 'Driving permit', g1p: 'Every driver needs a Zanzibar driving permit ($25 per driver) on top of their home licence. We arrange it before you arrive.',
    g2t: 'Transparent pricing', g2p: 'Compare the full cost, not just the daily rate. Our car rental prices show every total with the permit included and no deposit.',
    g3t: 'Right vehicle', g3p: 'Check that the vehicle meets your travel needs. Consider terrain, passenger count and luggage space.',
    g4t: 'Insurance coverage', g4p: 'Check what your rental insurance covers. Our cars have third-party insurance, the basic cover required by law, which does not cover damage to the rental car itself. Some travel insurance policies offer cover for rental car damage.',
    g5t: 'Road rules and safety', g5p: 'Zanzibar drives on the left and police checkpoints are common.',
    g6t: 'Pickup logistics', g6p: 'Confirm clear pickup and drop-off locations and times to avoid any delays or confusion.',
    g7t: 'Book ahead', g7p: 'Reserve your vehicle in advance, especially during peak tourist season, to guarantee availability.'
  },
  sw: {
    g_k: 'Mwongozo muhimu', g_h: 'Kabla ya kukodisha', g_p: 'Mambo saba ya kujua kabla ya kukodisha na kuendesha gari Zanzibar.', nav_guide: 'Kabla ya kukodisha',
    g1t: 'Kibali cha udereva', g1p: 'Kila dereva anahitaji kibali cha udereva cha Zanzibar ($25 kwa kila dereva) pamoja na leseni ya nchini kwake. Tunakiandaa kabla hujafika.',
    g2t: 'Bei za wazi', g2p: 'Linganisha gharama yote, si bei ya siku pekee. Bei zetu zinaonyesha jumla yote pamoja na kibali na bila amana.',
    g3t: 'Gari linalokufaa', g3p: 'Hakikisha gari linakidhi mahitaji ya safari yako. Fikiria aina ya barabara, idadi ya abiria na nafasi ya mizigo.',
    g4t: 'Bima', g4p: 'Hakikisha unajua bima ya gari inashughulikia nini. Magari yetu yana bima ya mtu wa tatu, bima ya msingi inayotakiwa kisheria, ambayo haishughulikii uharibifu wa gari lenyewe. Baadhi ya bima za safari hushughulikia uharibifu wa gari la kukodi.',
    g5t: 'Sheria za barabarani na usalama', g5p: 'Zanzibar magari huendeshwa upande wa kushoto, na vizuizi vya polisi ni vya kawaida.',
    g6t: 'Mpango wa kuchukua gari', g6p: 'Thibitisha mahali na muda wa kuchukua na kurudisha gari ili kuepuka ucheleweshaji au mkanganyiko.',
    g7t: 'Weka nafasi mapema', g7p: 'Weka nafasi ya gari lako mapema, hasa msimu wa watalii wengi, ili kuhakikisha linapatikana.'
  },
  it: {
    g_k: 'Guida essenziale', g_h: 'Prima di noleggiare', g_p: 'Sette cose da sapere prima di noleggiare e guidare a Zanzibar.', nav_guide: 'Prima di noleggiare',
    g1t: 'Permesso di guida', g1p: 'Ogni conducente ha bisogno di un permesso di guida di Zanzibar ($25 a conducente) oltre alla patente del proprio paese. Lo prepariamo prima del tuo arrivo.',
    g2t: 'Prezzi trasparenti', g2p: 'Confronta il costo totale, non solo la tariffa giornaliera. I nostri prezzi mostrano ogni totale con il permesso incluso e senza deposito.',
    g3t: 'Il veicolo giusto', g3p: 'Verifica che il veicolo sia adatto al tuo viaggio: tipo di strade, numero di passeggeri e spazio per i bagagli.',
    g4t: 'Copertura assicurativa', g4p: "Verifica cosa copre l'assicurazione del noleggio. Le nostre auto hanno l'assicurazione RC verso terzi, la copertura base obbligatoria per legge, che non copre i danni all'auto noleggiata. Alcune assicurazioni di viaggio coprono i danni alle auto a noleggio.",
    g5t: 'Regole della strada e sicurezza', g5p: 'A Zanzibar si guida a sinistra e i posti di blocco della polizia sono frequenti.',
    g6t: 'Ritiro e riconsegna', g6p: 'Conferma con chiarezza luoghi e orari di ritiro e riconsegna per evitare ritardi o malintesi.',
    g7t: 'Prenota in anticipo', g7p: "Prenota il veicolo in anticipo, soprattutto in alta stagione, per essere certo della disponibilità."
  },
  de: {
    g_k: 'Wichtiger Ratgeber', g_h: 'Vor der Anmietung', g_p: 'Sieben Dinge, die du wissen solltest, bevor du auf Sansibar ein Auto mietest und fährst.', nav_guide: 'Vor der Anmietung',
    g1t: 'Fahrerlaubnis', g1p: 'Jeder Fahrer braucht zusätzlich zum heimischen Führerschein eine Sansibar-Fahrerlaubnis ($25 pro Fahrer). Wir besorgen sie vor deiner Ankunft.',
    g2t: 'Transparente Preise', g2p: 'Vergleiche die Gesamtkosten, nicht nur den Tagespreis. Unsere Mietpreise zeigen jede Summe inklusive Fahrerlaubnis und ohne Kaution.',
    g3t: 'Das passende Fahrzeug', g3p: 'Prüfe, ob das Fahrzeug zu deiner Reise passt: Gelände, Anzahl der Mitfahrer und Platz für Gepäck.',
    g4t: 'Versicherungsschutz', g4p: 'Prüfe, was deine Mietwagenversicherung abdeckt. Unsere Autos haben eine Haftpflichtversicherung, den gesetzlich vorgeschriebenen Grundschutz, der Schäden am Mietwagen selbst nicht abdeckt. Manche Reiseversicherungen decken Schäden an Mietwagen ab.',
    g5t: 'Verkehrsregeln und Sicherheit', g5p: 'Auf Sansibar herrscht Linksverkehr, und Polizeikontrollen sind häufig.',
    g6t: 'Abholung planen', g6p: 'Lege Abhol- und Rückgabeort sowie die Zeiten klar fest, um Verzögerungen und Missverständnisse zu vermeiden.',
    g7t: 'Früh buchen', g7p: 'Reserviere dein Fahrzeug rechtzeitig, besonders in der Hauptsaison, damit es sicher verfügbar ist.'
  },
  fr: {
    g_k: 'Guide essentiel', g_h: 'Avant de louer', g_p: 'Sept choses à savoir avant de louer et de conduire à Zanzibar.', nav_guide: 'Avant de louer',
    g1t: 'Permis de conduire local', g1p: "Chaque conducteur a besoin d'un permis de conduire de Zanzibar (25 $ par conducteur) en plus de son permis national. Nous l'obtenons avant votre arrivée.",
    g2t: 'Prix transparents', g2p: 'Comparez le coût total, pas seulement le tarif journalier. Nos prix de location affichent chaque total permis compris et sans caution.',
    g3t: 'Le bon véhicule', g3p: 'Vérifiez que le véhicule correspond à votre voyage : type de routes, nombre de passagers et place pour les bagages.',
    g4t: 'Assurance', g4p: "Vérifiez ce que couvre l'assurance de votre location. Nos voitures sont assurées au tiers, la couverture de base exigée par la loi, qui ne couvre pas les dommages à la voiture louée elle-même. Certaines assurances voyage couvrent les dommages aux voitures de location.",
    g5t: 'Code de la route et sécurité', g5p: 'À Zanzibar, on roule à gauche et les contrôles de police sont fréquents.',
    g6t: 'Prise en charge', g6p: 'Confirmez clairement les lieux et horaires de prise en charge et de retour pour éviter retards et malentendus.',
    g7t: "Réservez à l'avance", g7p: "Réservez votre véhicule à l'avance, surtout en haute saison, pour être sûr qu'il soit disponible."
  },
  es: {
    g_k: 'Guía esencial', g_h: 'Antes de alquilar', g_p: 'Siete cosas que debes saber antes de alquilar y conducir en Zanzíbar.', nav_guide: 'Antes de alquilar',
    g1t: 'Permiso de conducir', g1p: 'Cada conductor necesita un permiso de conducir de Zanzíbar (25 $ por conductor) además del carné de su país. Lo tramitamos antes de que llegues.',
    g2t: 'Precios transparentes', g2p: 'Compara el coste total, no solo la tarifa diaria. Nuestros precios de alquiler muestran cada total con el permiso incluido y sin depósito.',
    g3t: 'El vehículo adecuado', g3p: 'Comprueba que el vehículo se ajusta a tu viaje: tipo de terreno, número de pasajeros y espacio para el equipaje.',
    g4t: 'Cobertura del seguro', g4p: 'Comprueba qué cubre el seguro del alquiler. Nuestros coches tienen seguro a terceros, la cobertura básica obligatoria por ley, que no cubre los daños al propio coche alquilado. Algunos seguros de viaje cubren daños a coches de alquiler.',
    g5t: 'Normas de tráfico y seguridad', g5p: 'En Zanzíbar se conduce por la izquierda y los controles policiales son habituales.',
    g6t: 'Recogida y devolución', g6p: 'Confirma claramente los lugares y horarios de recogida y devolución para evitar retrasos o confusiones.',
    g7t: 'Reserva con antelación', g7p: 'Reserva tu vehículo con antelación, sobre todo en temporada alta, para asegurar la disponibilidad.'
  }
};
Object.keys(T3).forEach(l => Object.assign(T[l], T3[l]));

/* ===== Helpers ===== */
let lang = 'en', filter = 'all';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t = k => T[lang][k] || T.en[k] || k;
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

const specsHTML = c => `
  <li>${icon('seats')}${c.seats} ${esc(t('seats'))}</li>
  <li>${icon('trans')}${esc(c.trans)}</li>
  ${c.fuel ? `<li>${icon('fuel')}${esc(c.fuel)}</li>` : ''}
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
        <img src="${carImg(c)}" alt="${esc(c.name)}" loading="lazy" decoding="async">
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
  $('#mImg').src = carImg(c); $('#mImg').alt = c.name;
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
const locName = (id, inLang = true) => {
  const l = findLoc(id);
  if (!l) return '—';
  return inLang && l.i18n ? t(l.i18n) : l.name;
};
// Unknown or missing locations are never treated as free.
const locFee = id => (findLoc(id) || {}).free ? 0 : CONFIG.deliveryFee;
const feeText = fee => fee === 0 ? t('free') : money(fee);

// Builds the full price breakdown from raw inputs. Used for the live summary AND
// recalculated from scratch on submit, so the WhatsApp message never relies on what is shown on screen.
function quote({ carId, from, to, pickupLoc, returnLoc }) {
  const car = CONFIG.fleet.find(x => x.id === carId) || null;
  const days = from && to ? Math.round((new Date(to + 'T00:00') - new Date(from + 'T00:00')) / 864e5) : 0;
  const rental = car && days > 0 ? +(car.price * days).toFixed(2) : 0;
  const pickupFee = locFee(pickupLoc);
  const returnFee = locFee(returnLoc);
  const locationFees = pickupFee + returnFee;
  return {
    car, days, rental, pickupLoc, returnLoc, pickupFee, returnFee, locationFees,
    total: +(rental + locationFees).toFixed(2), complete: !!car && days > 0
  };
}
const formQuote = () => quote({
  carId: $('#car').value, from: $('#from').value, to: $('#to').value,
  pickupLoc: $('#pickupLoc').value, returnLoc: $('#returnLoc').value
});

function renderLocations() {
  const free = CONFIG.locations.filter(l => l.free), paid = CONFIG.locations.filter(l => !l.free);
  const opts = list => list.map(l => `<option value="${l.id}">${esc(l.i18n ? t(l.i18n) : l.name)}</option>`).join('');
  $$('.loc-select').forEach(sel => {
    const keep = sel.value || 'airport';
    sel.innerHTML =
      `<optgroup label="${esc(t('free'))}">${opts(free)}</optgroup>` +
      `<optgroup label="+${esc(money(CONFIG.deliveryFee))} · ${esc(t('fee_zone'))}">${opts(paid)}</optgroup>`;
    sel.value = keep;
  });
  $('#feeNote').textContent = t('fee_note').replace('{fee}', money(CONFIG.deliveryFee));
}

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
  $('#sumTrip').innerHTML =
    row(t('f_pick'), `${esc(fmtDate($('#from').value))}<small>${esc(locName(q.pickupLoc))}</small>`) +
    row(t('f_ret'), `${esc(fmtDate($('#to').value))}<small>${esc(locName(q.returnLoc))}</small>`) +
    row(t('days'), d > 0 ? `${d}` : '—');
  $('#sumMoney').innerHTML =
    row(t('sum_rental'), c && d > 0 ? `${money(q.rental)}<small>${money(c.price)} × ${d}</small>` : '—') +
    row(t('sum_pfee'), fee(q.pickupFee)) +
    row(t('sum_rfee'), fee(q.returnFee)) +
    row(t('sum_loc'), `<b>${q.locationFees === 0 ? esc(t('free')) : money(q.locationFees)}</b>`, 'sub');

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
$('#from').min = $('#to').min = todayISO;
$('#from').addEventListener('change', e => { $('#to').min = e.target.value || todayISO; estimate(); });
$('#to').addEventListener('change', estimate);
$('#car').addEventListener('change', estimate);
$$('.loc-select').forEach(s => s.addEventListener('change', estimate));

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
  const empty = ['name', 'phone', 'car', 'from', 'to'].filter(n => !String(f[n]).trim());
  if (empty.length) return fail('e_req', empty);
  if (new Date(f.from + 'T00:00') < today) return fail('e_past', ['from']);
  if (dayCount() < 1) return fail('e_date', ['to']);
  if (!findLoc(f.pickup_loc)) return fail('e_req', ['pickup_loc']);
  if (!findLoc(f.return_loc)) return fail('e_req', ['return_loc']);
  // A hotel/address is needed everywhere except the airport.
  if (f.pickup_loc !== 'airport' && !f.place.trim()) return fail('e_place', ['place']);
  if (f.return_loc !== 'airport' && !f.return_place.trim()) return fail('e_place', ['return_place']);

  // Recalculate everything from the raw form values (not from the on-screen summary).
  const q = quote({ carId: f.car, from: f.from, to: f.to, pickupLoc: f.pickup_loc, returnLoc: f.return_loc });
  const where = (id, detail) => locName(id, false) + (detail.trim() ? ` (${detail.trim()})` : '');
  const fee = n => n === 0 ? 'FREE' : money(n);
  const booking = {
    name: f.name.trim(), phone: f.phone.trim(), car: c.name, carId: c.id,
    pickupDate: f.from, returnDate: f.to, days: q.days,
    pickupLocation: where(q.pickupLoc, f.place), returnLocation: where(q.returnLoc, f.return_place),
    rental: q.rental, pickupFee: q.pickupFee, returnFee: q.returnFee,
    locationFees: q.locationFees, total: q.total, notes: f.notes.trim()
  };
  const text = [
    `Hello ${CONFIG.business}, I would like to book a car.`,
    `Name: ${booking.name}`, `Phone: ${booking.phone}`, `Car: ${booking.car}`,
    '',
    `Pickup: ${booking.pickupDate}, ${booking.pickupLocation}`,
    `Return: ${booking.returnDate}, ${booking.returnLocation}`,
    `Rental duration: ${booking.days} days`,
    '',
    `Car rental: ${money(booking.rental)} (${money(c.price)} x ${booking.days} days)`,
    `Pickup fee: ${fee(booking.pickupFee)}`,
    `Return fee: ${fee(booking.returnFee)}`,
    `Total location fees: ${money(booking.locationFees)}`,
    `FINAL TOTAL: ${money(booking.total)}`,
    booking.notes ? `\nNotes: ${booking.notes}` : ''
  ].filter(s => s !== null && s !== undefined && s !== false).join('\n').replace(/\n+$/, '');
  window.lastBooking = booking; // separate fields, ready for a future backend
  msg.textContent = t('ok'); msg.className = 'msg ok';
  toast(t('ok'), 'ok');
  const btn = $('#sendBtn');
  btn.classList.add('is-sent'); setTimeout(() => btn.classList.remove('is-sent'), 2400);
  window.open(waLink(text), '_blank', 'noopener');
});

// Header state, scroll spy and subtle hero parallax
const heroBg = $('.hero-bg'), heroCar = $('.hero-visual');
let ticking = false;
const onScroll = () => {
  hdr.classList.toggle('scrolled', scrollY > 24);
  if (!reduceMotion && scrollY < innerHeight) {
    heroBg.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0) scale(1.08)`;
    heroCar.style.transform = `translate3d(0, ${scrollY * -0.08}px, 0)`;
  }
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

if ('IntersectionObserver' in window) {
  const links = $$('#nav a[href^="#"]');
  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const s = $(l.getAttribute('href')); if (s) spy.observe(s); });
}

observe($$('.reveal'));

let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { }
applyLang(T[saved] ? saved : 'en');
