

const getArgs = (args) => {
	const res = {}

	// откидываем первых 2 аргумента из process.argv
	const [ executer, file, ...rest ] = args
	rest.forEach((value, index, array) => {
		// Если первый символ 1-ого аргумента '-'
		if (value.charAt(0) == '-' && value.length <= 2) {
			/**
			 * Если это последний аргумент
			 */
			if (index == array.length - 1) {
				/**
				 * Присваиваем ему значение true
				 * Пример:
				 * ╰─$ node sandbox.js -s          
				 * { s: true }
				 */
				res[value.substring(1)] = true
			}
			/**
			 * Если это не последний элемент
			 * и 
			 * если первый символ аргумента не '-' 
			 */
			 else if(array[index + 1].charAt(0) != '-') {
				/** 
				 * по лючу второго символа последнего переданного аргумента присваиваем значение
				 * переданного второго аргумента
				 * Пример:
				 * ╰─$ node sandbox.js -s -h moscow
				 * { s: true, h: 'moscow' }
				 **/ 
				res[value.substring(1)] = array[index + 1]
			} else {
				/**
				 * Если передан еще один аргумент начинающийся с тире
				 * Ему также присваиваем значение true
				 * Пример:
				 * ╰─$ node sandbox.js -s -h
				 * { s: true, h: true }
				 */
				res[value.substring(1)] = true
			}
		}
	})
	return res
}



export { getArgs }

