![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# ¿Qué se usó para hacer el proyecto?

Para el Backend, se usó Express junto con MongoDB y Node.
    Se usaron 3 modelos para la DB remota:
        
        User
        Book
        Video

El Backend tiene Signup, Login y autentificación. 

Para el Frontend, se usó React con algunas librerias, entre ellas Uikit y Formik.
Con Formik, se hace una autentificación doble del formulario al momento de hacer Signup.  
Si validamos toda la información desde el Front, evitaremos tener problemas con el Back.

# Mi Libro de Inversiones

Llevava ya trabajando durante un año en un libro que enseñara de finanzas e inversiones.
Justo logré terminarlo una semana antes y pude usarlo para mi proyecto Final.

Esta página web planeo que actúe a modo de Embudo de ventas y su función inicial 
no será sólamente vender el libro. Será informar al usuario, enseñarle a invertir, 
enseñarle del mundo de las finanzas y proveerle información suficiente para poder 
tomar las decisiones adecuadas (mi libro podrá ayudar mucho a ello)

La idea es que conforme vaya creando material e información propia para los usuarios, la app se vaya desarrollando y vaya convirtiéndose en un
buen punto de información para cualquier persona interesada en las finanzas. De momento, estoy en trámites de derecho de autor y el libro 
saldrá a la venta en Amazon iniciando Agosto. 

Al momento de meterse a la página, aparecen solo unas pocas pestañas en el menú de navegación. Cada pestaña tiene su función:

    La pestaña de grupos permitirá al usuario seguirme por cualquier red social existente y acercará a cualquier 
    cliente potencial a mi. 

    La pestaña de cursos tiene el temario del curso que daré de finanzas e inversiones.
    Ya estoy en proceso de crear un Curso Virtual de Buró de Crédito y este también se subirá a la plataforma apenas esté terminado.

    La pestaña de enlaces de Afiliados contiene enlaces que les darán beneficios Económicos a los usuarios. Mismos que se pueden traducir 
    en miles de pesos de acuerdo a la plataforma y monto en las cuales escojan invertir. 

Pero al loggearse, se agregaran 3 pestañas más:
    
    La primera es una pestaña con un Regalo al usuario por haberse inscrito (un PDF)
    La segunda es una pestaña en la cual recomendaré los libros que me han sido más útiles y que complementarán lo aprendido con el mío
    La tercera es una pestaña con videos propios que pienso hacer, por no tener aun material en el canal de YouTube, metí dos videos a modo de Mockup


# Materiales que pudieron servir de utilidad y la razón por la cuál NO los usé:

Nodemailer -> Pensé que sería buena idea mandar un correo al usuario cuando se inscribiera. Después me dí cuenta que para cualquier labor de mailing,
podía usar herramientas más poderosas como MailChimp. De momento no tengo planes de crear correos hasta tener una fuente grande de clientes
y empezar a automatizar el proceso del embudo de ventas (Primero deberá ser manual para entender cómo piensa y decide la persona)

Se me sugirió también crear una pestaña para el usuario loggeado donde pudiera subir imágen de perfil y modificar su información. 
Esta sería una buena idea si el usuario interactuara de algún modo y pudiera comentar o postear material propio, pero como toda la información 
la voy a subir y modificar yo, no lo vi como algo necesario.

Mi idea fue hacer el proceso lo más rápido y sencillo posible para el usuario. Mientras menos tenga que configurar y pueda evitar datos con los cuales 
pueda distraerse, mejor sería para mí. La única información real que necesito del usuario es su correo y a cambio de esa información, les estaré obsequiando un PDF gratuito y acceso a más información exclusiva. 
