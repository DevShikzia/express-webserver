import http from 'http'; //Importo http 


                //req = request = solicitudes y peticiones  
                //res = response = respuestas 
http.createServer( (req,res) => {
   
    //res.writeHead(200, {'Content-type':'application/json' }) // status de respuestas y content type(tipo de dato) EJ: application/JSON | text/plain

  
    
   res.write('Hola Mundo');

    res.end(); // finalizo el proceso para que cargue la web
}).listen( 8080 ); // puerto del localhost donde levanto el proyecto



console.log('Escuchando el puerto 8080');