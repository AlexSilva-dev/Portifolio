<script setup lang="js">
import mataMosquisto from '@/assets/img/mata-mosquisto.webp';
import imgInstagramBot from '@/assets/img/instagram.webp';
import imgUnifyEventos from '@/assets/img/unify-eventos.webp';
import imgApiJava from '@/assets/img/code.webp';

const DATA = {
    mataMosquisto: {
        title: 'Mata Mosquito',
        description: 'Esse projeto é um jogo desenvolvido em JS,' +
            'para consolidar meus conhecimentos em JavaScript.',
        developing: false,
        repositoryLink: 'https://github.com/AlexSilva-dev/jogo-mata_mosquito',
        imageSource: mataMosquisto
    },
    instagramBot: {
        title: 'InstagramBot',
        description: 'Esse projeto é um jogo desenvolvido em JS,' +
            'para consolidar meus conhecimentos em JavaScript.',
        developing: false,
        repositoryLink: 'https://github.com/AlexSilva-dev/InstagramBot',
        imageSource: imgInstagramBot
    },
    unifyEventos: {
        title: 'Unify Eventos',
        description: 'Esse projeto é um jogo desenvolvido em JS,' +
            'para consolidar meus conhecimentos em JavaScript.',
        developing: true,
        repositoryLink: '',
        imageSource: imgUnifyEventos,
        openSource: false
    },
    apiJava: {
        title: 'Java API',
        description: 'Esse projeto é um jogo desenvolvido em JS,' +
            'para consolidar meus conhecimentos em JavaScript.',
        developing: true,
        repositoryLink: 'https://github.com/AlexSilva-dev/trabalho-dev-web-avancado',
        imageSource: imgApiJava
    }
};
</script>
<template>
    <div id="projects-component" class="text-center">
        <h1 class="h2">- Meus projetos -</h1>
        <div class="container">
            <div id="list-projects" class="row gap-5">
                <Project class="col p-auto d-flex align-items-center justify-content-center"
                    :imageSource="DATA.mataMosquisto.imageSource"
                    :title="DATA.mataMosquisto.title"
                    :description="DATA.mataMosquisto.description"
                    :developing=DATA.mataMosquisto.developing
                    :repositoryLink="DATA.mataMosquisto.repositoryLink">
                </Project>

                <Project class="col d-flex align-items-center justify-content-center"
                    :imageSource="DATA.instagramBot.imageSource"
                    :title="DATA.instagramBot.title"
                    :description="DATA.instagramBot.description"
                    :developing=DATA.instagramBot.developing
                    :repositoryLink="DATA.instagramBot.repositoryLink">
                </Project>

                <Project class="col d-flex align-items-center justify-content-center"
                    :imageSource="DATA.unifyEventos.imageSource"
                    :title="DATA.unifyEventos.title"
                    :description="DATA.unifyEventos.description"
                    :developing=DATA.unifyEventos.developing
                    :repositoryLink="DATA.unifyEventos.repositoryLink"
                    :openSource="DATA.unifyEventos.openSource">
                </Project>

                <Project class="col d-flex align-items-center justify-content-center"
                    :imageSource="DATA.apiJava.imageSource"
                    :title="DATA.apiJava.title"
                    :description="DATA.apiJava.description"
                    :developing=DATA.apiJava.developing
                    :repositoryLink="DATA.apiJava.repositoryLink">
                </Project>
            </div>

        </div>
    </div>
</template>

<script lang="js">
export default {
    data() {
        return {
            mataMosquito: '@/assets/img/mata-mosquisto.webp'
        }
    }
}
</script>

<style scoped>
#unify-eventos {
    background-image: url('@/assets/img/unify-eventos.webp');
}

#api-java {
    background-image: url('@/assets/img/code.webp');
}

#list-projectsm span {
    font-weight: bold;
}
</style>