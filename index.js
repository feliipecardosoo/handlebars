const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 0,
        description: 'Web Cam Logitech c920',
        value: 560
    },
    {
        id: 1,
        description: 'Teclado CK62',
        value: 250
    },
    {
        id: 2,
        description: 'Iphone 11 64GB',
        value: 3500
    },
    {
        id: 3,
        description: 'Notebook Acer i9',
        value: 5600
    },
    {
        id: 4,
        description: 'Apple Watch 4',
        value: 5600
    },
]

products.forEach(product => {
    product.value = product.value.toFixed(2)
})

app.get('/products/:id', (req, res) => {
    const produto = products[req.params.id]
    console.log(produto.description)
    res.render('products', {produto})
})


app.get('/', (req, res) => {
    res.render('home', {products})
})

app.listen(3000, () => {
    console.log('Rodando')
})

