import 'dotenv/config'
import { config } from 'dotenv'

class App {
	init() {
		console.log(process.env)
		console.log(config().parsed)
	}
}

export { App }