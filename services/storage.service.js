import chalk from 'chalk'
import { homedir, arch, networkInterfaces } from 'os'
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path'

const filePath = join(homedir(), 'sandbox-data.json')

const saveKeyValue = (key, value) => {
	
}

const pathInfo = () => {
	console.log(chalk.bold(chalk.bgBlue(
		' ИНФОРМАЦИЯ О ФАЙЛЕ С ПОМОЩЬЮ БИБЛИОТЕКИ PATH '
	)))
	console.log(filePath)
	console.log(`basename -> ${basename(filePath)}`)
	console.log(`dirname -> ${dirname(filePath)}`)
	/**
	 * Расширение файла
	 */
	console.log(`extname -> ${extname(filePath)}`)
	/**
	 * относительный путь между аргументами
	 * from to
	 */
	console.log(`relative -> ${relative(filePath, dirname(filePath))}`)
	/**
	 * Вывод информации о том, какой путь передан в качестве аргумента
	 * абсолютный true
	 * относительный false
	 */
	console.log(`isAbsolute -> ${isAbsolute(filePath)}`)
	/**
	 * Переход по относительному пути
	 */
	console.log(`resolve -> ${resolve('..')}`)
	/**
	 * Посмотреть какой сепаратор используется в системе
	 */
	console.log(`sep -> ${sep}`)
}

export { saveKeyValue, pathInfo }