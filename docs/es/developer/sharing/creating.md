# Creating Patches

Un parche Git es un archivo de texto que contiene uno o más commits Git. Usando GitHub puedes exportar muy fácilmente tu trabajo en parches para distribuirlo fuera de las típicas fusiones y pull requests. El uso de parches es el método de facto para compartir ediciones de fuentes en Ascension Game Dev.

La mejor práctica es bifurcarse de la rama maestra o de desarrollo, hacer sus cambios, confirmar, y luego crear el parche basado en su rama.

Abra el símbolo del sistema en su directorio de repositorio local. Esto se puede hacer fácilmente haciendo clic en Repositorio -> Abrir en el símbolo del sistema dentro de GitHub Desktop

![commandprompt](https://www.ascensiongamedev.com/resources/filehost/62ed0b264c03f8d3b61c17195771c044.png)

A continuación, escriba el siguiente comando. Asegúrate de que sigues en la rama en la que hiciste las modificaciones. En el comando reemplaza a master si originalmente te ramificaste de development.

```
git format-patch master --stdout > patchName.patch
```

![createpatch](https://www.ascensiongamedev.com/resources/filehost/ad6434b2e74bb658b8565b6dd227d961.png)

El archivo del parche que has creado se encuentra en el directorio de tu repositorio local.

Puede subir su parche a [Diffy](https://diffy.org) para ver su contenido.
