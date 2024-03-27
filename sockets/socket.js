const {io} = require('../index');
const { comprobarJWT } = require('../helpers/jwt');
const { usuarioConectado, usuarioDesconectado } = require('../controllers/socket');

// Mensajes de sockets
io.on('connection', client => {
   
   console.log('Cliente conectado');

   const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

   // Verificar autenticación
   if (!valido) { return client.disconnect(); }

   // Cliente autenticado
   usuarioConectado(uid);
   
 
   client.on('disconnect', () => {
      usuarioDesconectado(uid);
   });

 
   //  client.on('mensaje', (payload)=> {
   //     console.log('Mensaje recibido!!!', payload);
   //  })
 
   //  io.emit('mensaje', {admin: 'Nuevo mensaje'});
    
 });

