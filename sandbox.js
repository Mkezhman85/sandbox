#!/usr/bin/env node
import chalk from 'chalk';
import { readdir } from 'node:fs/promises';
import { pathInfo, saveKeyValue } from './services/storage.service.js';
import { getArgs }  from './helpers/args.js'
import { printHelp } from './services/log_service.js';
import { getFiles } from './services/listfiles_service.js';
import { App } from './classes/app.js';

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
  if (args.d) {
    console.log(getFiles(args.d))
  }
  if (args.e) {
    const app = new App()
    app.init()
  }
}

initCLI()





