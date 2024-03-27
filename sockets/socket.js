const {io} = require('../index');
const { comprobarJWT } = require('../helpers/jwt');

// Mensajes de sockets
io.on('connection', client => {
   
   console.log('Cliente conectado');

   const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

   // Verificar autenticación
   if (!valido) { return client.disconnect(); }
   
 
   client.on('disconnect', () => {
      console.log('Cliente desconectado');
   });
 
   //  client.on('mensaje', (payload)=> {
   //     console.log('Mensaje recibido!!!', payload);
   //  })
 
   //  io.emit('mensaje', {admin: 'Nuevo mensaje'});
    
 });

