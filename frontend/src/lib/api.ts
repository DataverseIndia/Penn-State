import { AppType } from '../../../backend/src/index'
import { hc } from 'hono/client'

export const client = hc<AppType>('http://localhost:3000')
