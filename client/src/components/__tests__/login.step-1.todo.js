import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'
// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  const fakeForm = {
    username: 'til',
    password: 'til',
  }
  // 🐨 create a jest.fn() for your submit handler
  const mockSubmit = jest.fn()
  // 🐨 render the Login component to a div
  // 💰 const div = document.createElement('div')

  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={mockSubmit} />, container)
  // 🐨 get the field nodes
  // 💰 const inputs = div.querySelectorAll('input')
  // const inputs = container.querySelectorAll('input')
  // 💰 const form = div.querySelector('form')
  const form = container.querySelector('form')
  const {username, password} = form.elements
  // 🐨 fill in the field values
  username.value = fakeForm.username
  password.value = fakeForm.password
  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  form.dispatchEvent(new window.Event('submit'))
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(mockSubmit).toBeCalledTimes(1)
  expect(mockSubmit).toBeCalledWith({
    username: fakeForm.username,
    password: fakeForm.password,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
