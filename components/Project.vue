<template>
    <div>
        <div class="d-flex align-items-center
            justify-content-center project frameProject"
            v-on:click="openModal=true" :style="{ backgroundImage: `url(${imageSource})` }">

            <span id="title" class="h4 z-1">{{ title }}</span>
            <p class="description">{{ description }}</p>
        </div>


        <div id="project-modal" v-show="openModal" @click.outside="handleClickOutside">
            <div class="card text-bg-dark">
                <img v-bind:src="imageSource" class="card-img" :alt="title">
                <div class="card-img-overlay text-start d-flex flex-column">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text mt-4">{{ description }}</p>

                    <footer class="status mt-auto row">
                        <div class="col"></div>
                        <div class="col text-center">
                            <a class="btn btn-dark" :href="repositoryLink"
                            target="_blank" v-show="openSource">
                                Repositório <i class="bi bi-github"></i>
                            </a>
                        </div>
                        <div class="col text-center d-flex flex-column">
                            <small class="my-auto" v-show="developing">
                                Em desenvolvimento
                            </small>
                        </div>
                    </footer>
                </div>

            </div>
        </div>


    </div>
</template>

<script lang="js">

export default {
    data() {
        return {
            openModal: false
        };
    },

    props: {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        imageSource: {
            type: String,
            required: true
        },

        repositoryLink: {
            type: String,
            required: true
        },

        /**
         * Define se esta em desenvolvimento
         */
        developing: {
            type: Boolean
        },

        openSource: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        handleClickOutside() {
            if (!event.target.closest('.card')) {
                this.openModal = false;
            }
        }
    }

};
</script>

<style scoped>
.project {
    width: 10vw;
    height: 10vw;
    min-width: 200px;
    min-height: 200px;
    border-radius: 10px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    cursor: pointer;
}

.project .description {
    font-size: medium;
    display: none;
}

.project:hover {

    .description {
        display: inline;
        filter: brightness(1);
        text-shadow:
            0px 0px 60px black,
            0px 0px 60px black,
            0px 0px 60px black,
            0px 0px 60px black,
            0px 0px 40px black,
            0px 0px 40px black;
    }

    #title {
        display: none;
    }


}


.project::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
}

#project-modal {
    display: flex;
    justify-content: center;
    /* Centralizar horizontalmente */
    align-items: center;
    /* Centralizar verticalmente */
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
}

.card {
    max-width: 60vw;
    max-height: 60vw;
}

.card-img {
    filter: brightness(0.25);
}
</style>