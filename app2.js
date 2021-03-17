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
      res.write('<table')
      res.write(' <tr> <th> Location </th> <th> Estimated Amount </th><th> Number of Hours Visitor should spent </th>  </tr>')
      res.write('<tr> <td> Chikmagalur <td><td> 6 </td>  <td> 10000rps </td>   </tr>')    
      res.write(' <tr><td> Coorg <td><td> 8 </td>  <td> 12000rps </td>   </tr>')
      res.write(' <tr><td> Niagara falls <td> <td> 4 </td>   <td> 10000r$ </td>   </tr>')
      res.write(' <tr><td> Nandi hills <td> <td> 3 </td>   <td> 5000rps </td>   </tr>')
      res.write('</table')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})