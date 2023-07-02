import { server } from "./lib/server.js";

console.clear();

type App = {
    init: () => void;
}

const app = {} as App;

app.init = () => {
    // susikurti reikiamus/trukstamus folderius ir failus
    // atsinaujinti informacija
    // duombaze:
    // - prisijunkti
    // - pasiruosti struktura
    // - surasyti pradinius duomenis ir t.t.
    // paleisti serverio logika
    server.init();

    // laike pasikartojantys procesai:
    // - issivalyti nereikalingus failus/info
    // - atnaujanti failus/info
    // - backup darymas
}

app.init();

export default app;