let lista1 = [
    {id: 1, nombre: 'Marianela'},
    {id: 2, nombre: 'Marina'},
    {id: 3, nombre: 'Ezequiel'},
    {id: 4, nombre: 'Francisco'},
    {id: 5, nombre: 'Lara'},
    {id: 6, nombre: 'Lourdes'},

];

let lista2 = [
    {id: 1, nombre: 'Franco'},
    {id: 2, nombre: 'Marianela'},
    {id: 3, nombre: 'Jeremías'},
    {id: 4, nombre: 'Ezequiel'},
    {id: 5, nombre: 'Marcos'},
    {id: 6, nombre: 'Matias'},
    {id: 7, nombre: 'Julián'},
];

var coincidencias=0;
const coincidencias_encontradas = () =>{

for(var i=0;i<lista1.length;i++)
{
	for(var j=0;j<lista1.length;j++)
	{
		if(lista1[i].nombre==lista2[j].nombre)
			coincidencias++;
	}
}
alert(`Cantidad de coincidencias entre las listas: ${coincidencias}`);

}

var cantidad_faltantes_en_lista_2 = 0;
const faltantes_en_lista_2 = () => {
for(var i=0;i<lista1.length;i++)
{
	for(var j=0;j<lista1.length;j++)
	{
		if(lista1[i].nombre==lista2[j].nombre)
        cantidad_faltantes_en_lista_2 = lista1.length - coincidencias;
	}
}
alert(`Cantidad de elementos presentes en lista uno y faltantes en lista dos: ${cantidad_faltantes_en_lista_2}`);
}

var cantidad_faltantes_en_lista_1 = 0;
const faltantes_en_lista_1 = () => {
for(var i=0;i<lista1.length;i++)
{
	for(var j=0;j<lista1.length;j++)
	{
		if(lista1[i].nombre==lista2[j].nombre)
        cantidad_faltantes_en_lista_1 = lista2.length - coincidencias;
	}
}
alert(`Cantidad de elementos presentes en lista dos y faltantes en lista uno: ${cantidad_faltantes_en_lista_1}`);
}

const elementos_en_conflicto = () => {
    alert(`Elementos en conflicto : ${cantidad_faltantes_en_lista_1 + cantidad_faltantes_en_lista_2}`);
}

const devolver_cuatro_listados = () => {
    coincidencias_encontradas();
    faltantes_en_lista_1();
    faltantes_en_lista_2();
    elementos_en_conflicto();
}

devolver_cuatro_listados();


function agregarListaEnPantalla () {

    const sel_ul = document.getElementById("espacio_lista");
    for(let i in lista1){   
        const create_li = document.createElement("li");
            sel_ul.appendChild(create_li);
        const textnode = document.createTextNode((JSON.stringify(lista1[i].nombre)));
            create_li.appendChild(textnode)
    }

    
}

function agregarLista2EnPantalla () {

    const sel_ul = document.getElementById("espacio_lista2");
    for(let i in lista2){   
        const create_li = document.createElement("li");
            sel_ul.appendChild(create_li);
        const textnode = document.createTextNode((JSON.stringify(lista2[i].nombre)));
            create_li.appendChild(textnode)
    }
    
}
