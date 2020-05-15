'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const destinationEvents = require('./destinations/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('#sign-in-modal').modal('show')
  $('#sign-up-modal').on('hidden.bs.modal', () => {
      $('#sign-up-message').text('')
  })
  $('#sign-in-modal').on('hidden.bs.modal', () => {
      $('#sign-in-message').text('')
  })
  $('#change-pw-modal').on('hidden.bs.modal', () => {
      $('#change-pw-message').text('')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePassword)
  $('#logout').on('click', authEvents.onSignOut)

  //destination events
  $('.bucket-list').on('click', destinationEvents.onGetList)
  $('#new-destination-form').on('submit', destinationEvents.onAddDestination)
  $('#new-destination-modal').on('hidden.bs.modal', () => {
      $('#new-destination-message').text('')
  })
  $('#change-ranking-form').on('submit', destinationEvents.onChangeRating)
  $('#delete-destination-form').on('submit', destinationEvents.onDeleteDestination)


})
