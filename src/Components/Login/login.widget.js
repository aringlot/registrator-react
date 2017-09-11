import React from 'react'
import {Form, Text} from 'react-form'

export const loginWidget = ({isAuthenticated, onSubmit}) => (
    <Form onSubmit={values => onSubmit(values)}
          validate={
              ({login, password}) => {
                  return {
                      login: !login ? 'required' : undefined,
                      password: !password ? 'required' : undefined,
                  }
              }
          }
    >
      {
          ({submitForm}) => !isAuthenticated ? (
              <form onSubmit={submitForm}>
                <label>Login: </label>
                <Text field='login' />
                <label>Password: </label>
                <Text type='password' field='password' />
                <button type='submit'>
                  Submit
                </button>
              </form>
          ) : null
      }
    </Form>
);