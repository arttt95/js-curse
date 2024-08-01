//netflix

var video = []

video[1] = []
video[1]['nome'] = 'Fullmetal Alchemist'
video[1]['categoria'] = 'Anime'

function getVideo(video) {

    try {

        //lógica
        //http

        console.log(video[0]['nome'])

    } catch (erro) {

        console.log(erro)
        console.log('Agora sim podemos tratar esse erro!')
        throw new Error ('Houve um erro, mas não se preocupe. Estamos trabalhando nisso agora.')

    } finally {

        console.log('Sempre passa por aqui (try / catch')

    }
    

    console.log('A aplicação não morreu')

}

function tratar_erro (e) {

    //lógica para registrar o erro no servidor
    console.log(e)

}

getVideo(video)
