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
> (2) Si hago cambios en ficheros, los guardo mediante commit: 
> ```bash
> git commit -m 'cambios realizados'
> ```
> (3) Crear rama en local: 
> ```bash
> git branch -m main
> ```
> (4) Para guardar los cambios en github: 
> ```bash
> git push --set-upstream origin main (primera vez)
> ```
> (5) Cada vez que haga cambios: 
> ```bash
> git commit -m 'cambio'
> git status //Para comprobar que no hay commits pendientes
> git push
> ```

> ## Acceder como un contribuidor
> En el directorio de trabajo: 
> ```bash
> git clone https://github.com/alyz17/PuertaGrandeWeb.git
> cd PuertaGrandeWeb
> ```
> Una vez clonado se puede seguir a partir del paso (5)
