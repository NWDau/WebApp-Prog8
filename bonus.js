const http = require('http');

const hostname = process.env.hostname || '127.0.0.1';
const port = process.env.port || 3002;

const ingredients = [
    { name: 'fruit', amount: 6, unit: 'cups'},
    { name: 'Sugar', amount: 1, unit: 'cup'},
    { name: 'Flour', amount: 1, unit: 'cup'},
    { name: 'Butter', amount: 0.5, unit: 'cup'},
    { name: 'Milk', amount: 0.75, unit: 'cup'},
    { name: 'Baking powder', amount: 2, unit: 'teaspoons'}
];

const used = [
    false, 
    false,
    false,
    false,
    false,
    false
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        if (used.every(value => value === true)){
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Dau lists an ingredient</title>
                </head>
                <body>
                    <h1>Dulce de leche Ingredient Collection</h1>
                    <p>nothing left</p>
                </body>
                </html>
                `);
                return;
        }

        const randomIndex = Math.floor(
            Math.random() * ingredients.length
        );

        let selectedIndex = -1;

        for(let i = 0; i < ingredients.length; i++){
            const index = (randomIndex + i) % ingredients.length;

            if (used[index] === false){
                selectedIndex = index;
                break;
            }
        }


        used[selectedIndex] = true;

        const ingredient = ingredients[selectedIndex];

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Dau lists an ingredient</title>
            </head>
            <body>
                <h1> dulce de leche Ingredient Collection</h1>
                <p>Index: ${selectedIndex}</p>
                <p>Ingredient: ${ingredient.name}</p>
                <p>Amount: ${ingredient.amount} ${ingredient.unit}</p>
            </body>
            </html>
            `);

    } else {
        res.statusCode = 405;
        res.end('Method not allowed');
    }
});

server.listen(port, hostname, () => {
    console.log(`Bonus server running at http://${hostname}:${port}/`);
});