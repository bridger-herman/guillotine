import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
    }).then(req => {
      return req.data
    })
  },
  getPlayers () {
    return this.execute('get', '/players')
  },
  getPlayer (id) {
    return this.execute('get', `/players/${id}`)
  },
  createPlayer (data) {
    return this.execute('post', '/players', data)
  },
  updatePlayer (id, data) {
    return this.execute('put', `/players/${id}`, data)
  },
  deletePlayer (id) {
    return this.execute('delete', `/players/${id}`)
  },

  getActionCards () {
    return this.execute('get', '/actionCards')
  },
  getActionCard (id) {
    return this.execute('get', `/actionCards/${id}`)
  },
}