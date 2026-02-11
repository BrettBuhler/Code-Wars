const rgb = (r, g, b) => {
    return [r,g,b].map(color => {
	const hex_string = Math.max(0, Math.min(255, color)).toString(16)
	if (hex_string.length == 1){
	    return "0" + hex_string
	}
	return hex_string
    }).join("").toUpperCase()
}
