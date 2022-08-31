/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra')
const path = require('path')
const { fileURLToPath } = require('url')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default async function getActionConfig(actionsArr: string[]) {
	const ret = []
	for (const name of actionsArr) {
		try {
			const { default: conf } = await import(`@/actions/${name}/action.config.js`)
			ret.push(conf)
		} catch (e) {
			console.error(e)
		}
	}

	return ret
}
