import fs from 'fs'
import chalk from 'chalk'
import { join, sep } from 'path'

function getFiles(path){
    let folderItems = fs.readdirSync(path)

	folderItems.forEach(item => {
		let stat = fs.statSync(join(path, item))
		if (!stat.isFile()) {
			let fullPath = join(path, item)
			console.log(chalk.cyan(fullPath))
			let files = fs.readdirSync(fullPath)
			files.forEach(f => {
				console.log(`\t ${chalk.cyan('╰─')}${f}`)
			})
			console.log(`\t ${chalk.bold('Всего файлов: ')}${files.length}`)
			if (files.length > 0) {
				getFiles(fullPath)
			}
		}
	})	
}

export { getFiles }




