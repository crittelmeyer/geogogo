import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'

import type { AfterCallback } from '@auth0/nextjs-auth0'

const afterCallback: AfterCallback = async (req, res, session, state) => session

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  }
})
