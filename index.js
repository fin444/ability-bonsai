var selected = warrior

function branchToImgNum(branch) {
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
		return "error" // won't crash refresh(), just create a missing image for this branch
	}
}

function meetsReqs(slot) {
	let ability = selected.abilities[slot]

	// hard dependencies chosen
	if (ability.depend != null && !selected.chosen.includes(ability.depend)) {
		return false
	}

	// not excluded by any other ability
	if (ability.exclude != null && selected.chosen.includes(ability.exclude)) {
		return false
	}

	// minimum archetype requirements
	if (ability.archReq != 0) {
		let count = 0
		for (let i = 0; i < selected.chosen.length; i++) {
			if (selected.abilities[selected.chosen[i]].archetype == ability.archetype && selected.chosen[i] != slot) {
				count++
			}
		}
		if (count < ability.archReq) {
			return false
		}
	}

	return true // satisfies all requirements
}
function canBeTaken(slot) {
	let ability = selected.abilities[slot]

	// meetsReqs and canBeTaken are different so that the tree can be trimmed when an ability is removed
	if (!meetsReqs(slot)) {
		return false
	}

	// is linked to another chosen ability
	let linked = false
	for (let i = 0; i < ability.linked.length; i++) {
		if (selected.chosen.includes(ability.linked[i])) {
			linked = true
		}
	}
	if (!linked) {
		return false
	}

	return true // TODO: consider AP
}

function travelTree(slot, path) {
	path.push(slot)
	let linked = selected.abilities[slot].linked
	for (let i = 0; i < linked.length; i++) {
		if (!path.includes(linked[i]) && selected.chosen.includes(linked[i])) {
			travelTree(linked[i], path)
		}
	}
}
function trimTree() {
	console.log("test")
	let shouldRepeat = false

	// stage 1: remove dangling connections
	let path = []
	travelTree(0, path) // path is filled with every item connected to the starter ability
	let toRemove = []
	for (let i = 0; i < selected.chosen.length; i++) {
		if (!path.includes(selected.chosen[i])) {
			toRemove.push(selected.chosen[i])
		}
	}
	if (toRemove.length != 0) {
		shouldRepeat = true
		for (let i = 0; i < toRemove.length; i++) {
			selected.chosen.splice(selected.chosen.indexOf(toRemove[i]), 1)
		}
	}

	// stage 2: remove those that don't meet other reqs
	toRemove = []
	for (let i = 0; i < selected.chosen.length; i++) {
		if (!meetsReqs(selected.chosen[i])) {
			toRemove.push(selected.chosen[i])
		}
	}
	if (toRemove.length != 0) {
		shouldRepeat = true
		for (let i = 0; i < toRemove.length; i++) {
			selected.chosen.splice(selected.chosen.indexOf(toRemove[i]), 1)
		}
	}

	// repeat this function only if something was removed, since that may have changed one of the stages
	if (shouldRepeat) {
		trimTree()
	}
}
function click(slot) {
	let ability = selected.abilities[slot]
	if (selected.chosen.includes(slot) && slot != 0) {
		selected.chosen.splice(selected.chosen.indexOf(slot), 1)
		trimTree()
		refresh()
	} else if (canBeTaken(slot)) {
		selected.chosen.push(slot)
		refresh()
	}
}

function refresh() {
	let table = $("tbody").first()
	table.html("")
	for (let row = 0; row < selected.tree.length; row++) {
		let html = "<tr"
		if (selected.pages.includes(row)) {
			html += " class = 'page-break'"
		}
		html += ">"
		for (let cell = 0; cell < 9; cell++) {
			let slot = selected.tree[row][cell]
			if (slot == null) {
				html += "<td></td>"
			} else if (typeof slot == "number") {
				let ending = ""
				if (selected.chosen.includes(slot)) {
					ending = "_active"
				} else if (canBeTaken(slot)) {
					ending = "_pulse"
				}
				html += "<td><div class = 'ability-button' id = 'ability-button-" + slot + "'></div><img src = 'img/button/" + selected.abilities[slot].img + ending + ".png' style = 'z-index: 1;' /></td>"
			} else {
				html += "<td><img src = 'img/branch/" + branchToImgNum(slot) + ".png' /></td>"
			}
		}
		table.html(table.html() + html + "</tr>")
		for (let i = 0; i < selected.abilities.length; i++) {
			$("#ability-button-" + i).click(() => click(i))
		}
	}

	let archNames = Object.keys(selected.archetypes)
	$("#archetype-1-label").html(archNames[0])
	$("#archetype-1-label").css("color", selected.archetypes[archNames[0]].color)
	$("#archetype-1-count").html("0/" + selected.archetypes[archNames[0]].count)
	$("#archetype-2-label").html(archNames[1])
	$("#archetype-2-label").css("color", selected.archetypes[archNames[1]].color)
	$("#archetype-2-count").html("0/" + selected.archetypes[archNames[1]].count)
	$("#archetype-3-label").html(archNames[2])
	$("#archetype-3-label").css("color", selected.archetypes[archNames[2]].color)
	$("#archetype-3-count").html("0/" + selected.archetypes[archNames[2]].count)
}

$(() => {
	refresh()

	$("#choose-archer").click(() => {
		alert("Archer will be added in the future.")
	})
	$("#choose-warrior").click(() => {
		$(".choose-class:not(.non-selected-class)").addClass("non-selected-class")
		$("#choose-warrior").removeClass("non-selected-class")
		selected = warrior
		refresh()
	})
	$("#choose-mage").click(() => {
		alert("Mage will be added in the future.")
	})
	$("#choose-assassin").click(() => {
		alert("Assassin will be added in the future.")
	})
	$("#choose-shaman").click(() => {
		alert("Shaman will be added in the future.")
	})
})