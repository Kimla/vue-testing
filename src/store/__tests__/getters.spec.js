import getters from '../getters'

describe('getters', () => {
  it('only returns notifications that are unread', () => {
    const state = {
      notifications: [
        {
          id: 1,
          body: 'First notification',
          read: true
        },
        {
          id: 2,
          body: 'Second notification',
          read: false
        }
      ]
    }

    expect(getters.notifications(state).length).toEqual(1)
  })
})
