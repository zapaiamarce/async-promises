import * as jsonfile from "jsonfile";
import * as fetch from "node-fetch";

function otraFuncion() {
  console.log("empezó otra función");

  console.time();
  const laPromesa = fetch("https://api.github.com/users/zapaiamarce/repos");

  const primera = laPromesa.then(function (res) {
    // console.log(res);
    console.log("uno");
    console.timeEnd();
  });

  primera.then(function () {
    console.log("dos");
  });

  laPromesa.catch(function (err) {
    // console.log(err);
  });

  console.log("terminó otra función");

  // for (let index = 0; index < 10000; index++) {}
}

function main() {
  otraFuncion();
}

main();

// etapa 1
// declara función otraFunción()
// declarar función main()
// ejecutar main

// etapa 2
// entro a main, (ejecuta main)
// ejecutar otraFunción()
// 1er console.log
// declarar el timeout
// 2do console.log
// for

// etapa (3/4/5)
// timeOut
