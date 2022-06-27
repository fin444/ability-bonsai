function branchToImgNum(branch) {
	// determine type of branch
	let top = branch[0] != null
	let left = branch[1] != null
	let bottom = branch[2] != null
	let right = branch[3] != null

	// decide number
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
function branchToGlowingImg(branch, chosen) {
	// determine type of branch
	let top = branch[0] != null
	let left = branch[1] != null
	let bottom = branch[2] != null
	let right = branch[3] != null

	// determine what is glowing
	let topActive = false
	let leftActive = false
	let bottomActive = false
	let rightActive = false
	if (top) {
		for (let i = 0; i < branch[0].length; i++) {
			if (chosen.includes(branch[0][i])) {
				topActive = true
				continue
			}
		}
	}
	if (left) {
		for (let i = 0; i < branch[1].length; i++) {
			if (chosen.includes(branch[1][i])) {
				leftActive = true
				continue
			}
		}
	}
	if (bottom) {
		for (let i = 0; i < branch[2].length; i++) {
			if (chosen.includes(branch[2][i])) {
				bottomActive = true
				continue
			}
		}
	}
	if (right) {
		for (let i = 0; i < branch[3].length; i++) {
			if (chosen.includes(branch[3][i])) {
				rightActive = true
				continue
			}
		}
	}
	if (topActive + leftActive + bottomActive + rightActive <= 1) { // hooray for javascript and truthyness
		return null // no glow
	}

	// decide img
	if (top && left && bottom && right) {
		if (topActive && leftActive && bottomActive && rightActive) {
			return "0_active_0"
		} else if (topActive && leftActive && !bottomActive && rightActive) {
			return "0_active_1"
		} else if (topActive && rightActive && bottomActive && !leftActive) {
			return "0_active_2"
		} else if (!topActive && leftActive && bottomActive && rightActive) {
			return "0_active_3"
		} else if (topActive && !rightActive && bottomActive && leftActive) {
			return "0_active_4"
		} else if (topActive && leftActive && !bottomActive && !rightActive) {
			return "0_active_5"
		} else if (topActive && !leftActive && !bottomActive && rightActive) {
			return "0_active_6"
		} else if (!topActive && !leftActive && bottomActive && rightActive) {
			return "0_active_7"
		} else if (!topActive && leftActive && bottomActive && !rightActive) {
			return "0_active_8"
		} else if (topActive && !leftActive && bottomActive && !rightActive) {
			return "0_active_9"
		} else if (!topActive && leftActive && rightActive && !bottomActive) {
			return "0_active_10"
		}
	} else if (top && left && !bottom && right) {
		if (topActive && leftActive && rightActive) {
			return "1_active_0"
		} else if (topActive && leftActive && !rightActive) {
			return "1_active_1"
		} else if (topActive && !leftActive && rightActive) {
			return "1_active_2"
		} else if (!topActive && leftActive && rightActive) {
			return "1_active_3"
		}
	} else if (top && !left && bottom && right) {
		if (topActive && bottomActive && leftActive) {
			return "2_active_0"
		} else if (topActive && !bottomActive && leftActive) {
			return "2_active_1"
		} else if (!topActive && bottomActive && leftActive) {
			return "2_active_2"
		} else if (topActive && bottomActive && !leftActive) {
			return "2_active_3"
		}
	} else if (!top && left && bottom && right) {
		if (leftActive && bottomActive && rightActive) {
			return "3_active_0"
		} else if (leftActive && bottomActive && !rightActive) {
			return "3_active_1"
		} else if (!leftActive && bottomActive && rightActive) {
			return "3_active_2"
		} else if (leftActive && !bottomActive && rightActive) {
			return "3_active_3"
		}
	} else if (top && left && bottom && !right) {
		if (topActive && leftActive && bottomActive) {
			return "4_active_0"
		} else if (topActive && leftActive && !rightActive) {
			return "4_active_1"
		} else if (!topActive && leftActive && bottomActive) {
			return "4_active_2"
		} else if (topActive && !leftActive && bottomActive) {
			return "4_active_3"
		}
	} else if (top && left && !bottom && !right) {
		return "5_active_0"
	} else if (top && !left && !bottom && right) {
		return "6_active_0"
	} else if (!top && !left && bottom && right) {
		return "7_active_0"
	} else if (!top && left && bottom && !right) {
		return "8_active_0"
	} else if (top && !left && bottom && !right) {
		return "9_active_0"
	} else if (!top && left && !bottom && right) {
		return "10_active_0"
	}
	return "error" // won't crash refresh(), just create a missing image for this branch
}