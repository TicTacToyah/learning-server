const express = require('express')
const uid = require('uid')
const app = express()

app.use(express.json()) //

const data = {
  cards: [{
      title: 'htlm',
      content: 'lorem',
      tags: ['new topic'],
      id: uid()
    },
    {
      title: 'css',
      content: 'lorem',
      tags: ['new topic'],
      id: uid()
    },
    {
      title: 'js',
      content: 'lorem',
      tags: ['new topic'],
      id: uid()
    }
  ]
}

app.get('/cards', (req, res) => {
  res.json(data)
})

app.post('/cards', (req, res) => {
  const newCard = req.body
  newCard.id = uid()
  data.cards.push(newCard)
  res.json(newCard)

})

app.delete('/cards/:id', (req, res) => {
  const id = (res.params, id)
  //const index = data.cards.find(card => card.id === id)
  //const deletedCard = data.cards[index]
  //data.cards.splice(index, 1)
  const deletedCard = data.cards.find(card => card.id === id)
  data.cards = data.cards.filter(card => card.id !== id)
  res.json(deletedCard)
})

app.put('/cards/:id', (req, res) => {
  const id = req.params.id
  const index = data.cards.findIndex(card => card.id === id)
  const card = {
    ...req.body,
    id: uid()
  }
  data.cards[index] = card
  res.json(card)

})

app.patch('/cards/:id', (req, res) => {
  const id = req.params.id
  const index = data.cards.findIndex(card => card.id === id)
  const card = {
    ...data.cards[index],
    ...req.body
  }
  data.cards[index] = card
  res.json(card)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server ready on port ' + port)
})