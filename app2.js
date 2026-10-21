const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write(`
              <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                  <th>Sapporo, Japan</th>
                  <th>Toulouse, France</th>
                  <th>Curitiba, Brazil</th>
                  <th>Hobart, Australia</th>
                </tr>
                <tr>
                  <td>
                    <h3>Where I want to go</h3>
                    <p>Curitiba, Brazil</p>
                  </td>
                  <td>
                    <h3>How I got the city</h3>
                    <p>Picked this city from a random generator</p>
                  </td>
                  <td>
                    <h3>Distance from favorite city</h3>
                    <p>5,350 miles</p>
                  </td>
                  <td>
                    <h3>Travel cost</h3>
                    <p>Travel cost around $1,500</p>
                  </td>
                </tr>
              </table>
            `);
      res.write('Content \n')
      res.write('More content \n')
      res.write('Hello World')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})