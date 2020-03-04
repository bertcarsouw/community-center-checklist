const rooms = [{"name":"Crafts Room","image":"assets/rooms/crafts-room.png","bundles":[{"name":"Spring Foraging Bundle","image":"assets/crafts-room/springforaging-bundle/springforaging-bundle.png","items":[{"name":"Wild Horseradish","image":"assets/crafts-room/springforaging-bundle/wildhorseradish.png","id":1,"quality":false},{"name":"Daffodil","image":"assets/crafts-room/springforaging-bundle/daffodil.png","id":2,"quality":false},{"name":"Leek","image":"assets/crafts-room/springforaging-bundle/leek.png","id":3,"quality":false},{"name":"Dandelion","image":"assets/crafts-room/springforaging-bundle/dandelion.png","id":4,"quality":false}],"required":4,"id":1},{"name":"Summer Foraging Bundle","image":"assets/crafts-room/summerforaging-bundle/summerforaging-bundle.png","items":[{"name":"Grape","image":"assets/crafts-room/summerforaging-bundle/grape.png","id":5,"quality":false},{"name":"Spiceberry","image":"assets/crafts-room/summerforaging-bundle/spiceberry.png","id":6,"quality":false},{"name":"Sweetpea","image":"assets/crafts-room/summerforaging-bundle/sweetpea.png","id":7,"quality":false}],"required":3,"id":2},{"name":"Fall Foraging Bundle","image":"assets/crafts-room/fallforaging-bundle/fallforaging-bundle.png","items":[{"name":"Common Mushroom","image":"assets/crafts-room/fallforaging-bundle/commonmushroom.png","id":8,"quality":false},{"name":"Wild Plum","image":"assets/crafts-room/fallforaging-bundle/wildplum.png","id":9,"quality":false},{"name":"Hazelnut","image":"assets/crafts-room/fallforaging-bundle/hazelnut.png","id":10,"quality":false},{"name":"Blackberry","image":"assets/crafts-room/fallforaging-bundle/blackberry.png","id":11,"quality":false}],"required":4,"id":3},{"name":"Winter Foraging Bundle","image":"assets/crafts-room/winterforaging-bundle/winterforaging-bundle.png","items":[{"name":"Winter Root","image":"assets/crafts-room/winterforaging-bundle/winterroot.png","id":12,"quality":false},{"name":"Crustal Fruit","image":"assets/crafts-room/winterforaging-bundle/crystalfruit.png","id":13,"quality":false},{"name":"Snowyam","image":"assets/crafts-room/winterforaging-bundle/snowyam.png","id":14,"quality":false},{"name":"Crocus","image":"assets/crafts-room/winterforaging-bundle/crocus.png","id":15,"quality":false}],"required":4,"id":4},{"name":"Construction Bundle","image":"assets/crafts-room/construction-bundle/construction-bundle.png","items":[{"name":"Wood (99)","image":"assets/crafts-room/construction-bundle/wood.png","id":16,"quality":false},{"name":"Wood (99)","image":"assets/crafts-room/construction-bundle/wood.png","id":17,"quality":false},{"name":"Stone (99)","image":"assets/crafts-room/construction-bundle/stone.png","id":18,"quality":false},{"name":"Hardwood (10)","image":"assets/crafts-room/construction-bundle/hardwood.png","id":19,"quality":false}],"required":4,"id":5},{"name":"Exotic Foraging Bundle","image":"assets/crafts-room/exoticforaging-bundle/exoticforaging-bundle.png","items":[{"name":"Coconut","image":"assets/crafts-room/exoticforaging-bundle/coconut.png","id":20,"quality":false},{"name":"Cactus Fruit","image":"assets/crafts-room/exoticforaging-bundle/cactusfruit.png","id":21,"quality":false},{"name":"Cave Carrot","image":"assets/crafts-room/exoticforaging-bundle/cavecarrot.png","id":22,"quality":false},{"name":"Red Mushroom","image":"assets/crafts-room/exoticforaging-bundle/redmushroom.png","id":23,"quality":false},{"name":"Purple Mushroom","image":"assets/crafts-room/exoticforaging-bundle/purplemushroom.png","id":24,"quality":false},{"name":"Maple Syrup","image":"assets/crafts-room/exoticforaging-bundle/maplesyrup.png","id":25,"quality":false},{"name":"Oak Resin","image":"assets/crafts-room/exoticforaging-bundle/oakresin.png","id":26,"quality":false},{"name":"Pine Tar","image":"assets/crafts-room/exoticforaging-bundle/pinetar.png","id":27,"quality":false},{"name":"Morel","image":"assets/crafts-room/exoticforaging-bundle/morel.png","id":28,"quality":false}],"required":5,"id":6}],"id":1},{"name":"Pantry","image":"assets/rooms/pantry.png","bundles":[{"name":"Spring Crops Bundle","image":"assets/pantry/springcrops-bundle/springcrops-bundle.png","items":[{"name":"Parsnip","image":"assets/pantry/springcrops-bundle/parsnip.png","id":29,"quality":false},{"name":"Green Bean","image":"assets/pantry/springcrops-bundle/greenbean.png","id":30,"quality":false},{"name":"Cauliflower","image":"assets/pantry/springcrops-bundle/cauliflower.png","id":31,"quality":false},{"name":"Potato","image":"assets/pantry/springcrops-bundle/potato.png","id":32,"quality":false}],"required":4,"id":7},{"name":"Summer Crops Bundle","image":"assets/pantry/summercrops-bundle/summercrops-bundle.png","items":[{"name":"Tomato","image":"assets/pantry/summercrops-bundle/tomato.png","id":33,"quality":false},{"name":"Hot Pepper","image":"assets/pantry/summercrops-bundle/hotpepper.png","id":34,"quality":false},{"name":"Blueberry","image":"assets/pantry/summercrops-bundle/blueberry.png","id":35,"quality":false},{"name":"Melon","image":"assets/pantry/summercrops-bundle/melon.png","id":36,"quality":false}],"required":4,"id":8},{"name":"Fall Crops Bundle","image":"assets/pantry/fallcrops-bundle/fallcrops-bundle.png","items":[{"name":"Corn","image":"assets/pantry/fallcrops-bundle/corn.png","id":37,"quality":false},{"name":"Eggplant","image":"assets/pantry/fallcrops-bundle/eggplant.png","id":38,"quality":false},{"name":"Pumpkin","image":"assets/pantry/fallcrops-bundle/pumpkin.png","id":39,"quality":false},{"name":"Yam","image":"assets/pantry/fallcrops-bundle/yam.png","id":40,"quality":false}],"required":4,"id":9},{"name":"Quality Crops Bundle","image":"assets/pantry/qualitycrops-bundle/qualitycrops-bundle.png","items":[{"name":"Parsnip (5)","image":"assets/pantry/qualitycrops-bundle/parsnip.png","id":41,"quality":true},{"name":"Melon (5)","image":"assets/pantry/qualitycrops-bundle/melon.png","id":42,"quality":true},{"name":"Pumpkin (5)","image":"assets/pantry/qualitycrops-bundle/pumpkin.png","id":43,"quality":true},{"name":"Corn (5)","image":"assets/pantry/qualitycrops-bundle/corn.png","id":44,"quality":true}],"required":3,"id":10},{"name":"Animal Bundle","image":"assets/pantry/animal-bundle/animal-bundle.png","items":[{"name":"Large Milk","image":"assets/pantry/animal-bundle/largemilk.png","id":45,"quality":false},{"name":"Large Egg (brown)","image":"assets/pantry/animal-bundle/largeeggbrown.png","id":46,"quality":false},{"name":"Large Egg","image":"assets/pantry/animal-bundle/largeeggwhite.png","id":47,"quality":false},{"name":"Large Goat Milk","image":"assets/pantry/animal-bundle/largegoatmilk.png","id":48,"quality":false},{"name":"Wool","image":"assets/pantry/animal-bundle/wool.png","id":49,"quality":false},{"name":"Duck Egg","image":"assets/pantry/animal-bundle/duckegg.png","id":50,"quality":false}],"required":5,"id":11},{"name":"Artisan Bundle","image":"assets/pantry/artisan-bundle/artisan-bundle.png","items":[{"name":"Truffle Oil","image":"assets/pantry/artisan-bundle/truffleoil.png","id":51,"quality":false},{"name":"Cloth","image":"assets/pantry/artisan-bundle/cloth.png","id":52,"quality":false},{"name":"Goat Cheese","image":"assets/pantry/artisan-bundle/goatcheese.png","id":53,"quality":false},{"name":"Cheese","image":"assets/pantry/artisan-bundle/cheese.png","id":54,"quality":false},{"name":"Honey","image":"assets/pantry/artisan-bundle/honey.png","id":55,"quality":false},{"name":"Jelly","image":"assets/pantry/artisan-bundle/jelly.png","id":56,"quality":false},{"name":"Apple","image":"assets/pantry/artisan-bundle/apple.png","id":57,"quality":false},{"name":"Apricot","image":"assets/pantry/artisan-bundle/apricot.png","id":58,"quality":false},{"name":"Orange","image":"assets/pantry/artisan-bundle/orange.png","id":59,"quality":false},{"name":"Peach","image":"assets/pantry/artisan-bundle/peach.png","id":60,"quality":false},{"name":"Pomegranate","image":"assets/pantry/artisan-bundle/pomegranate.png","id":61,"quality":false},{"name":"Cherry","image":"assets/pantry/artisan-bundle/cherry.png","id":62,"quality":false}],"required":6,"id":12}],"id":2},{"name":"Fish Tank","image":"assets/rooms/vault.png","bundles":[{"name":"River Fish Bundle","image":"assets/fish-tank/riverfish-bundle/riverfish-bundle.png","items":[{"name":"Sunfish","image":"assets/fish-tank/riverfish-bundle/sunfish.png","id":63,"quality":false},{"name":"Catfish","image":"assets/fish-tank/riverfish-bundle/catfish.png","id":64,"quality":false},{"name":"Shad","image":"assets/fish-tank/riverfish-bundle/shad.png","id":65,"quality":false},{"name":"Tigertrout","image":"assets/fish-tank/riverfish-bundle/tigertrout.png","id":66,"quality":false}],"required":4,"id":13},{"name":"Lake Fish Bundle","image":"assets/fish-tank/lakefish-bundle/lakefish-bundle.png","items":[{"name":"Largemouth Bass","image":"assets/fish-tank/lakefish-bundle/largemouthbass.png","id":67,"quality":false},{"name":"Carp","image":"assets/fish-tank/lakefish-bundle/carp.png","id":68,"quality":false},{"name":"Bullhead","image":"assets/fish-tank/lakefish-bundle/bullhead.png","id":69,"quality":false},{"name":"Sturgeon","image":"assets/fish-tank/lakefish-bundle/sturgeon.png","id":70,"quality":false}],"required":4,"id":14},{"name":"Ocean Fish Bundle","image":"assets/fish-tank/oceanfish-bundle/oceanfish-bundle.png","items":[{"name":"Sardine","image":"assets/fish-tank/oceanfish-bundle/sardine.png","id":71,"quality":false},{"name":"Tuna","image":"assets/fish-tank/oceanfish-bundle/tuna.png","id":72,"quality":false},{"name":"Red Snapper","image":"assets/fish-tank/oceanfish-bundle/redsnapper.png","id":73,"quality":false},{"name":"Tilapia","image":"assets/fish-tank/oceanfish-bundle/tilapia.png","id":74,"quality":false}],"required":4,"id":15},{"name":"Night Fishing Bundle","image":"assets/fish-tank/nightfishing-bundle/nightfishing-bundle.png","items":[{"name":"Walleye","image":"assets/fish-tank/nightfishing-bundle/walleye.png","id":75,"quality":false},{"name":"Bream","image":"assets/fish-tank/nightfishing-bundle/bream.png","id":76,"quality":false},{"name":"Eel","image":"assets/fish-tank/nightfishing-bundle/eel.png","id":77,"quality":false}],"required":3,"id":16},{"name":"Crab Pot Bundle","image":"assets/fish-tank/crabpot-bundle/crabpot-bundle.png","items":[{"name":"Lobster","image":"assets/fish-tank/crabpot-bundle/lobster.png","id":78,"quality":false},{"name":"Crayfish","image":"assets/fish-tank/crabpot-bundle/crayfish.png","id":79,"quality":false},{"name":"Crab","image":"assets/fish-tank/crabpot-bundle/crab.png","id":80,"quality":false},{"name":"Cockle","image":"assets/fish-tank/crabpot-bundle/cockle.png","id":81,"quality":false},{"name":"Mussel","image":"assets/fish-tank/crabpot-bundle/mussel.png","id":82,"quality":false},{"name":"Shrimp","image":"assets/fish-tank/crabpot-bundle/shrimp.png","id":83,"quality":false},{"name":"Snail","image":"assets/fish-tank/crabpot-bundle/snail.png","id":84,"quality":false},{"name":"Periwinkle","image":"assets/fish-tank/crabpot-bundle/periwinkle.png","id":85,"quality":false},{"name":"Oyster","image":"assets/fish-tank/crabpot-bundle/oyster.png","id":86,"quality":false},{"name":"Clam","image":"assets/fish-tank/crabpot-bundle/clam.png","id":87,"quality":false}],"required":5,"id":17},{"name":"Specialty Fish Bundle","image":"assets/fish-tank/specialtyfish-bundle/specialtyfish-bundle.png","items":[{"name":"Pufferfish","image":"assets/fish-tank/specialtyfish-bundle/pufferfish.png","id":88,"quality":false},{"name":"Ghostfish","image":"assets/fish-tank/specialtyfish-bundle/ghostfish.png","id":89,"quality":false},{"name":"Sandfish","image":"assets/fish-tank/specialtyfish-bundle/sandfish.png","id":90,"quality":false},{"name":"Woodskip","image":"assets/fish-tank/specialtyfish-bundle/woodskip.png","id":91,"quality":false}],"required":4,"id":18}],"id":3},{"name":"Boiler Room","image":"assets/rooms/boiler-room.png","bundles":[{"name":"Blacksmith's Bundle","image":"assets/boiler-room/blacksmiths-bundle/blacksmithsbundle.png","items":[{"name":"Copper Bar","image":"assets/boiler-room/blacksmiths-bundle/copperbar.png","id":92,"quality":false},{"name":"Iron Bar","image":"assets/boiler-room/blacksmiths-bundle/ironbar.png","id":93,"quality":false},{"name":"Gold Bar","image":"assets/boiler-room/blacksmiths-bundle/goldbar.png","id":94,"quality":false}],"required":3,"id":19},{"name":"Geologist's Bundle","image":"assets/boiler-room/geologists-bundle/geologists-bundle.png","items":[{"name":"Quartz","image":"assets/boiler-room/geologists-bundle/quartz.png","id":95,"quality":false},{"name":"Earth Crystal","image":"assets/boiler-room/geologists-bundle/earthcrystal.png","id":96,"quality":false},{"name":"Frozen Tear","image":"assets/boiler-room/geologists-bundle/frozentear.png","id":97,"quality":false},{"name":"Fire Quartz","image":"assets/boiler-room/geologists-bundle/firequartz.png","id":98,"quality":false}],"required":4,"id":20},{"name":"Adventurer's Bundle","image":"assets/boiler-room/adventurers-bundle/adventurers-bundle.png","items":[{"name":"Slime","image":"assets/boiler-room/adventurers-bundle/slime.png","id":99,"quality":false},{"name":"Bat Wing","image":"assets/boiler-room/adventurers-bundle/batwing.png","id":100,"quality":false},{"name":"Solar Essence","image":"assets/boiler-room/adventurers-bundle/solaressence.png","id":101,"quality":false},{"name":"Void Essence","image":"assets/boiler-room/adventurers-bundle/voidessence.png","id":102,"quality":false}],"required":2,"id":21}],"id":4},{"name":"Bulletin Board","image":"assets/rooms/bulletin-board.png","bundles":[{"name":"Chef's Bundle","image":"assets/bulletin-board/chefs-bundle/chefs-bundle.png","items":[{"name":"Maple Syrup","image":"assets/bulletin-board/chefs-bundle/maplesyrup.png","id":103,"quality":false},{"name":"Fiddlehead Fern","image":"assets/bulletin-board/chefs-bundle/fiddleheadfern.png","id":104,"quality":false},{"name":"Truffle","image":"assets/bulletin-board/chefs-bundle/truffle.png","id":105,"quality":false},{"name":"Poppy","image":"assets/bulletin-board/chefs-bundle/poppy.png","id":106,"quality":false},{"name":"Makiroll","image":"assets/bulletin-board/chefs-bundle/makiroll.png","id":107,"quality":false},{"name":"Fried Egg","image":"assets/bulletin-board/chefs-bundle/friedegg.png","id":108,"quality":false}],"required": 6, "id":22},{"name":"Dye Bundle","image":"assets/bulletin-board/dye-bundle/dye-bundle.png","items":[{"name":"Red Mushroom","image":"assets/bulletin-board/dye-bundle/redmushroom.png","id":109,"quality":false},{"name":"Sea Urchin","image":"assets/bulletin-board/dye-bundle/seaurchin.png","id":110,"quality":false},{"name":"Sunflower","image":"assets/bulletin-board/dye-bundle/sunflower.png","id":111,"quality":false},{"name":"Duck Feather","image":"assets/bulletin-board/dye-bundle/duckfeather.png","id":112,"quality":false},{"name":"Aquamarine","image":"assets/bulletin-board/dye-bundle/aquamarine.png","id":113,"quality":false},{"name":"Red Cabbage","image":"assets/bulletin-board/dye-bundle/redcabbage.png","id":114,"quality":false}],"required":6,"id":23},{"name":"Field Research Bundle","image":"assets/bulletin-board/fieldresearch-bundle/fieldresearch-bundle.png","items":[{"name":"Purple Mushroom","image":"assets/bulletin-board/fieldresearch-bundle/purplemushroom.png","id":115,"quality":false},{"name":"Nautilus Shell","image":"assets/bulletin-board/fieldresearch-bundle/nautilusshell.png","id":116,"quality":false},{"name":"Chub","image":"assets/bulletin-board/fieldresearch-bundle/chub.png","id":117,"quality":false},{"name":"Frozen Geode","image":"assets/bulletin-board/fieldresearch-bundle/frozengeode.png","id":118,"quality":false}],"required":4,"id":24},{"name":"Fodder Bundle","image":"assets/bulletin-board/fodder-bundle/fodder-bundle.png","items":[{"name":"Wheat","image":"assets/bulletin-board/fodder-bundle/wheat.png","id":119,"quality":false},{"name":"Hay","image":"assets/bulletin-board/fodder-bundle/hay.png","id":120,"quality":false},{"name":"Apple","image":"assets/bulletin-board/fodder-bundle/apple.png","id":121,"quality":false}],"required":3,"id":25},{"name":" Enchanter's Bundle","image":"assets/bulletin-board/enchanters-bundle/enchanters-bundle.png","items":[{"name":"Oak Resin","image":"assets/bulletin-board/enchanters-bundle/oakresin.png","id":122,"quality":false},{"name":"Wine","image":"assets/bulletin-board/enchanters-bundle/wine.png","id":123,"quality":false},{"name":"Rabbit's Foot","image":"assets/bulletin-board/enchanters-bundle/rabbitsfoot.png","id":124,"quality":false},{"name":"Pomegranate","image":"assets/bulletin-board/enchanters-bundle/pomegranate.png","id":125,"quality":false}],"required":4,"id":26}],"id":5},{"name":"Vault","image":"assets/rooms/vault.png","bundles":[{"name":"2,500 Bundle","image":"assets/vault/2500-bundle/2500-bundle.png","items":[{"name":"2500 gold","image":"assets/vault/2500-bundle/2500g.png","id":126,"quality":false}],"required":1,"id":27},{"name":"5,000 Bundle","image":"assets/vault/5000-bundle/5000-bundle.png","items":[{"name":"5000 gold","image":"assets/vault/5000-bundle/5000g.png","id":127,"quality":false}],"required":1,"id":28},{"name":"10,000 Bundle","image":"assets/vault/10000-bundle/10000-bundle.png","items":[{"name":"10.000 gold","image":"assets/vault/10000-bundle/10000g.png","id":128,"quality":false}],"required":1,"id":29},{"name":"25,000 Bundle","image":"assets/vault/25000-bundle/25000-bundle.png","items":[{"name":"25.000 gold","image":"assets/vault/25000-bundle/25000g.png","id":129,"quality":false}],"required":1,"id":30}],"id":6}];

let completedIds = [];

const htmlElementWrapper = elements => ({
	forEach: callback => {
		for (let counter = 0; counter < elements.length; counter++) callback(elements[counter], counter, elements);
	}
});

const createHtmlElement = (type, classes, content) => {
	const element = document.createElement(type);
	if (classes) element.classList.add(...classes);
	if (content) element.innerHTML = content;
	return element;
};

const readCompletedIdsFromStorage = () => {
	const item = localStorage.getItem('ccc');
	if (item) completedIds = JSON.parse(item);
};

const storeCompletedIds = () => localStorage.setItem('ccc', JSON.stringify(completedIds));

const createImageElement = src => {
	const element = document.createElement('img');
	element.src = src;
	return element;
};

const insertHtmlElementAfter = (newNode, afterNode) => afterNode.parentNode.insertBefore(newNode, afterNode.nextSibling);

const setRoomHeights = () => {
	const roomElements = document.getElementsByClassName('room');
	const height = window.innerHeight / roomElements.length - 1;
	htmlElementWrapper(roomElements).forEach(item => item.style.height = `${height}px`);
};

const setRoomClickHandler = room => {
	room.addEventListener('click', () => {
		const content = room.nextElementSibling;
		content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
	});
};

const setBundleClickHandler = bundle => {
	bundle.addEventListener('click', () => {
		const content = bundle.nextElementSibling;
		content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
		bundle.parentElement.style.maxHeight = `${parseInt(bundle.parentElement.style.maxHeight) + content.scrollHeight}px`;
	});
};

const setItemClickHandler = item => {
	item.addEventListener('click', () => {
		const id = parseInt(item.id.replace('item-', ''));
		const completedIndex = completedIds.indexOf(id);
		completedIndex >= 0 ? completedIds.splice(completedIndex, 1) : completedIds.push(id);
		storeCompletedIds();
		setProgress();
	});
};

const setRoomClickHandlers = () => htmlElementWrapper(document.getElementsByClassName('room')).forEach(item => setRoomClickHandler(item));

const setBundleClickHandlers = () => htmlElementWrapper(document.getElementsByClassName('bundle')).forEach(item => setBundleClickHandler(item));

const setItemClickHandlers = () => htmlElementWrapper(document.getElementsByClassName('item')).forEach(item => setItemClickHandler(item));

const buildRoomElement = (room, isLastRoom) => {
	const roomElement = createHtmlElement('div', ['room']);
	roomElement.appendChild(createHtmlElement('div', ['room__title'], room.name));
	roomElement.appendChild(createImageElement(room.image));
	if (isLastRoom) roomElement.classList.add('room__last');
	document.body.appendChild(roomElement);
	return roomElement;
};

const buildItemElements = items => {
	const itemExpendableElement = createHtmlElement('div', ['expandable']);
	items.forEach((item, index) => {
		const itemElement = createHtmlElement('div', ['item']);
		itemElement.id = `item-${item.id}`;
		if (items.length === index - 1) itemElement.classList.add('item__last');
		if (item.quality) itemElement.classList.add('item--quality');
		const nameElement = createHtmlElement('div', ['item__title'], item.name);
		const imageElement = createImageElement(item.image);
		itemElement.appendChild(nameElement);
		itemElement.appendChild(imageElement);
		itemExpendableElement.appendChild(itemElement);
	});
	return itemExpendableElement;
};

const buildBundleElements = (bundles) => {
	const expandableBundleElement = createHtmlElement('div', ['expandable']);
	bundles.forEach(bundle => {
		const bundleElement = createHtmlElement('div', ['bundle']);
		bundleElement.id = `bundle-${bundle.id}`;
		const titleElement = createHtmlElement('div', ['bundle__title'], bundle.name);
		titleElement.appendChild(createImageElement(bundle.image));
		bundleElement.appendChild(titleElement);
		bundleElement.appendChild(createHtmlElement('div', ['progress']));
		expandableBundleElement.appendChild(bundleElement);
		const itemElements = buildItemElements(bundle.items);
		insertHtmlElementAfter(itemElements, bundleElement);
	});
	return expandableBundleElement;
};

const buildRoomElements = () => {
	rooms.forEach((room, index) => {
		const roomElement = buildRoomElement(room, index === rooms.length - 1);
		roomElement.id = `room-${room.id}`;
		const expandableBundleElement = buildBundleElements(room.bundles);
		insertHtmlElementAfter(expandableBundleElement, roomElement);
	});
};

const setProgress = () => {
	setBundleProgress(completedIds);
	setItemProgress(completedIds);
};

const setBundleProgress = ids => {
	rooms.forEach(room => {
		let roomCompleted = true;
		room.bundles.forEach(bundle => {
			const bundleElement = document.getElementById(`bundle-${bundle.id}`);
			bundleElement.classList.remove('bundle--completed');
			const progressElement = bundleElement.getElementsByClassName('progress')[0];
			const finished = bundle.items.filter(item => ids.includes(item.id)).length;
			progressElement.innerHTML = `${finished} / ${bundle.required}`;
			if (finished >= bundle.required) {
				bundleElement.classList.add('bundle--completed');
			} else {
				roomCompleted = false;
			}
		});
		const roomElement = document.getElementById(`room-${room.id}`);
		roomCompleted ? roomElement.classList.add('room--completed') : roomElement.classList.remove('room--completed');
	});
};

const setItemProgress = () => {
	const lastBundles = rooms[rooms.length - 1].bundles;
	const lastItems = lastBundles[lastBundles.length - 1].items;
	const lastId = lastItems[lastItems.length - 1].id;
	for (let id = 1; id <= lastId; id++) {
		const idElement = document.getElementById(`item-${id}`);
		idElement.classList.remove('item--completed');
		if (completedIds.indexOf(id) >= 0) idElement.classList.add('item--completed');
	}
};

const init = () => {
	buildRoomElements();
	setRoomHeights();
	setRoomClickHandlers();
	setBundleClickHandlers();
	setItemClickHandlers();
	readCompletedIdsFromStorage();
	setProgress();

	window.addEventListener('resize', setRoomHeights);
};
