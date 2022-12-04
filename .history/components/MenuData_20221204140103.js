import React from 'react'
const menuItems = [{
        "tripType" : "Nepal Trekking" , "tripTypeLink" : "nepal-trekking" ,
        "dropdowns" : [
            {"tripName": "Annapurna Trekking", "tripNameLink": "nepal-trekking/annapurna-trekking", "tripSubNames": ["Jomsom Muktinath Trekking", "Extreme Saribung Trekking and Peak Climbing", "Annapurna Sanctuary Trekking", "Khair Lake Trekking", "Nagi Narchyang Trek", "Tatopani Ghorepani Village Trekking", "Annapurna off the beaten trail trek", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Australian Camp Dhampus Village Tour", "Annapurna Circuit Trekking", "Annapurna Base Camp Trekking", "Mardi Himal Trek 5 Days", "Poon Hill Trek 4 days", "Nar Phu Valley Trekking", "Mardi Himal Trek", "Upper Mustang Trekking"], "tripSubNameLinks": ["nepal-trekking/annapurna-trekking/jomsom-muktinath-trekking", "nepal-trekking/annapurna-trekking/extreme-saribung-trekking-and-peak-climbing", "nepal-trekking/annapurna-trekking/annapurna-sanctuary-trekking", "nepal-trekking/annapurna-trekking/khair-lake-trekking", "nepal-trekking/annapurna-trekking/nagi-narchyang-trek", "nepal-trekking/annapurna-trekking/tatopani-ghorepani-village-trekking", "nepal-trekking/annapurna-trekking/annapurna-off-the-beaten-trail-trek", "nepal-trekking/annapurna-trekking/yartung-festival-trekking", "nepal-trekking/annapurna-trekking/mustang-tiji-festival-trek", "nepal-trekking/annapurna-trekking/australian-camp-dhampus-village-tour", "nepal-trekking/annapurna-trekking/annapurna-circuit-trekking", "nepal-trekking/annapurna-trekking/annapurna-base-camp-trekking", "nepal-trekking/annapurna-trekking/mardi-himal-trek-5-days", "nepal-trekking/annapurna-trekking/poon-hill-trek-4-days", "nepal-trekking/annapurna-trekking/nar-phu-valley-trekking", "nepal-trekking/annapurna-trekking/mardi-himal-trek", "nepal-trekking/annapurna-trekking/upper-mustang-trekking"]},
            {"tripName": "Everest Trekking", "tripNameLink": "nepal-trekking/everest-trekking", "tripSubNames": ["Gokyo Chola Pass Trek", "Dumji Festival Trek", "Everest Gokyo Trek", "Everest Three High Passes Trekking", "Classic Jiri Everest Base Camp Trekking", "Everest Panorama Trekking", "Everest Base Camp Trekking", "Mani Rimdu Festival Trekking", "Dudh Kunda Pikey Peak Trek", "pikey peak trek"], "tripSubNameLinks": ["nepal-trekking/everest-trekking/gokyo-chola-pass-trek", "nepal-trekking/everest-trekking/dumji-festival-trek", "nepal-trekking/everest-trekking/everest-gokyo-trek", "nepal-trekking/everest-trekking/everest-three-high-passes-trekking", "nepal-trekking/everest-trekking/classic-jiri-everest-base-camp-trekking", "nepal-trekking/everest-trekking/everest-panorama-trekking", "nepal-trekking/everest-trekking/everest-base-camp-trekking", "nepal-trekking/everest-trekking/mani-rimdu-festival-trekking", "nepal-trekking/everest-trekking/dudh-kunda-pikey-peak-trek", "nepal-trekking/everest-trekking/pikey-peak-trek"]},
            {"tripName": "Langtang Region Trek", "tripNameLink": "nepal-trekking/langtang-region-trekking", "tripSubNames": ["Langtang Ganjala Pass Trekking", "Langtang Gosaikunda Trekking", "Langtang Helambu Trekking", "Classic Langtang Valley Trekking", "Tamang Heritage Trail Trekking", "Tamang Heritage and Langtang Valley Trek", "Helambu Circuit Trekking"], "tripSubNameLinks": ["nepal-trekking/langtang-region-trekking/langtang-ganjala-pass-trekking", "nepal-trekking/langtang-region-trekking/langtang-gosaikunda-trekking", "nepal-trekking/langtang-region-trekking/langtang-helambu-trekking", "nepal-trekking/langtang-region-trekking/classic-langtang-valley-trekking", "nepal-trekking/langtang-region-trekking/tamang-heritage-trail-trekking", "nepal-trekking/langtang-region-trekking/tamang-heritage-and-langtang-valley-trek", "nepal-trekking/langtang-region-trekking/helambu-circuit-trekking"]},
            {"tripName": "Manaslu Trek", "tripNameLink": "nepal-trekking/manaslu-trekking", "tripSubNames": ["Lower Manaslu Trekking", "Rupina La Pass Trek", "Manaslu Tsum Valley Trekking", "Manaslu Circuit Trekking", "Tsum Valley Trekking"], "tripSubNameLinks": ["nepal-trekking/manaslu-trekking/lower-manaslu-trekking", "nepal-trekking/manaslu-trekking/rupina-la-pass-trek", "nepal-trekking/manaslu-trekking/manaslu-tsum-valley-trekking", "nepal-trekking/manaslu-trekking/manaslu-circuit-trekking", "nepal-trekking/manaslu-trekking/tsum-valley-trekking"]},
            {"tripName": "Ganesh Himal Trek", "tripNameLink": "nepal-trekking/ganesh-himal-trekking", "tripSubNames": ["Ganesh Himal Tamang Heritage Trail Trekking", "Ganesh Himal Panorama Trekking"], "tripSubNameLinks": ["nepal-trekking/ganesh-himal-trekking/ganesh-himal-tamang-heritage-trail-trekking", "nepal-trekking/ganesh-himal-trekking/ganesh-himal-panorama-trekking"]},
            {"tripName": "Nepal Village Trek", "tripNameLink": "nepal-trekking/nepal-village-trekking", "tripSubNames": ["Ganesh Himal Tamang Heritage Trail Trekking", "Ghale Gaun Village Trek", "Tatopani Ghorepani Village Trekking", "3 days poon hill trek from Pokhara", "Australian Camp Dhampus Village Tour", "Chisapani Nagarkot Trek", "Balthali Village Trek", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek"], "tripSubNameLinks": ["nepal-trekking/nepal-village-trekking/ganesh-himal-tamang-heritage-trail-trekking", "nepal-trekking/nepal-village-trekking/ghale-gaun-village-trek", "nepal-trekking/nepal-village-trekking/tatopani-ghorepani-village-trekking", "nepal-trekking/nepal-village-trekking/3-days-poon-hill-trek-from-pokhara", "nepal-trekking/nepal-village-trekking/australian-camp-dhampus-village-tour", "nepal-trekking/nepal-village-trekking/chisapani-nagarkot-trek", "nepal-trekking/nepal-village-trekking/balthali-village-trek", "nepal-trekking/nepal-village-trekking/tamang-heritage-trail-trekking", "nepal-trekking/nepal-village-trekking/poon-hill-trek-4-days", "nepal-trekking/nepal-village-trekking/pikey-peak-trek"]},
            {"tripName": "Nepal Festival Tours and Treks", "tripNameLink": "nepal-trekking/nepal-festival-tours-and-treks", "tripSubNames": ["Dumji Festival Trek", "Dawa Dangbo Tsechu Festival", "Yartung Festival Trekking", "Mustang Tiji Festival Trek", "Mani Rimdu Festival Trekking"], "tripSubNameLinks": ["nepal-trekking/nepal-festival-tours-and-treks/dumji-festival-trek", "nepal-trekking/nepal-festival-tours-and-treks/dawa-dangbo-tsechu-festival", "nepal-trekking/nepal-festival-tours-and-treks/yartung-festival-trekking", "nepal-trekking/nepal-festival-tours-and-treks/mustang-tiji-festival-trek", "nepal-trekking/nepal-festival-tours-and-treks/mani-rimdu-festival-trekking"]},
            {"tripName": "Kanchenjunga Trek", "tripNameLink": "nepal-trekking/kanchenjunga-trekking", "tripSubNames": ["Kanchenjunga Base Camp Trekking", "Kanchenjunga north base camp Trek"], "tripSubNameLinks": ["nepal-trekking/kanchenjunga-trekking/kanchenjunga-base-camp-trekking", "nepal-trekking/kanchenjunga-trekking/kanchenjunga-north-base-camp-trek"]},
            {"tripName": "Dolpo Trekking", "tripNameLink": "nepal-trekking/dolpo-trekking", "tripSubNames": ["Lower Dolpo Circuit Trek", "Classic Beni Lower Dolpa Trekking", "upper dolpo trek"], "tripSubNameLinks": ["nepal-trekking/dolpo-trekking/lower-dolpo-circuit-trek", "nepal-trekking/dolpo-trekking/classic-beni-lower-dolpa-trekking", "nepal-trekking/dolpo-trekking/upper-dolpo-trek"]},
            {"tripName": "Humla Trek", "tripNameLink": "nepal-trekking/humla-trek", "tripSubNames": ["humla limi valley trek"], "tripSubNameLinks": ["nepal-trekking/humla-trek/humla-limi-valley-trek"]},
            {"tripName": "9 Best five days trek in Nepal", "tripNameLink": "nepal-trekking/5-days-trek-in-nepal", "tripSubNames": ["Everest Panorama Trekking", "Classic Langtang Valley Trekking", "Balthali Village Trek", "Annapurna Base Camp Trekking", "Tamang Heritage Trail Trekking", "Poon Hill Trek 4 days", "pikey peak trek", "Helambu Circuit Trekking", "Mardi Himal Trek"], "tripSubNameLinks": ["nepal-trekking/5-days-trek-in-nepal/everest-panorama-trekking", "nepal-trekking/5-days-trek-in-nepal/classic-langtang-valley-trekking", "nepal-trekking/5-days-trek-in-nepal/balthali-village-trek", "nepal-trekking/5-days-trek-in-nepal/annapurna-base-camp-trekking", "nepal-trekking/5-days-trek-in-nepal/tamang-heritage-trail-trekking", "nepal-trekking/5-days-trek-in-nepal/poon-hill-trek-4-days", "nepal-trekking/5-days-trek-in-nepal/pikey-peak-trek", "nepal-trekking/5-days-trek-in-nepal/helambu-circuit-trekking", "nepal-trekking/5-days-trek-in-nepal/mardi-himal-trek"]}
            {"tripName": "Rara Trekking", "tripNameLink": "nepal-trekking/rara-trekking", "tripSubNames": ["Rara Lake Trekking"], "tripSubNameLinks": ["nepal-trekking/rara-trekking/rara-lake-trekking"]},
            
        ]
            
    },
    {"tripType" : "Nepal Tour" , "tripTypeLink" : "nepal-tour" ,
        "dropdowns" : [
            
                {"tripName": "Nepal Culture and Wildlife Adventure Tour", "tripNameLink": "nepal-tour/nepal-culture-and-wildlife-adventure-tour","tripSubNames":[],"tripSubNameLinks":[] },
                {"tripName": "Nepal Honeymoon Tour", "tripNameLink": "nepal-tour/nepal-honeymoon-tour","tripSubNames":[],"tripSubNameLinks":[]},
                {"tripName": "Buddhist Pilgrimage Tour", "tripNameLink": "nepal-tour/buddhist-pilgrimage-tour","tripSubNames":[],"tripSubNameLinks":[]},
                {"tripName": "Best of Nepal Tour", "tripNameLink": "nepal-tour/best-of-nepal-tour","tripSubNames":[],"tripSubNameLinks":[]}
                
        ]},
        {"tripType" : "Nepal Fun & Adventure" , "tripTypeLink" : "adventure-fun-trips-in-nepal" ,
        "dropdowns" : [
            
            {"tripName": "Nepal Peak Climbing", "tripNameLink": "nepal-peak-climbing", "tripSubNames": ["Singu Chuli Peak Climbing", "Pisang Peak Climbing", "Island Peak Climbing", "Tent Peak Climbing", "Mera Peak Climbing"], "tripSubNameLinks": ["adventure-fun-trips-in-nepal/nepal-peak-climbing/singu-chuli-peak-climbing", "adventure-fun-trips-in-nepal/nepal-peak-climbing/pisang-peak-climbing", "adventure-fun-trips-in-nepal/nepal-peak-climbing/island-peak-climbing", "adventure-fun-trips-in-nepal/nepal-peak-climbing/tent-peak-climbing", "adventure-fun-trips-in-nepal/nepal-peak-climbing/mera-peak-climbing"]},
            {"tripName": "River Rafting in Nepal", "tripNameLink": "nepal-river-rafting", "tripSubNames": ["Kali Gandaki River Rafting", "Seti River Rafting", "Marsyangdi River Rafting", "Sunkoshi River Rafting", "Trishuli River Rafting"], "tripSubNameLinks": ["adventure-fun-trips-in-nepal/nepal-river-rafting/kali-gandaki-river-rafting", "adventure-fun-trips-in-nepal/nepal-river-rafting/seti-river-rafting", "adventure-fun-trips-in-nepal/nepal-river-rafting/marsyangdi-river-rafting", "adventure-fun-trips-in-nepal/nepal-river-rafting/sunkoshi-river-rafting", "adventure-fun-trips-in-nepal/nepal-river-rafting/trishuli-river-rafting"]},
            {"tripName": "Day Tour Around Kathmandu", "tripNameLink": "day-tour-around-kathmandu", "tripSubNames": ["Bhaktapur Day Tour", "Bungamati and Khokana Village Tour", "Pharping and Dakshinkali Day Tour", "One Day Trek from Kathmandu Valley"], "tripSubNameLinks": ["adventure-fun-trips-in-nepal/day-tour-around-kathmandu/bhaktapur-day-tour", "adventure-fun-trips-in-nepal/day-tour-around-kathmandu/bungamati-and-khokana-village-tour", "adventure-fun-trips-in-nepal/day-tour-around-kathmandu/pharping-and-dakshinkali-day-tour", "adventure-fun-trips-in-nepal/day-tour-around-kathmandu/one-day-trek-from-kathmandu-valley"]},
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
    {"tripName": "Nepal Trekking Permit and Fees", "tripNameLink": "nepal-trekking-permit","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Frequently Asked Questions", "tripNameLink": "frequently-asked-questions","tripSubNames":[],"tripSubNameLinks":[]},
    {"tripName": "Travel Insurance", "tripNameLink": "travel-insurance","tripSubNames":[],"tripSubNameLinks":[]}
    
        ]}
    ]
    


export {menuItems}
