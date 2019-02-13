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
  //const isTitleEqual = card => card.title === newCard.title
  newCard.id = uid()
  data.cards.push(newCard)
  res.json(newCard)
  /*const card = data.cards.find(isTitleEqual)
  if (card) {
    card.amount += newCard.amount
  } else {
    data.cards.push({
      ...newCard,
      id
    })
  }

*/
})

app.delete('/cards/:id', (req, res) => {
  const id = (res.params, id)
  const index = data.cards.find(card => card.id === id)
  const deletedCard = data.cards[index]
  data.cards.splice(index, 1)
  //const deletedCard = data.cards.find(card=> card.id ===id)
  // data.cards = data.cards.filter(card => card.id !== id)s
  res.json(deletedCard)
})

app.put('/cards/:id', (req, res) => {

})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready on port 3000')
})