
let fs = require("fs");

export function read(filePath) {

	fs.readFile(filePath, (err, data) => {
		if (err) {
			throw err;
		}
		console.log(data.toString());
	})
}

