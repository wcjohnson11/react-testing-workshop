import React from 'react'
import ReactDOM from 'react-dom'
import * as utilsMock from '../../utils/api'
import Editor from '../editor.todo'

jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

test('calls onSubmit with the username and password when submitted', async () => {
  const container = document.createElement('div')
  // create a fake user, post, history, and api
  const fakeUser = {id: 'foobar'}
  const fakeHistory = {push: jest.fn()}
  // use ReactDOM.render() to render the editor to a div
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  // fill out form elements with your fake post
  const form = container.querySelector('form')
  const {title, content, tags} = form.elements
  title.value = 'Who do you love?'
  content.value = 'seriously though'
  tags.value = 'curious, inquisitive'
  // Act
  // submit form
  const submit = new window.Event('submit')
  form.dispatchEvent(submit)
  // wait for promise to settle

  await flushPromises()
  // Assert
  // ensure the create function was called with the right data
  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilsMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilsMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['curious', 'inquisitive'],
    date: expect.any(String),
  })
})

// TODO later...
test('snapshot', () => {})
