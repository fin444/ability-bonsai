function branchToImgNum(branch) {
	// branch == [top, left, bottom, right]
	let top = branch[0] != null
	let left = branch[1] != null
	let bottom = branch[2] != null
	let right = branch[3] != null

	if (top && left && bottom && right) {
		return "0"
	} else if (top && left && !bottom && right) {
		return "1"
	} else if (top && !left && bottom && right) {
		return "2"
	} else if (!top && left && bottom && right) {
		return "3"
	} else if (top && left && bottom && !right) {
		return "4"
	} else if (top && left && !bottom && !right) {
		return "5"
	} else if (top && !left && !bottom && right) {
		return "6"
	} else if (!top && !left && bottom && right) {
		return "7"
	} else if (!top && left && bottom && !right) {
		return "8"
	} else if (top && !left && bottom && !right) {
		return "9"
	} else if (!top && left && !bottom && right) {
		return "10"
	} else {
		throw "error" // won't crash the whole generation function, just create a missing image for this branch
	}
}

function generate(tree, abilities, pages, archetypes) {
	let table = $("tbody").first()
	for (let row = 0; row < tree.length; row++) {
		let html = "<tr"
		if (pages.includes(row)) {
			html += " class = 'page-break'"
		}
		html += ">"
		for (let cell = 0; cell < 9; cell++) {
			let slot = tree[row][cell]
			if (slot == null) {
				html += "<td></td>"
			} else if (typeof slot == "number") {
				html += "<td style = 'cursor: pointer;'><img src = 'img/button/" + abilities[slot].img + ".png' style = 'z-index: 1; cursor: default;' /></td>"
			} else {
				html += "<td><img src = 'img/branch/" + branchToImgNum(slot) + ".png' /></td>"
			}
		}
		table.html(table.html() + html + "</tr>")
	}

	let archNames = Object.keys(archetypes)
	$("#archetype-1-label").html(archNames[0])
	$("#archetype-1-label").css("color", archetypes[archNames[0]].color)
	$("#archetype-1-count").html("0/" + archetypes[archNames[0]].count)
	$("#archetype-2-label").html(archNames[1])
	$("#archetype-2-label").css("color", archetypes[archNames[1]].color)
	$("#archetype-2-count").html("0/" + archetypes[archNames[1]].count)
	$("#archetype-3-label").html(archNames[2])
	$("#archetype-3-label").css("color", archetypes[archNames[2]].color)
	$("#archetype-3-count").html("0/" + archetypes[archNames[2]].count)
}

$(() => {
	generate(warriorTree, warriorAbilities, warriorPages, warriorArchetypes)

	$("#choose-archer").click(() => alert("Archer will be added in the future."))
	$("#choose-warrior").click(() => generate(warriorTree, warriorAbilities, warriorPages, warriorArchetypes))
	$("#choose-mage").click(() => alert("Mage will be added in the future."))
	$("#choose-assassin").click(() => alert("Assassin will be added in the future."))
	$("#choose-shaman").click(() => alert("Shaman will be added in the future."))
})