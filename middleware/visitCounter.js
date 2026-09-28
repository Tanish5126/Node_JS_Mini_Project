const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "visits.json");

function visitCounter(req, res, next) {

 
    if (req.path === "/visits") {
        return next();
    }

    fs.readFile(filePath, "utf8", (err, fileData) => {

        if (err) {
            console.log("Error reading visits.json");
            return next();
        }

        const visits = JSON.parse(fileData);

       
        visits.totalVisits++;

    
        const route = req.path;

      
        visits.routes[route] = (visits.routes[route] || 0) + 1;

    
        fs.writeFile(filePath,JSON.stringify(visits, null, 2),(err) => {
                if (err) {
                    console.log("Error saving visits.json");
                }
                next();
            }
        );
    });
}

module.exports = visitCounter;