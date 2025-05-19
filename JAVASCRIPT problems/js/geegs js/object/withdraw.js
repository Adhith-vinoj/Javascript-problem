


class BankAccount{
    constructor(owner,balance=0){
        this.owner=owner
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount
        console.log(`${this.balance}`)
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`insufficient funds.`)
        }else{
            this.balance-=amount
            console.log(`${this.balance}`)
        }
    }
}

const account=new BankAccount('Alice',500)
account.deposit(200)
account.withdraw(100)




///]]]]