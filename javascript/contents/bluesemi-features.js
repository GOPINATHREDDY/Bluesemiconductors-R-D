// bluesemi-features.js
var bsFeatures = [{
	h3: "Smart City",
	p: "The additional aspect that could have been added up to inculcate the smartness of the smart city has been brought up by the BlueSemi product. Inducing to city's developmental graph, its contribution towards light switches, smart valves, security scenario, inside a house to people monitoring, gas leak detection, smart water and gas level metres monitoring, in the cityscape, has been a grandeur in the terms of innovation and execution."
}, {
	h3: "Retail",
	p: "The technological advancement has always been a thing of wonder and marvel. When the applicable fact is found  in the arena of retail, the Radio-frequency indentification (RFID) is the one that comes to play. BlueSemi, with its sweepable lineament, modifies the scenario of active tagging of products, along with other fields like electronic price tags, smart fridge thermometers, humidity sensors, electronic labels, by maintaining a highly durable battery backup."
}, {
	h3: "Toll Gates",
	p: "The toll gate connections, with time, have also invested themselves in the modern cacophony of technical advancement. BlueSemi fixates itself on the power backup of the sticker-based passive tag, not only lengthening the life span but also serving to its efficiency."
}, {
	h3: "Industrial IoT",
	p: "Our product does ring the bell, undoubtedly, when it comes up to the progression of the IoT devices, majorly with the sensors, as in the smoke detector sensors, current sensors, hitting off on the improvisation of the devices with long durabilities and escalated efficiency."
} ];

$(document).ready(function(){
	bsFeatures.forEach(function(el){
		$('#bluesemi-features').append(`<div class="card col-12"><div class="card-body"><h3 class="card-title">${el.h3}</h3><p class="card-text">${el.p}</p></div></div>`);
	});
});