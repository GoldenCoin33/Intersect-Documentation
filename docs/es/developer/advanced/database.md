# Base de datos

Intersect tiene dos bases de datos, una que almacena los datos del juego, como objetos, mapas, recursos, eventos, etc. y otra que almacena todos los datos relacionados con las cuentas de los jugadores.

Las tablas de ambas bases de datos se generan automáticamente en función de los contextos. El contexto del jugador y el contexto del juego se definen en los siguientes archivos fuente:
 - Intersect.Server/Database/GameData/GameContext.cs
 - Intersect.Server/Database/PlayerData/PlayerContext.cs

Contexts consist DBSets which end up being tables. DBSets are created from C# Classes.

Las clases de contexto también definen las relaciones entre las tablas. Puedes aprender más sobre esto en la documentación de Entity Framework Core si estás interesado.


## Campos de la base de datos

Los campos se crean automáticamente a partir de las propiedades públicas de una clase, al igual que las tablas se crean automáticamente a partir de las clases dentro de los DBSets en un contexto.

Si miras la clase Users en el servidor (Interect.Server/Database/PlayerData/User.cs) verá los campos para el usuario id, name, password, salt, email, and more.

Tenga en cuenta que Entity Framework sólo puede manejar tipos básicos (integers, strings, blobs, y referencias a otras clases que existen como  DBSet). Debido a estas limitaciones, marcamos algunos campos complejos como `[NotMapped]` ay luego tener un campo secundario de cadena que convierta el campo complejo en json. Para ver un ejemplo de ello, consulte User.Power y User.PowerJson. Observe que la propiedad PowerJson tiene una propiedad de nombre de columna para que se almacene en la base de datos en el campo Power.


## Añadir campos

Para añadir un campo a la base de datos cree una nueva propiedad pública en una clase que se almacena dentro de Entity Framework. En este ejemplo voy a añadir un campo para cada usuario que rastrea su última dirección IP utilizada.

Agregué la siguiente propiedad a la clase Usuario:
```
public string LastUsedIp { get; set; }
```

## Creación de una migración

Después de realizar los cambios en las clases de Entity Framework es necesario crear una migración. Para crear la migración hay varios pasos de configuración:

- [Establezca su proyecto de inicio como Intersect Server, y el tipo de construcción como NoFody](https://www.ascensiongamedev.com/resources/filehost/13a8de43d24b7595cacb37c5c99c65f1.png)
- [Ahora construya su servidor. Construir con la configuración NoFody generará un montón de dlls necesarios.](https://www.ascensiongamedev.com/resources/filehost/73271e21395e697efb06cf7d28f0f14d.png)
- [En VS abra la consola del gestor de paquetes Nuget. (Tools -> Nuget Package Manager -> Package Manager Console)](https://www.ascensiongamedev.com/resources/filehost/c51298fbaf5e35a654b43c915ab5375f.png)
- [Dentro de la consola del gestor de paquetes, configure su proyecto por defecto como Intersect.Server](https://www.ascensiongamedev.com/resources/filehost/2eea276e85b6258c5b844f392acdfd15.png)

Ahora está listo para generar los archivos de migración. Introduce el siguiente comando en la consola del gestor de paquetes:
```
Add-Migration -Context [ContextHere] [InsertMigrationNameHere]
```

Replace `[ContextHere]` with either GameContext or PlayerContext depending on which database you modified.

Replace `[InsertMigrationNameHere]` with a short identifier of what the migration is for.

For example I added a LastUsedId property to the Users class. In this case I would use the following command:
```
Add-Migration -Context PlayerContext AddingLastUsedIpToUsers
```

Su migración debería aparecer como un nuevo [source code file](https://www.ascensiongamedev.com/resources/filehost/500983d59ef1b372947c3c2e9ff5aa47.png). Adelante, guárdalo.

Ahora que hemos terminado, cambie la configuración de la solución de NoFody a Debug y ejecute su servidor.

Usted será recibido con el [migration prompt](https://www.ascensiongamedev.com/resources/filehost/a0eca1c08ed9ad5b5324ef4502cded49.png).


## Limitaciones de la migración

Debido a las limitaciones (actuales) de Sqlite los campos no pueden ser renombrados o eliminados. Tenemos algunos campos que mantenemos alrededor que no están en uso debido a estas limitaciones. Se espera que esta funcionalidad esté disponible algún día.


## Las migraciones son unidireccionales

Lamentablemente, las migraciones son unidireccionales debido a las limitaciones mencionadas anteriormente con Sqlite. Si los usuarios quieren desinstalar las modificaciones de origen que alteran la base de datos, tendrán que utilizar herramientas externas para eliminar los campos de la base de datos o volver a una copia de seguridad anterior a la instalación de la modificación.




