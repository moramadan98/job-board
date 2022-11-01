const exprss = require('express');
const expressLayout = require('express-ejs-layouts');
const path = require('path')
const app = exprss();



app.use(exprss.static(path.join(__dirname , 'assets')));

app.use(expressLayout);
app.set('view engine' , 'ejs');
app.use('/',require('./routes/home-router'));

const port = process.env.PORT || 8000;
app.listen(port , ()=>{console.log(`listening to port ${port}` )});