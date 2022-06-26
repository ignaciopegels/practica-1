const path = require ("path");

const products = [
    {
    id:1,
    name: "Capuccino",
    description: "café con chocolate",
    descriptionLong: "Un capuchino contiene expreso, vapor y espuma de leche a partes iguales. La taza de un capuchino es más pequeña que la taza del café latte, generalmente de 150 a 180 ml. El tamaño de la taza es muy importante para conseguir el equilibrio perfecto entre el sabor del expreso y la cantidad exacta de leche.",
    precio : 65.00,
    img: "/images/Carpaccio-de-salmon.jpg"
},
{
    id:2,
    name: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    descriptionLong: "Es una deliciosa receta donde se combinan el arroz con el queso junto con la berenjena del Mediterráneo y la butifarra (embutido propio del área)",
    precio : 47.00,
    img : "/images/Risotto-berenjena-queso-cabra.jpg"
},
{
    id:3,
    name: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar",
    descriptionLong: "Para preparar mueslis, gachas, púdines, arroz con leche, pan de plátano, cacao caliente. Encontrará la composición completa de la bebida de arroz y los porcentajes de la IGR. Recetas. Sin lazos comerciales",
    precio : 27.50,
    img : "/images/Mousse-de-arroz-con-leche.jpg"
},
{
    id:4,
    name: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    descriptionLong : "son un tipo de pasta con forma alargada. Los fideos pueden ser cortos, como el şehriye o el cabello de ángel, o bien largos y gruesos como los pici o los soba, igualmente largos pero más finos como los spaghetti, o extremadamente finos como los fideos de cristal.",
    precio : 37.50,
    img : "/images/esparragos.png"
}
]   

module.exports = {
    home: (req,res) => { res.render("index", {products: products})},
    detalle: (req,res) => {
        let id = req.params.id
        res.render("detalleMenu", {products: products, id:id})}
}
search: (req,res) =>