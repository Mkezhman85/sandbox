import chalk from 'chalk'
import dedent from 'dedent-js'

const printHelp = () => {
	console.log(
		dedent(`${chalk.bgCyan(` HELP `)}
		Без параметров - вывод погоды
		-l [Путь к папке] для выбора папки для вывода информации по ней
		-h для вывода помощи
		`)
	)
}

export { printHelp }