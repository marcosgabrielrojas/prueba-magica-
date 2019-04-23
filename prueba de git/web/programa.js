class Usuario{
    //string usuario;
    //string clave;

    static entrar(){
    	console.log("helouda");
    	let miusuario 	= document.querySelector("#usuario").value;	/*querySelector QUIERE DECIR QUE HACE UNA CONSULTA (.USUARIO) es el ID que se lo llama del */
    	let miclave 	= document.querySelector("#clave").value;   	/*se puede usar var o let que son familiares pero usar let */
    	/*USUARIO VALIDO TRUCHO*/
    	let usuarioValido 	="efygenia";
    	let claveValida	  	="1234";

    	/*validacion de*/
    	if (usuarioValido==miusuario && claveValida == miclave){ 
    		alert("usuario correcto");
    		}else{ 
    			alert("usuario incorrecto");
    		 }
 }
}
