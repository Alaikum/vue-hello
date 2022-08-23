console.log('ciao')

const app= new Vue({
    el:'#root',
    data:{
        titolo:'Ecco a voi Vue',
        img:'https://picsum.photos/300/300',
        alt:'foto non disponibile',
    },
    methods:{
        toUpper(text){
            return text.toUpperCase()
        },
    },
})