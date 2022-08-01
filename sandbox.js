#!/usr/bin/env node
import chalk from 'chalk';
import { readdir } from 'node:fs/promises';
import { pathInfo, saveKeyValue } from './services/storage.service.js';
import { getArgs }  from './helpers/args.js'
import { printHelp } from './services/log_service.js';

const fileList = async (path) => {
  try {
    const files = await readdir(path);
    console.log(chalk.bold(chalk.bgBlue(`Содержимое выбранной папки:`)), path)
    for (const file of files)
      console.log(file);
  } catch (err) {
    console.error(err);
  }
}


const initCLI = () => {
  const args = getArgs(process.argv)
  console.log(chalk.bold(chalk.bgYellow(`Переданные аргументы:`.toUpperCase())))
  console.log(args)
  if (args.h) {
    // Вывод инструкции
    printHelp()
  }
  if (args.l) {
    fileList(args.l)
  }
  if (args.p) {
    pathInfo()
  }
}

initCLI()





