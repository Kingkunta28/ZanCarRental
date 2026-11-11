/* Content for the location landing pages and the driving guide.
   Edit the text here, then run:  node tools/build.js
   Keep facts accurate: no invented prices, policies or reviews. */

module.exports = [
  {
    slug: 'car-hire-zanzibar-airport',
    locs: ['airport'],
    label: 'Zanzibar Airport',
    linkText: 'Zanzibar Airport car rental',
    title: 'Zanzibar Airport Car Rental, Free Delivery | Rafiki Car Hire',
    desc: 'Car hire at Abeid Amani Karume International Airport (ZNZ). Free delivery and return at Zanzibar Airport, cars from {from}/day. Book on WhatsApp.',
    h1: 'Zanzibar Airport Car Rental',
    intro: 'Collect your rental car as soon as you land at Abeid Amani Karume International Airport (ZNZ). We bring the car you booked to the airport at no extra charge, and you can hand it back there when you fly home.',
    cars: ['toyota-alphad', 'land-cruiser-2020', 'toyota-ist'],
    sections: [
      ['How airport car hire works', [
        'Booking takes a couple of minutes and there is no account to create:',
        ['Choose a car and your dates in the booking form, and pick Zanzibar Airport as the pickup place.',
         'Add your flight number and arrival time in the notes so we know when you land.',
         'Send the prepared message on WhatsApp. We confirm availability and payment details with you there.',
         'Meet your car at the airport and start your trip.']
      ]],
      ['Free delivery and return at the airport', [
        'There is no delivery charge for pickup or return at Zanzibar Airport, and none in Zanzibar Town either. If you want to drop the car somewhere else, for example at your hotel in Nungwi or Paje on your last day, that return costs {fee}. The booking summary shows every fee before you send your request.'
      ]],
      ['Driving away from the airport', [
        'The airport sits on the edge of Zanzibar Town, a short drive from Stone Town. From there the main roads lead north to Nungwi and Kendwa, east to Matemwe and Pongwe, and south-east to Paje, Jambiani and Kizimkazi.',
        'Zanzibar drives on the left. Every driver needs a Zanzibar driving permit ($25 per driver) in addition to their home licence, and we arrange it before you arrive. Police checkpoints are common, so keep your licence and permit with you.'
      ]],
      ['Which car for an airport pickup?', [
        'Think about luggage as well as passengers. A family with large suitcases is more comfortable in an SUV or the eight-seat Toyota Alphard, while a couple travelling light will be fine in a compact car such as the Toyota IST.'
      ]]
    ]
  },
  {
    slug: 'car-hire-stone-town',
    locs: ['town'],
    label: 'Stone Town',
    linkText: 'Car hire in Stone Town',
    title: 'Car Hire Stone Town, Zanzibar | Free Delivery | Rafiki Car Hire',
    desc: 'Rent a car in Stone Town and Zanzibar Town with free delivery to your hotel. Compact cars and SUVs from {from}/day. Book online and confirm on WhatsApp.',
    h1: 'Car Hire in Stone Town, Zanzibar',
    intro: 'Staying in Stone Town or elsewhere in Zanzibar Town? We deliver your rental car free of charge anywhere in Zanzibar Town, so you can start exploring the island straight from your hotel.',
    cars: ['toyota-ist', 'nissan-e-class', 'rav4-2018'],
    sections: [
      ['Driving and parking in Stone Town', [
        'The old town is a UNESCO World Heritage Site, and its narrow lanes are best explored on foot. Many streets in the historic centre are too narrow for cars, so add your hotel name in the booking form and we will arrange the handover with you on WhatsApp.',
        'A car becomes really useful once you head out of town: the beaches, villages and nature areas of Zanzibar are spread around the island, and many are an hour or more away.'
      ]],
      ['Day trips from Stone Town by car', [
        ['Jozani Chwaka Bay National Park, home of the red colobus monkey, on the road to the south-east coast.',
         'The beaches of Nungwi and Kendwa at the northern tip of the island.',
         'Paje, Jambiani and the Michamvi peninsula on the east coast.',
         'Kizimkazi on the southern tip, known for dolphin trips.',
         'Spice farms in the countryside outside town.']
      ]],
      ['Free delivery in Zanzibar Town', [
        'Delivery and collection are free in Zanzibar Town and at Zanzibar Airport. If you finish your trip somewhere else, such as a beach hotel on the east coast, that return costs {fee}.'
      ]],
      ['Which car for Stone Town?', [
        'A compact car is the easiest to drive and park around town. If you plan to explore sandy beach roads or travel with a group, choose an SUV.'
      ]]
    ]
  },
  {
    slug: 'car-hire-nungwi-kendwa',
    locs: ['nungwi', 'kendwa'],
    label: 'Nungwi & Kendwa',
    linkText: 'Car hire in Nungwi & Kendwa',
    title: 'Car Hire Nungwi & Kendwa, Zanzibar | Rafiki Car Hire',
    desc: 'Car rental in Nungwi and Kendwa with delivery to your hotel for {fee}. SUVs and compact cars from {from}/day. Explore northern Zanzibar at your own pace.',
    h1: 'Car Hire in Nungwi and Kendwa, Zanzibar',
    intro: 'Nungwi and Kendwa sit at the northern tip of Zanzibar, known for white-sand beaches and sunsets over the Indian Ocean. We deliver rental cars to hotels in both villages, so you can explore the north of the island in your own time.',
    cars: ['rav4-2018', 'suzuki-escudo-2019', 'toyota-g-class'],
    sections: [
      ['Delivery to Nungwi and Kendwa', [
        'Delivery to your hotel in Nungwi or Kendwa costs {fee}, and so does collection from there. A few examples:',
        ['Pickup at Zanzibar Airport, return at your hotel in Nungwi: {fee} in location fees.',
         'Delivery to Kendwa, return at the airport: {fee}.',
         'Delivery to Nungwi, collection in Kendwa: {fee2}.']
      ]],
      ['Driving to the north coast', [
        'The drive from Stone Town or the airport to Nungwi is roughly 60 km and usually takes about an hour and a half, depending on traffic. The main road north is paved; the last stretch to some hotels is a sandy track, so an SUV is more comfortable there.',
        'Zanzibar drives on the left and police checkpoints are common. Carry your driving licence and Zanzibar driving permit.'
      ]],
      ['Things to do by car from Nungwi', [
        ['Spend an afternoon on Kendwa beach, just south of Nungwi.',
         'Watch traditional dhows being built and repaired along the Nungwi shore.',
         'Drive down the east coast to Matemwe, the closest village to Mnemba Atoll.',
         'Take a day trip to Stone Town for the markets and the old town.']
      ]],
      ['Which car for Nungwi and Kendwa?', [
        'For the drive north and the sandy hotel roads, a small SUV such as the Toyota RAV4 or Suzuki Escudo is a good choice. Families and groups have more room in the Toyota Harrier.'
      ]]
    ]
  },
  {
    slug: 'car-hire-matemwe-pongwe',
    locs: ['matemwe', 'pongwe'],
    label: 'Matemwe & Pongwe',
    linkText: 'Car hire in Matemwe & Pongwe',
    title: 'Car Hire Matemwe & Pongwe, Zanzibar | Rafiki Car Hire',
    desc: 'Rent a car in Matemwe or Pongwe on Zanzibar\'s east coast, delivered to your hotel for {fee}. SUVs and compact cars from {from}/day. Book on WhatsApp.',
    h1: 'Car Hire in Matemwe and Pongwe, Zanzibar',
    intro: 'Matemwe on the north-east coast faces Mnemba Atoll, a favourite for snorkelling and diving trips. Further south, Pongwe is a quiet stretch of beach. We deliver rental cars to hotels in both, so you are not tied to taxis or hotel transfers.',
    cars: ['vanguard-2018', 'land-cruiser-2020', 'toyota-ist'],
    sections: [
      ['Delivery to Matemwe and Pongwe', [
        'Delivery to your hotel in Matemwe or Pongwe costs {fee}, and collection there costs {fee}. Pickup and return at Zanzibar Airport or in Zanzibar Town are free, so you can, for example, collect the car at the airport and hand it back at your hotel for {fee} in total.'
      ]],
      ['Getting there', [
        'Both villages are about an hour\'s drive from Stone Town and the airport. The east coast has big tides: at low tide the sea pulls far back and you will see seaweed farms on the sand, so plan swims and boat trips around the tide times.'
      ]],
      ['Exploring the east coast by car', [
        ['Book a boat trip to Mnemba Atoll from Matemwe.',
         'Drive north to Nungwi and Kendwa for a beach day with less tidal change.',
         'Head south to Paje and the Michamvi peninsula.',
         'Visit Stone Town for a day of markets and history.']
      ]],
      ['Which car for Matemwe and Pongwe?', [
        'An SUV such as the Toyota Vanguard handles village and beach roads comfortably. The Toyota Land Cruiser is the most capable choice for larger groups, and the Toyota IST is an economical option if you will mostly drive on the main roads.'
      ]]
    ]
  },
  {
    slug: 'car-hire-paje-jambiani',
    locs: ['paje', 'jambiani', 'bwejuu', 'michamvi'],
    label: 'Paje, Jambiani, Bwejuu & Michamvi',
    linkText: 'Car hire in Paje & Jambiani',
    title: 'Car Hire Paje & Jambiani, Zanzibar | Rafiki Car Hire',
    desc: 'Car rental in Paje, Jambiani, Bwejuu and Michamvi, delivered to your hotel for {fee}. SUVs, 4x4s and a pickup for kite gear, from {from}/day.',
    h1: 'Car Hire in Paje, Jambiani, Bwejuu and Michamvi',
    intro: 'The south-east coast of Zanzibar is known for long white beaches, kitesurfing in Paje and laid-back villages such as Jambiani and Bwejuu. We deliver rental cars to hotels along the whole coast, up to the Michamvi peninsula.',
    cars: ['suzuki-escudo-2019', 'rav4-2016', 'toyota-c-class'],
    sections: [
      ['Delivery on the south-east coast', [
        'Delivery to Paje, Jambiani, Bwejuu or Michamvi costs {fee}, and collection costs {fee}. For example, picking up in Paje and returning in Michamvi costs {fee2} in location fees, while picking up in Paje and returning at Zanzibar Airport costs {fee}.'
      ]],
      ['Getting there', [
        'Paje is about an hour from Stone Town and the airport. The road passes Jozani Chwaka Bay National Park, so you can stop to see the red colobus monkeys on the way.'
      ]],
      ['Things to do by car on the south-east coast', [
        ['Visit Jozani Chwaka Bay National Park.',
         'Watch the sunset over Chwaka Bay from the Michamvi peninsula.',
         'See The Rock restaurant on its rock in the sea near Michamvi.',
         'Explore Kuza Cave near Jambiani.',
         'Drive south to Kizimkazi for a dolphin trip.']
      ]],
      ['Which car for Paje and Jambiani?', [
        'Kitesurfers can fit boards and gear in the Toyota Hilux pickup. A small SUV like the Suzuki Escudo or Toyota RAV4 suits couples who want to explore the beach villages.'
      ]]
    ]
  },
  {
    slug: 'car-hire-kizimkazi',
    locs: ['kizimkazi'],
    label: 'Kizimkazi',
    linkText: 'Car hire in Kizimkazi',
    title: 'Car Hire Kizimkazi, Zanzibar | Hotel Delivery | Rafiki Car Hire',
    desc: 'Rent a car in Kizimkazi in the south of Zanzibar, delivered to your hotel for {fee}. Compact cars, SUVs and minivans from {from}/day.',
    h1: 'Car Hire in Kizimkazi, Zanzibar',
    intro: 'Kizimkazi is a fishing village on the southern tip of Zanzibar, best known for dolphin trips into Menai Bay. We deliver rental cars to hotels in Kizimkazi, so you can reach the rest of the island easily.',
    cars: ['nissan-e-class', 'toyota-g-class', 'toyota-alphad'],
    sections: [
      ['Delivery to Kizimkazi', [
        'Delivery to your hotel in Kizimkazi costs {fee}, and so does collection there. Pickup or return at Zanzibar Airport and in Zanzibar Town is free, so a car collected at the airport and returned in Kizimkazi costs {fee} in location fees.'
      ]],
      ['Getting there', [
        'Kizimkazi is about an hour\'s drive south of Stone Town and the airport. You can combine the trip with Jozani Chwaka Bay National Park or the beaches of Jambiani and Paje on the east coast.'
      ]],
      ['Things to do around Kizimkazi', [
        ['Take an early-morning dolphin trip. Choose an operator that keeps a respectful distance from the animals.',
         'Visit the Kizimkazi mosque, one of the oldest in East Africa, with an inscription from the early 12th century.',
         'Explore the Menai Bay Conservation Area.',
         'Drive up the east coast to Jambiani and Paje.']
      ]],
      ['Which car for Kizimkazi?', [
        'For two people, an economical compact car such as the Nissan Juke is enough. Families can choose the Toyota Harrier, and groups of up to eight can travel together in the Toyota Alphard.'
      ]]
    ]
  },
  {
    slug: 'driving-in-zanzibar',
    locs: [],
    guide: true,
    label: 'Driving in Zanzibar',
    linkText: 'Driving in Zanzibar guide',
    title: 'Driving in Zanzibar: A Guide for Visitors | Rafiki Car Hire',
    desc: 'What you need to rent and drive a car in Zanzibar: driving permit, road rules, choosing a vehicle, delivery fees and how booking works.',
    h1: 'Driving in Zanzibar: A Guide for Visitors',
    intro: 'Renting a car is one of the easiest ways to see Zanzibar, from Stone Town to the beaches of Nungwi, Paje and Kizimkazi. Here is what to know before you rent and drive.',
    cars: ['toyota-ist', 'rav4-2018', 'toyota-alphad'],
    sections: [
      ['Driving permit and licence', [
        'Every driver needs a Zanzibar driving permit ($25 per driver) in addition to their home licence. We arrange the permit before you arrive. Bring your licence and passport and keep them with you while driving.'
      ]],
      ['Road rules and safety', [
        'Zanzibar drives on the left. Police checkpoints are common, so slow down and stop when asked. Outside the towns you will share the road with pedestrians, cyclists, motorbikes and animals, and many rural roads have no street lights, so take extra care after dark.'
      ]],
      ['Choosing the right vehicle', [
        'Check that the vehicle fits your trip: the roads you will drive, the number of passengers and how much luggage you carry.',
        ['Compact cars (Toyota IST, Nissan Juke): economical for couples and main roads.',
         'SUVs and 4x4s (Toyota RAV4, Vanguard, Harrier, Land Cruiser, Suzuki Escudo): more comfortable on sandy village and hotel roads.',
         'Minivan (Toyota Alphard): up to eight passengers.',
         'Pickup (Toyota Hilux): room for kitesurf boards and gear.']
      ]],
      ['Pickup, return and delivery fees', [
        'Confirm clear pickup and return places and times when you book to avoid delays. Delivery and collection are free at Zanzibar Airport and in Zanzibar Town (Stone Town). Anywhere else costs {fee} for the pickup and {fee} for the return, so both outside the free zone comes to {fee2}.'
      ]],
      ['What a rental costs', [
        'Your total is the daily rate multiplied by the number of days, plus any delivery fees. The booking form shows the full breakdown before you send it, and we confirm availability, payment and any other details with you on WhatsApp.',
        'Fuel is not included: return the car with the same fuel level as at pickup.'
      ]],
      ['Book ahead', [
        'Reserve your car in advance, especially in the busy tourist season, to make sure the vehicle you want is available.'
      ]]
    ]
  }
];
