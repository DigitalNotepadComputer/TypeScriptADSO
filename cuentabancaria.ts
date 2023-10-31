class CuentaBancaria {
    constructor(public numeroCuenta: string, public titular: string, public saldo: number) {}
  
    depositar(monto: number) {
      this.saldo += monto;
    }
  
    retirar(monto: number) {
      if (monto <= this.saldo) {
        this.saldo -= monto;
      } else {
        console.log('Saldo insuficiente.');
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo de la cuenta de ${this.titular}: $${this.saldo}`);
    }
  }
  
  const cuenta1 = new CuentaBancaria('12345', 'Juan', 1000);
  const cuenta2 = new CuentaBancaria('67890', 'Maria', 500);
  
  cuenta1.depositar(200);
  cuenta2.retirar(100);
  cuenta1.consultarSaldo();
  cuenta2.consultarSaldo();
  