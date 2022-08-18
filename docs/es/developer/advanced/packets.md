# Creación de nuevos paquetes

Los datos enviados entre el cliente, el editor y el servidor se envían como paquetes. Los paquetes se definen en Intersect.Core/Networking/Packets.

Los paquetes se almacenan en el Client/Editor/Server, carpetas basadas en el remitente. Por ejemplo, el paquete de inicio de sesión enviado desde el cliente estará en la carpeta del cliente.

Crear nuevos paquetes es tan simple como crear nuevas clases en esas carpetas que hereden de CerasPacket y luego escribir algo de código de envío y manejo.


## Envío de paquetes

El cliente, el editor y el servidor tienen cada uno una clase PacketSender en la carpeta Networking. 

En resumen, necesitas crear una instancia de tu clase Packet, y luego pasarla a la función SendPacket correspondiente.


## Manejo de paquetes

El cliente, el editor y el servidor también tienen una clase PacketHandler en la carpeta Networking.

Tendrá que crear una función HandlePacket que acepte la nueva clase de paquete que ha creado.



Una vez que hayas creado una nueva clase de paquete, escrito el código para enviar el paquete, y escrito el manejador, ¡has terminado! ¿Fácil, verdad?

