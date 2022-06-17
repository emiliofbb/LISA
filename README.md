# Proyecto fin de ciclo

<img alt="Logo de SALI" src="doc/img/logo.jpg" height="250" width="250"/>

## Descripción

Neste apartado explicarase a idea e as tecnoloxías utilizadas no proxecto para dar unha descripción aproximada de como está desarrollado o traballo.

#### Idea

A idea é crear unha rede social onde a xente poida atopar a outras persoas coas que se encontraron en algún momento pero que, por circustancias da vida, non poideron conseguir o seu contacto. Esto faríase mediante o uso de publicacións. Estas dispoñen dunha pequena descripción da persoa que busca e da situación onde se coñeceron. As publicacíons monstraranse nunha pantalla onde estarán organizadas pola fecha na que se crearon. As publicacións póndense reaccionar enviando un mensaxe privado. As públicacións tamén se poden buscar escribindo as palabras claves que queiras atopar. Os post son visibles para todos os usuario e os usuarios son anónimos.

#### Tecnoloxías
Neste apartado enumerarei as tecnoloxías utilizadas. Se buscas unha descripción técnica podes ir ó apartado XXXXXXX.
- Graphql
- Express con apollo server
- React native
- Postgresql
- Docker

## Instalación / Puesta en marcha

Neste apartado darase as instruccións para a utilización da app.

Descargar o repositorio e ter instalado [node](https://nodejs.org/es/download/) e requisito indispensable para poder correr o proxecto.

####A instalación necesaria na parte da app é a seguinte:

1. Seguir a seguinte [guía](https://reactnative.dev/docs/environment-setup) para poder instalar aplicacións android a partir dun proxecto de react native
2. Mirar a ip do ordenador onde o probes e modificar a uri no constructor do ApolloClient do arquivo src/app/LISA/App.js (Liña 25)
3. Usar dúas consolas e moverse a src/app/LISA
4. Executar npm install para descargar os paquetes necesarios
5. Executar nunha das consolas npx react-native start
6. Executar na segunda das consolas npx react-native run-android

####No caso do servidor será necesario facer os seguintes pasos.

1. Usar unha consola e moverse a carpeta src/backend
2. Executar npm install para descargar os paquetes necesarios
3. Executar node ./app.js

Por último, se non se conecta a Base de Datos, podes crear unha base de datos Postgres en calquera servicio cloud e cambiar os valores do arquivo .env da parte do backend polos teus. Os scripts de creación da BBDD atópanse na seguinte carpeta src/backend/DBScripts/creationScripts.sql.

## Uso

A utilización da applicación é sinxela. A primeira cousa que aparecerá frente o usuario será unha pantalla de login. A partir desta poderemos acceder a interfaz principal ou tamén poderemos crear unha nova conta. Se accedes a aplicación verás unha vista cunha barra superior para acceder a pantalla de creación de novas publicacións e a pantalla de mensaxes. No centro atópanse os posts e na parte baixa vemos unha barra de navegación para movernos entre tres pantallas. A primeira é a pantalla actual indicada cun símbolo dunha casa. A segunda é a pantalla de búsqueda cun símbolo dunha lupa. E por último temos a pantalla do perfil de usuario que mostra as túas publicacións. A pantalla de búsqueda dispón dun campo de texto para introducir a palabra pola que queres filtrar e na parte central móstranse as publicacións que coinciden co introducido na parte superior.

## Sobre el autor

O autor deste proxecto é Emilio Fajín Bargo un estudande de DAM de 21 anos. Os meus puntos fortes son as ganas de investigar e coñecer novas tecnoloxías que sirvan para crear a mellor forma de funcionamento do software. A tecnoloxía que máis domino é Java. Esto ven pola cantidade de horas adicadas a esta mesma durante os meus estudos. Debido as miñas ganas de coñecer e utilizar novas tecnoloxías decidinme lanzar a probar cousas novas como pode ser GraphQL con Express para as consultas ó servidor ou React Native para o desarrollo das aplicacións nos dispositivos móviles. 

Contacto:   
- Correo: emiliofbb@gmail.com

## Licencia

A [licencia](LICENSE.txt) da aplicación é unha GNU Free Documentation License Version 1.3


## Índice

> *TODO*: Simplemente indexa ordenadamente todo tu proyecto.

1. Anteproyecto
    * 1.1. [Idea](doc/templates/1_idea.md)
    * 1.2. [Necesidades](doc/templates/2_necesidades.md)
2. [Análisis](doc/templates/3_analise.md)
3. [Planificación](doc/templates/4_planificacion.md)
4. [Diseño](doc/templates/5_deseño.md)
5. [Implantación](doc/templates/6_implantacion.md)


## Guía de contribución

Non se permite a contribución con este proxecto debido a que se busca continuar o desarrollo de maneira privada por parte dos desarrolladores iniciales. En caso de querer continualo podedes realizar un fork do proxecto.

## Links

Guía de instalación do cliente de react native: https://reactnative.dev/docs/environment-setup
Instalador de node: https://nodejs.org/es/download/
Enlace ó correo do creador do logo: simon180999@gmail.com
