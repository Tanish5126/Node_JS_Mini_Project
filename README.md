# Express Middleware Visit Counter

A Node.js and Express mini-project that tracks page visits using custom middleware and the `fs` module, persisting data to a JSON file without a database.

## Steps to Run the Project
1. Open a terminal in the project folder.
2. Run `npm install` to install Express.
3. Run `node index.js` to start the server.
4. Open a browser and visit `http://localhost:5000/home`, `/about`, or `/contact`.
5. Visit `http://localhost:5000/visits` to view the visit statistics.

## Testing Screenshots

### 1. Home Route (/home)
![Home Route](screenshots/home.png)

### 2. About Route (/about)
![About Route](screenshots/about.png)

### 3. Contact Route (/contact)
![Contact Route](screenshots/contact.png)

### 4. Visit Statistics (/visits)
![Visits Route](screenshots/visits.png)