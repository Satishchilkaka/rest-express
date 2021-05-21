
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoute = require('./routes/admin')
const shopRoute =  require('./routes/shop')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminRoute.routes)
// When both method are having a common path we can apply a filters 
// EX. adminRoute are having different methods but we can apply filter 
app.use(shopRoute)
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found!!!'})
   // res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
   // work with any one pug or handlebar
})

app.listen(3000) 

// ******* PUG*******
// app.set('view engine', 'pug')
// app.set('views', 'views')
// 1 first view is coming from pug , 2nd view is from views folder {can be used any other name}

/***********  HBS *********/
// const expressHbs = require('express-handlebars')

// 

// app.engine('hbs',
// expressHbs({layoutsDir: 'views/layouts/',
//       defaultLayout: 'main-layout',
//       extname: 'hbs'
//     })
//   );