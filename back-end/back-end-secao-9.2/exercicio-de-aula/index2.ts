interface Logger {
    log(param:string):void
}

interface Database {
    logger: Logger;

    save(key:string, value: string):void
}

class ConsoleLogger implements Logger {
    log(param: string): void {
        console.log(param)
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
        console.log('logger2' + param)
    }
}

class ExampleDatabase implements Database {
    constructor(public logger: Logger = new ConsoleLogger()) {}

    save(key:string, value:string) {
        this.logger.log(`salvando o valor ${value} na chave ${key}`)
    }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');