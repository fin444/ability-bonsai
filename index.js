var selected = archer
const maxAP = 45 // hard-coded until I get data for the levels

function apUsedCount() {
	let count = 0
	for (let i = 0; i < selected.chosen.length; i++) {
		count += selected.abilities[selected.chosen[i]].cost
	}
	return count
}
function archChosenCount(archetype) {
	let count = 0
	for (let i = 0; i < selected.chosen.length; i++) {
		if (selected.abilities[selected.chosen[i]].archetype == archetype) {
			count++
		}
	}
	return count
}
function meetsReqs(slot) {
	let ability = selected.abilities[slot]

	// hard dependencies chosen
	if (ability.depend != null && !selected.chosen.includes(ability.depend)) {
		return false
	}

	// not blocked by any other ability
	if (ability.blockedBy != null) {
		for (let i = 0; i < ability.blockedBy.length; i++) {
			if (selected.chosen.includes(ability.blockedBy[i])) {
				return false
			}
		}
	}

	// minimum archetype requirements
	if (ability.archReq != 0) {
		let chosen = archChosenCount(ability.archetype)
		if (selected.chosen.includes(slot)) {
			chosen--
		}
		if (chosen < ability.archReq) {
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

	// enough AP
	if (maxAP - apUsedCount() < ability.cost) {
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

function getNameColor(icon) {
	switch (icon) {
		case "white":
			return "#ffffff"
		case "yellow":
			return "#ffaa00"
		case "pink":
			return "#ff55ff"
		case "red":
			return "#ff5555"
		case "archer":
		case "warrior":
		case "mage":
		case "assassin":
		case "shaman":
			return "#55ff55"
		default:
			return "#ffffff" // just in case
	}
}
function hover(slot) {
	let ability = selected.abilities[slot]
	// ability-hover-i is a class instead of id in case of duplication, then it will delete all instead of just last on hover exit
	let html = "<div class = 'ability-hover ability-hover-" + slot + "' style = 'top: " + $("#ability-button-" + slot).offset().top + "px; left: "
		+ ($("#ability-button-" + slot).offset().left + $("#ability-button-" + slot).width()) + "px;'>"
	html += "<span style = 'color: " + getNameColor(ability.img) + "; font-weight: bold;'>" + ability.name + "</span><br/><br/>"
	html += "<span style = 'color: #aaaaaa;'>" + selected.descriptions[slot] + "</span><br/><br/>"
	if (ability.archetype != null) {
		html += "<span style = 'color: " + selected.archetypes[ability.archetype].color + "'>" + ability.archetype + " Archetype</span><br/><br/>"
	}

	// requirements
	let reqYes = "<span style = 'color: #55ff55'>&#10004;</span>"
	let reqNo = "<span style = 'color: #ff5555'>&#10006;</span>"
	// ability points
	let ap = maxAP - apUsedCount()
	if (selected.chosen.includes(slot)) {
		ap += ability.cost
	}
	if (ap >= ability.cost) {
		html += reqYes
	} else {
		html += reqNo
	}
	html += " <span style = 'color: #aaaaaa;'>Ability Points:</span> " + ap + "/" + ability.cost + "<br/>"
	// ability reqs
	if (ability.depend != null) {
		if (selected.chosen.includes(ability.depend)) {
			html += reqYes
		} else {
			html += reqNo
		}
		html += " <span style = 'color: #aaaaaa;'>Required Ability:</span> " + selected.abilities[ability.depend].name + "<br/>"
	}
	// archetype reqs
	if (ability.archReq != 0) {
		let archetypeCount = archChosenCount(ability.archetype)
		if (selected.chosen.includes(slot)) {
			archetypeCount--
		}
		if (archetypeCount >= ability.archReq) {
			html += reqYes
		} else {
			html += reqNo
		}
		html += " <span style = 'color: #aaaaaa;'>Min " + ability.archetype + " Archetype:</span> " + archetypeCount + "/" + ability.archReq + "<br/>"
	}
	// if blocked, show a warning
	if (ability.blockedBy != null) {
		for (let i = 0; i < ability.blockedBy.length; i++) {
			if (selected.chosen.includes(ability.blockedBy[i])) {
				html += reqNo + " <span style = 'color: #aaaaaa;'>Blocked By:</span> " + selected.abilities[ability.blockedBy[i]].name + "<br/>"
			}
		}
	}

	// click to do x
	if (selected.chosen.includes(slot) && slot != 0) {
		html += "<span style = 'color: #ff5555;'>Click to Remove</span>"
	} else if (canBeTaken(slot)) {
		html += "<span style = 'color: #55ff55;'>Click to Select</span>"
	}

	// append to body
	html += "</div>"
	$("body").append(html)
}

function refresh() {
	let table = $("tbody").first()
	let html = ""
	for (let row = 0; row < selected.tree.length; row++) {
		html += "<tr"
		if (selected.pages.includes(row)) {
			html += " class = 'page-break'"
		}
		html += ">"
		for (let cell = 0; cell < 9; cell++) {
			let slot = selected.tree[row][cell]
			if (slot == null) {
				html += "<td></td>"
			} else if (typeof slot == "number") {
				let ability = selected.abilities[slot]

				// main image
				let ending = ""
				if (selected.chosen.includes(slot)) {
					ending = "_active"
				} else if (canBeTaken(slot)) {
					ending = "_pulse"
				}
				html += "<td><div class = 'ability-button' id = 'ability-button-" + slot + "'></div><img src = 'img/button/" + ability.img + ending + ".png' style = 'z-index: 1;' />"
				
				// icons
				if (ability.archetype != null) {
					html += "<div style = 'left: 0;'><img src = 'img/icon/archetype_" + selected.archetypes[ability.archetype].icon + ".png' />"
					if (ability.archReq != 0) {
						html += ability.archReq
					}
					html += "</div>"
				}
				html += "<div style = 'right: 0;'>"
				for (let i = 0; i < ability.cost; i++) {
					html += "<img src = 'img/icon/orb.png' />"
				}
				html += "</div></td>"
			} else {
				html += "<td><img src = 'img/branch/" + branchToImgNum(slot) + ".png' />"
				let glow = branchToGlowingImg(slot, selected.chosen)
				if (glow != null) {
					html += "<img src = 'img/branch/" + glow + ".png' />"
				}
				html += "</td>"
			}
		}
		html += "</tr>"
	}
	table.html(html)
	for (let i = 0; i < selected.abilities.length; i++) {
		$("#ability-button-" + i).click(() => click(i))
		$("#ability-button-" + i).hover(() => hover(i), () => $(".ability-hover-" + i).remove())
	}

	// ap label
	$("#ability-points-counter").html((maxAP - apUsedCount()) + "/" + maxAP)

	// archetype labels
	let archNames = Object.keys(selected.archetypes)
	let arch1Max = 0, arch2Max = 0, arch3Max = 0
	for (let i = 0; i < selected.abilities.length; i++) {
		if (selected.abilities[i].archetype != null) {
			switch (archNames.indexOf(selected.abilities[i].archetype)) {
				case 0:
					arch1Max++
					break
				case 1:
					arch2Max++
					break
				case 2:
					arch3Max++
					break
			}
		}
	}
	$("#archetype-1-label").html(archNames[0])
	$("#archetype-1-label").css("color", selected.archetypes[archNames[0]].color)
	$("#archetype-1-count").html(archChosenCount(archNames[0]) + "/" + arch1Max)
	$("#archetype-1-image").prop("src", "img/icon/archetype_" + selected.archetypes[archNames[0]].icon + ".png")
	$("#archetype-2-label").html(archNames[1])
	$("#archetype-2-label").css("color", selected.archetypes[archNames[1]].color)
	$("#archetype-2-count").html(archChosenCount(archNames[1]) + "/" + arch2Max)
	$("#archetype-2-image").prop("src", "img/icon/archetype_" + selected.archetypes[archNames[1]].icon + ".png")
	$("#archetype-3-label").html(archNames[2])
	$("#archetype-3-label").css("color", selected.archetypes[archNames[2]].color)
	$("#archetype-3-count").html(archChosenCount(archNames[2]) + "/" + arch3Max)
	$("#archetype-3-image").prop("src", "img/icon/archetype_" + selected.archetypes[archNames[2]].icon + ".png")
}

$(() => {
	$("#reset-button").click(() => {
		selected.chosen = [0]
		refresh()
	})

	$("#choose-archer").click(() => {
		if (selected != archer) {
			$(".choose-class:not(.non-selected-class)").addClass("non-selected-class")
			$("#choose-archer").removeClass("non-selected-class")
			selected.chosen = [0]
			selected = archer
			refresh()
		}
	})
	$("#choose-warrior").click(() => {
		if (selected != warrior) {
			$(".choose-class:not(.non-selected-class)").addClass("non-selected-class")
			$("#choose-warrior").removeClass("non-selected-class")
			selected.chosen = [0]
			selected = warrior
			refresh()
		}
	})
	$("#choose-mage").click(() => {
		alert("Mage will be added once it is released in the beta.")
	})
	$("#choose-assassin").click(() => {
		alert("Assassin will be added once it is released in the beta.")
	})
	$("#choose-shaman").click(() => {
		alert("Shaman will be added once it is released in the beta.")
	})

	refresh()
})