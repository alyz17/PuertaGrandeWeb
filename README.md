# Página Web para un restaurante

> [!NOTE]
> La parte tutorial de github me la dejo por si se me olvida 
>
> ## Crear repositorio local y conectarlo al de github
> (1) En VS escribir en el terminal, en el directorio de trabajo: 
> ```bash
> git init
> git remote add origin https://github.com/alyz17/PuertaGrandeWeb.git
> ```
> (2) Crear rama en local: 
> ```bash
> git branch -m main
> ```
> (3) Si hago cambios en ficheros, los guardo mediante commit: 
> ```bash
> git commit -m 'cambios realizados'
> ```
> (4) Para guardar los cambios en github: 
> ```bash
> git push --set-upstream origin main (primera vez)
> ```
> (5) Cada vez que haga cambios: 
> ```bash
> git add .
> git commit -m 'cambio'
> git status //Para comprobar que no hay commits pendientes
> git push
> ```
> Si no hay ningún cambio, al hacer **git status** nos saldrá esto:
> > ![Status sin cambios](/images/TutorialGit/statusBien.png)
> 
> Si, por ejemplo, editamos *index.html* y creamos un fichero *images*, nos saldrá esto: 
> > ![Status con cambios](/images/TutorialGit/statusMal.png)
> 
> Si hacemos **git add .**, podemos comprobar de nuevo con **git status** que podemos hacer **git commit -m 'mensaje'**
> > ![Status tras hacer add](/images/TutorialGit/addStatus.png)
> 
> Ponemos en el commit un mensaje sobre los cambios que hemos hecho y al hacer **git push** se suben los cambios a GitHub
> > ![Commit de los cambios y push a Github](/images/TutorialGit/commitPush.png)
> 
> Si la otra persona ha realizado cambios, para tener la misma versión hay que hacer:
> > ```bash
> > git pull
> > ```
> 
> ## Acceder como un contribuidor
> En el directorio de trabajo: 
> ```bash
> git clone https://github.com/alyz17/PuertaGrandeWeb.git
> cd PuertaGrandeWeb
> ```
> Una vez clonado se puede seguir a partir del paso (5)

## HTML
1. `index.html`: Muestra la página principal del restaurante
2. `info.hmtl`: Muestra la ubicación del restaurante, incluyendo maps para navegar, y el teléfono para contactar
3. `menu.hmtl`: Muestra el menú
4. `reserva.hmtl`: Muestra la opción para reservar (fecha, hora, número de personas)
## CSS
`styles.css`: Para que quede estético y minimalista el diseño final de la página
## JavaScript
`scripts.js`: Lógica para interactuar con la página (movimiento de imágenes, reserva)
## Despliegue
Para manejar el uso de emails al hacer la reserva