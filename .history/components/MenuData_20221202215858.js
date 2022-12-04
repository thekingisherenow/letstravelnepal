import React from 'react'
const menuItems = [{
        "tripType" : "Nepal Trekking" , "tripTypeLink" : "destination/nepal-trekking" ,
        "dropdowns" : [
            {"tripName": "Annapurna Trekking", "tripNameLink": "destination/nepal-trekking/annapurna-trekking", "tripSubNames": ["Jomsom Muktinath Trekking", "Extreme Saribung Trekking and Peak Climbing", "Annapurna Sanctuary Trekking", "Khair Lake Trekking", "Nagi Narchyang Trek", "Tatopani Ghorepani Village Trekking", "Annapurna off the beaten trail trek", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Australian Camp Dhampus Village Tour", "Annapurna Circuit Trekking", "Annapurna Base Camp Trekking", "Mardi Himal Trek 5 Days", "Poon Hill Trek 4 days", "Nar Phu Valley Trekking", "Mardi Himal Trek", "Upper Mustang Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/annapurna-trekking/jomsom-muktinath-trekking", "destination/nepal-trekking/annapurna-trekking/extreme-saribung-trekking-and-peak-climbing", "destination/nepal-trekking/annapurna-trekking/annapurna-sanctuary-trekking", "destination/nepal-trekking/annapurna-trekking/khair-lake-trekking", "destination/nepal-trekking/annapurna-trekking/nagi-narchyang-trek", "destination/nepal-trekking/annapurna-trekking/tatopani-ghorepani-village-trekking", "destination/nepal-trekking/annapurna-trekking/annapurna-off-the-beaten-trail-trek", "destination/nepal-trekking/annapurna-trekking/yartung-festival-trekking", "destination/nepal-trekking/annapurna-trekking/mustang-tiji-festival-trek", "destination/nepal-trekking/annapurna-trekking/australian-camp-dhampus-village-tour", "destination/nepal-trekking/annapurna-trekking/annapurna-circuit-trekking", "destination/nepal-trekking/annapurna-trekking/annapurna-base-camp-trekking", "destination/nepal-trekking/annapurna-trekking/mardi-himal-trek-5-days", "destination/nepal-trekking/annapurna-trekking/poon-hill-trek-4-days", "destination/nepal-trekking/annapurna-trekking/nar-phu-valley-trekking", "destination/nepal-trekking/annapurna-trekking/mardi-himal-trek", "destination/nepal-trekking/annapurna-trekking/upper-mustang-trekking"]},
            {"tripName": "Everest Trekking", "tripNameLink": "destination/nepal-trekking/everest-trekking", "tripSubNames": ["Gokyo Chola Pass Trek", "Dumji Festival Trek", "Everest Gokyo Trek", "Everest Three High Passes Trekking", "Classic Jiri Everest Base Camp Trekking", "Everest Panorama Trekking", "Everest Base Camp Trekking", "Mani Rimdu Festival Trekking", "Dudh Kunda Pikey Peak Trek", "pikey peak trek"], "tripSubNameLinks": ["destination/nepal-trekking/everest-trekking/gokyo-chola-pass-trek", "destination/nepal-trekking/everest-trekking/dumji-festival-trek", "destination/nepal-trekking/everest-trekking/everest-gokyo-trek", "destination/nepal-trekking/everest-trekking/everest-three-high-passes-trekking", "destination/nepal-trekking/everest-trekking/classic-jiri-everest-base-camp-trekking", "destination/nepal-trekking/everest-trekking/everest-panorama-trekking", "destination/nepal-trekking/everest-trekking/everest-base-camp-trekking", "destination/nepal-trekking/everest-trekking/mani-rimdu-festival-trekking", "destination/nepal-trekking/everest-trekking/dudh-kunda-pikey-peak-trek", "destination/nepal-trekking/everest-trekking/pikey-peak-trek"]},
            {"tripName": "Langtang Region Trek", "tripNameLink": "destination/nepal-trekking/langtang-region-trekking", "tripSubNames": ["Langtang Ganjala Pass Trekking", "Langtang Gosaikunda Trekking", "Langtang Helambu Trekking", "Classic Langtang Valley Trekking", "Tamang Heritage Trail Trekking", "Tamang Heritage and Langtang Valley Trek", "Helambu Circuit Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/langtang-region-trekking/langtang-ganjala-pass-trekking", "destination/nepal-trekking/langtang-region-trekking/langtang-gosaikunda-trekking", "destination/nepal-trekking/langtang-region-trekking/langtang-helambu-trekking", "destination/nepal-trekking/langtang-region-trekking/classic-langtang-valley-trekking", "destination/nepal-trekking/langtang-region-trekking/tamang-heritage-trail-trekking", "destination/nepal-trekking/langtang-region-trekking/tamang-heritage-and-langtang-valley-trek", "destination/nepal-trekking/langtang-region-trekking/helambu-circuit-trekking"]},
            {"tripName": "Manaslu Trek", "tripNameLink": "destination/nepal-trekking/manaslu-trekking", "tripSubNames": ["Lower Manaslu Trekking", "Rupina La Pass Trek", "Manaslu Tsum Valley Trekking", "Manaslu Circuit Trekking", "Tsum Valley Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/manaslu-trekking/lower-manaslu-trekking", "destination/nepal-trekking/manaslu-trekking/rupina-la-pass-trek", "destination/nepal-trekking/manaslu-trekking/manaslu-tsum-valley-trekking", "destination/nepal-trekking/manaslu-trekking/manaslu-circuit-trekking", "destination/nepal-trekking/manaslu-trekking/tsum-valley-trekking"]},
            {"tripName": "Ganesh Himal Trek", "tripNameLink": "destination/nepal-trekking/ganesh-himal-trekking", "tripSubNames": ["Ganesh Himal Tamang Heritage Trail Trekking", "Ganesh Himal Panorama Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/ganesh-himal-trekking/ganesh-himal-tamang-heritage-trail-trekking", "destination/nepal-trekking/ganesh-himal-trekking/ganesh-himal-panorama-trekking"]},
            {"tripName": "Nepal Village Trek", "tripNameLink": "destination/nepal-trekking/nepal-village-trekking", "tripSubNames": ["Ganesh Himal Tamang Heritage Trail Trekking", "Ghale Gaun Village Trek", "Tatopani Ghorepani Village Trekking", "3 days poon hill trek from Pokhara", "Australian Camp Dhampus Village Tour", "Chisapani Nagarkot Trek", "Balthali Village Trek", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek"], "tripSubNameLinks": ["destination/nepal-trekking/nepal-village-trekking/ganesh-himal-tamang-heritage-trail-trekking", "destination/nepal-trekking/nepal-village-trekking/ghale-gaun-village-trek", "destination/nepal-trekking/nepal-village-trekking/tatopani-ghorepani-village-trekking", "destination/nepal-trekking/nepal-village-trekking/3-days-poon-hill-trek-from-pokhara", "destination/nepal-trekking/nepal-village-trekking/australian-camp-dhampus-village-tour", "destination/nepal-trekking/nepal-village-trekking/chisapani-nagarkot-trek", "destination/nepal-trekking/nepal-village-trekking/balthali-village-trek", "destination/nepal-trekking/nepal-village-trekking/tamang-heritage-trail-trekking", "destination/nepal-trekking/nepal-village-trekking/poon-hill-trek-4-days", "destination/nepal-trekking/nepal-village-trekking/pikey-peak-trek"]},
            {"tripName": "Nepal Festival Tours and Treks", "tripNameLink": "destination/nepal-trekking/nepal-festival-tours-and-treks", "tripSubNames": ["Dumji Festival Trek", "Dawa Dangbo Tsechu Festival", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Mani Rimdu Festival Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/nepal-festival-tours-and-treks/dumji-festival-trek", "destination/nepal-trekking/nepal-festival-tours-and-treks/dawa-dangbo-tsechu-festival", "destination/nepal-trekking/nepal-festival-tours-and-treks/yartung-festival-trekking", "destination/nepal-trekking/nepal-festival-tours-and-treks/mustang-tiji-festival-trek", "destination/nepal-trekking/nepal-festival-tours-and-treks/mani-rimdu-festival-trekking"]},
            {"tripName": "Kanchenjunga Trek", "tripNameLink": "destination/nepal-trekking/kanchenjunga-trekking", "tripSubNames": ["Kanchenjunga Base Camp Trekking", "Kanchenjunga north base camp Trek"], "tripSubNameLinks": ["destination/nepal-trekking/kanchenjunga-trekking/kanchenjunga-base-camp-trekking", "destination/nepal-trekking/kanchenjunga-trekking/kanchenjunga-north-base-camp-trek"]},
            {"tripName": "Rara Trekking", "tripNameLink": "destination/nepal-trekking/rara-trekking", "tripSubNames": ["Rara Lake Trekking"], "tripSubNameLinks": ["destination/nepal-trekking/rara-trekking/rara-lake-trekking"]},
            {"tripName": "Dolpo Trekking", "tripNameLink": "destination/nepal-trekking/dolpo-trekking", "tripSubNames": ["Lower Dolpo Circuit Trek", "Classic Beni Lower Dolpa Trekking", "upper dolpo trek"], "tripSubNameLinks": ["destination/nepal-trekking/dolpo-trekking/lower-dolpo-circuit-trek", "destination/nepal-trekking/dolpo-trekking/classic-beni-lower-dolpa-trekking", "destination/nepal-trekking/dolpo-trekking/upper-dolpo-trek"]},
            {"tripName": "Humla Trek", "tripNameLink": "destination/nepal-trekking/humla-trek", "tripSubNames": ["humla limi valley trek"], "tripSubNameLinks": ["destination/nepal-trekking/humla-trek/humla-limi-valley-trek"]},
            {"tripName": "9 Best five days trek in Nepal", "tripNameLink": "destination/nepal-trekking/5-days-trek-in-nepal", "tripSubNames": ["Everest Panorama Trekking", "Classic Langtang Valley Trekking", "Balthali Village Trek", "Annapurna Base Camp Trekking", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek", "Helambu Circuit Trekking", "Mardi Himal Trek"], "tripSubNameLinks": ["destination/nepal-trekking/5-days-trek-in-nepal/everest-panorama-trekking", "destination/nepal-trekking/5-days-trek-in-nepal/classic-langtang-valley-trekking", "destination/nepal-trekking/5-days-trek-in-nepal/balthali-village-trek", "destination/nepal-trekking/5-days-trek-in-nepal/annapurna-base-camp-trekking", "destination/nepal-trekking/5-days-trek-in-nepal/tamang-heritage-trail-trekking", "destination/nepal-trekking/5-days-trek-in-nepal/poon-hill-trek-4-days", "destination/nepal-trekking/5-days-trek-in-nepal/pikey-peak-trek", "destination/nepal-trekking/5-days-trek-in-nepal/helambu-circuit-trekking", "destination/nepal-trekking/5-days-trek-in-nepal/mardi-himal-trek"]}
            ]
            
    },
    {"tripType" : "Nepal Tour" , "tripTypeLink" : "nepal-tour" ,
        "dropdowns" : [
            
                {"tripName": "Nepal Culture and Wildlife Adventure Tour", "tripNameLink": "nepal/nepal-tour/nepal-culture-and-wildlife-adventure-tour","tripSubNames":[],"tripSubNameLinks":[] },
                {"tripName": "Nepal Honeymoon Tour", "tripNameLink": "nepal/nepal-tour/nepal-honeymoon-tour","tripSubNames":[],"tripSubNameLinks":[]},
                {"tripName": "Buddhist Pilgrimage Tour", "tripNameLink": "nepal/nepal-tour/buddhist-pilgrimage-tour","tripSubNames":[],"tripSubNameLinks":[]},
                {"tripName": "Best of Nepal Tour", "tripNameLink": "nepal/nepal-tour/best-of-nepal-tour","tripSubNames":[],"tripSubNameLinks":[]}
                
        ]},
        {"tripType" : "Nepal Fun & Adventure" , "tripTypeLink" : "adventure-fun-trips-in-nepal" ,
        "dropdowns" : [
            
            {"tripName": "Nepal Peak Climbing", "tripNameLink": "nepal-peak-climbing", "tripSubNames": ["Singu Chuli Peak Climbing", "Pisang Peak Climbing", "Island Peak Climbing", "Tent Peak Climbing", "Mera Peak Climbing"], "tripSubNameLinks": ["nepal-peak-climbing/singu-chuli-peak-climbing", "nepal-peak-climbing/pisang-peak-climbing", "nepal-peak-climbing/island-peak-climbing", "nepal-peak-climbing/tent-peak-climbing", "nepal-peak-climbing/mera-peak-climbing"]},
            {"tripName": "River Rafting in Nepal", "tripNameLink": "nepal-river-rafting", "tripSubNames": ["Kali Gandaki River Rafting", "Seti River Rafting", "Marsyangdi River Rafting", "Sunkoshi River Rafting", "Trishuli River Rafting"], "tripSubNameLinks": ["nepal-river-rafting/kali-gandaki-river-rafting", "nepal-river-rafting/seti-river-rafting", "nepal-river-rafting/marsyangdi-river-rafting", "nepal-river-rafting/sunkoshi-river-rafting", "nepal-river-rafting/trishuli-river-rafting"]},
            {"tripName": "Day Tour Around Kathmandu", "tripNameLink": "day-tour-around-kathmandu", "tripSubNames": ["Bhaktapur Day Tour", "Bungamati and Khokana Village Tour", "Pharping and Dakshinkali Day Tour", "One Day Trek from Kathmandu Valley"], "tripSubNameLinks": ["day-tour-around-kathmandu/bhaktapur-day-tour", "day-tour-around-kathmandu/bungamati-and-khokana-village-tour", "day-tour-around-kathmandu/pharping-and-dakshinkali-day-tour", "day-tour-around-kathmandu/one-day-trek-from-kathmandu-valley"]},
            {"tripName": "Ultimate Bungy Jump", "tripNameLink": "adventure-fun-trips-in-nepal/ultimate-bungy-jump","tripSubNames":[],"tripSubNameLinks":[]},
        {"tripName": "Paragliding Nepal", "tripNameLink": "adventure-fun-trips-in-nepal/paragliding-nepal","tripSubNames":[],"tripSubNameLinks":[]},
        {"tripName": "Ultra light Aircraft Flight in Pokhara", "tripNameLink": "adventure-fun-trips-in-nepal/ultra-light-aircraft-flight-in-pokhara","tripSubNames":[],"tripSubNameLinks":[]},
        {"tripName": "Nepal Mountain Flight", "tripNameLink": "adventure-fun-trips-in-nepal/nepal-mountain-flight","tripSubNames":[],"tripSubNameLinks":[]},
        {"tripName": "Extreme Zip Line Nepal", "tripNameLink": "adventure-fun-trips-in-nepal/extreme-zip-line-nepal","tripSubNames":[],"tripSubNameLinks":[]}
    
    
        ]},
        {"tripType" : "Travel Info" , "tripTypeLink" : "travel-info" ,
        "dropdowns" : [
            {"tripName": "Nepal at a Glance", "tripNameLink": "nepal-at-a-glance","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "What is Acute Mountain Sickness?", "tripNameLink": "what-is-acute-mountain-sickness","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Trekking Packing List", "tripNameLink": "trekking-packing-list","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Entry Procedure to Nepal", "tripNameLink": "entry-procedure-to-nepal","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Nepal Trekking Permit and Fees", "tripNameLink": "destination/nepal-trekking-permit","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Frequently Asked Questions", "tripNameLink": "frequently-asked-questions","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Travel Insurance", "tripNameLink": "travel-insurance","tripSubNames":[],"tripSubNameLinks":[]}
    
        ]}
    ]
    


export {menuItems}
