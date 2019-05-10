class Usuario{
    //string usuario;
    //string clave;
    static registroUsuario(){
        let usuarioRegistrado1  = "Marcos";
        return usuarioRegistrado1;
    }
    static registroClave(){
        let claveRegistrada     = "1234";
        return claveRegistrada;
    }
    static RegistroDeMuchosUsuarios(){
        let listado = [];
        listado.push("Pepe");
        listado.push("Gio");
        listado.push("Marcos");
        listado.push("Nati");
        listado.push("Sergio");
        console.log(listado);

        for (let i = 0; i < 5; i++) {
            console.log("Nombres: "+ listado[i] );
            }
    }
    static entrar(){
    	console.log("helouda");
        console.log(document.querySelector("#usuario").value);
        console.log(document.querySelector("#clave").value);
        let miUsuario   = document.querySelector("#usuario").value;
        let miClave   = document.querySelector("#clave").value;
        document.querySelector(".impresion").innerHTML= miUsuario +"  "+ miClave;
        
        console.log(Usuario.registroUsuario());
        console.log(Usuario.registroClave());

        /*--------------------comparacion de clave y Usuario------------------------*/
        if (miClave == Usuario.registroClave() && miUsuario == Usuario.registroUsuario()) {
            console.log("Usuario correctoooooooo");

        }else{
            console.log("Usuario incorrecto");
            }
}
        /*--------------------Registro y guardado de claves y Usuario 3/05/2019 ---------------*/
    static datos(){
    let listataDeUsuario = [];

}
    static registro(){
        console.log("comando ya registrado");
        let UsuarioIntput =document.querySelector("#nuevoUsuario").value;
        console.log("El Usuario "+UsuarioIntput+" ya esta registrado");
        listaUsuario.push(UsuarioIntput);


    }
    static imprimir(){

    }
    static main(){
        /* una manera */
    let boton = document.querySelector("#registroBoton");
    boton.setAttribute("onclick","Usuario.registro()"); 

        /* Segunda manera*/
    document.querySelector("#registroBoton2").setAttribute("onclick","Usuario.registro();");
    }  
        /*----------------------------------fin del dia  03----------------------------------------*/
    
    static init(){
        document.querySelector("#entrarBtn").setAttribute("onclick","Usuario.entrar();");
        Usuario.RegistroDeMuchosUsuarios();
    }

}
Usuario.init();
Usuario.main();
listaUsuario = [];