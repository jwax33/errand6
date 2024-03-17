Hooks.once("diceSoNiceReady", (dice3d) => {
	dice3d.addSystem({id: "errand6", name: "errand6"}, false);
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/errand6/models/errand6.gltf",
		system: "errand6"
	});
});
