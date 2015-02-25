// FUncion que valida que solo se ingresen numeros
function soloNumeros(n){
	key = n.keycode || n.which;
	teclado = String.fromCharCode(key);
	numeros = "0123456789";
	especiales = "8-37-39-46";
	tecla_especial = false;
	for (var i in especiales) {
		if( key == especiales[i]){
			tecla_especial = true;
		}
	}
	if( numeros.indexOf(teclado) == -1 && !tecla_especial){
		return false;
	}
}

// Función para escribir en la caja de texto
function escribir(num){
	var anterior = document.getElementById("resultado").value;
	document.getElementById("resultado").value = anterior + num;

}

// Función para eliminar el ultimo número
function eliminarAnterior(){
	var anterior = document.getElementById("resultado").value;
	var nuevoNum = anterior.substring(0,anterior.length-1);
	document.getElementById("resultado").value = nuevoNum;
}

// Función que elimina todos los digitos ingresados
function eliminarTodo(){
	document.getElementById("resultado").value = "";
}

// Validar signos
function validarSignos(num){
	var anterior = document.getElementById("resultado").value;
	if( anterior == "" ){
		document.getElementById("resultado").value = "";
	}
	else{
		var anterior = document.getElementById("resultado").value;
		document.getElementById("resultado").value = anterior + num;
		nuevoRes = document.getElementById("resultado").value;

		record = 0;
		igual = 1;
		var letraRecord
		var b = 0
		var letra = ""
		for ( i = 1; i < nuevoRes.length; i++)
		{
			if( nuevoRes.charAt(i) == "+" || nuevoRes.charAt(i) == "-" || nuevoRes.charAt(i) == "*" || nuevoRes.charAt(i) == "/"){
				igual = igual + 1;
				letra = nuevoRes.charAt(i);
			}
			else{
				if(igual > record){record = igual; letraRecord = letra}
				igual = 1;
			}
			b = i;
		}
		if( igual > record ){
			record = igual;
			letraRecord = letra;
		}
		if( record > 2 ){
			var anterior = nuevoRes;
			var nuevoValor = anterior.substring(0, anterior.length-1);
			document.getElementById("resultado").value = nuevoValor;
			record = 0; b=0; igual=1; letra=""; letraRecord="";
		}

	}
}

// Realizar las operaciones
function calcular(){
	var resultado = eval(document.getElementById("resultado").value);
	document.getElementById("resultado").value = resultado;
}

function raiz() {
    var numeros = document.getElementById("resultado").value;
    numeros = Math.sqrt(numeros) //resolver raíz cuadrada.
    document.getElementById("resultado").value = numeros;
}

function exponente(){
	var exponente = 2;
	var numeros = document.getElementById("resultado").value;
	numeros = Math.pow(numeros,2); 
	document.getElementById("resultado").value = numeros;
}