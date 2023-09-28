class Poet {
    Rhyming(){
        console.log("well versed")
    }
}
class Rapper extends Poet{
    Relativity(){
        console.log('appeals to the crowd');
    }
}
const me = new Rapper
const you = new Poet
me.Relativity()

you.Rhyming()