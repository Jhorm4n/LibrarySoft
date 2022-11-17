require('dotenv').config()
const express = require('express') //incluir un paquete en node
const hbs =require('hbs')
const app = express()
const port = process.env.PORT

app.use( express.static('public/assets'))

//Motor de  la plantilla
hbs.registerPartials(__dirname + '/views/partials', function (err) {})
hbs.registerPartials(__dirname+ '/views/admin/partials',function(err) {})
hbs.registerPartials(__dirname+ '/views/estudiante/partials',function(err) {})
hbs.registerPartials(__dirname+ '/views/profesor/partials',function(err) {})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


//verificar si el puerto np esta escuchando
app.listen(port, () =>{
   console.log(`Escuchando el puerto ${port}`)
})

//RUTAS DEL ADMINISTRADOR
//Ruta de INDEX (LOGIN)
app.get('/index', (req,res) =>{
    res.render('login', {
        nombre: 'login'
    })
 })


 //Ruta de RECUPERAR CONTRASEÑA
 app.get('/recuperar', (req,res) =>{
    res.render('recuperar', {
        nombre: 'recuperar'
    })
 })


 //Ruta de DASHBOARD
 app.get('/dashboard', (req,res) =>{
    res.render('admin/dashboard', {
        nombre: 'dashboard'
    })
 })


//Ruta de ROLES
 app.get('/roles', (req,res) =>{
    res.render('admin/roles', {
        nombre: 'roles'
    })
 })


 //Ruta de USUARIOS
 app.get('/usuarios', (req,res) =>{
    res.render('admin/usuarios', {
        nombre: 'usuarios'
    })
 })


 //Ruta de BENEFICIARIOS
 app.get('/beneficiarios', (req,res) =>{
    res.render('admin/beneficiarios', {
        nombre: 'beneficiarios'
    })
 })


 //Ruta de LIBROS
 app.get('/libros', (req,res) =>{
    res.render('admin/libros', {
        nombre: 'libros'
    })
 })


 //Ruta de PRÉSTAMOS
 app.get('/prestamos', (req,res) =>{
    res.render('admin/prestamos', {
        nombre: 'prestamos'
    })
 })


 //Ruta de RESERVAS
 app.get('/reservas', (req,res) =>{
    res.render('admin/reservas', {
        nombre: 'reservas'
    })
 })


 //Ruta de SANCIONES
 app.get('/sanciones', (req,res) =>{
    res.render('admin/sanciones', {
        nombre: 'sanciones'
    })
 })

 //RUTAS DE LOS PROFESORES
 app.get('/teacherinicio', (req,res) =>{
    res.render('profesor/teacherInicio', {
        nombre: 'teacherInicio'
    })
 })

 app.get('/teacherprestamos', (req,res) =>{
    res.render('profesor/teacherPrestamos', {
        nombre: 'teacherPrestamos'
    })
 })

 app.get('/teacherreservas', (req,res) =>{
    res.render('profesor/teacherReservas', {
        nombre: 'teacherReservas'
    })
 })

 //RUTAS DE LOS ESTUDIANTES
 app.get('/studentinicio', (req,res) =>{
    res.render('estudiante/studentInicio', {
        nombre: 'studentInicio'
    })
 })

 app.get('/studentprestamos', (req,res) =>{
    res.render('estudiante/studentPrestamos', {
        nombre: 'studentPrestamos'
    })
 })

//Ruta de Error de pagina no encontrada
app.get('*', (req, res) => {
    res.render('404',{
        nombre:'Página no encontrada'
    })
})