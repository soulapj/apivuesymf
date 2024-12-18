<template>
    <div class="about">
        <div v-for="(post, index) in posts" :key="index">
            <div>
                <a>{{ post.title }}</a>
                <a>{{ post.content }}</a>
                <router-link :to="`/post/${post.id}`">Détails</router-link>
                <router-link :to="`/edit/${post.id}`">Editer</router-link>
                <button v-on:click="supp(post.id)">Delete</button>
            </div>
        </div>
        <router-link to="/add">Créer nouveau</router-link>
    </div>

</template>
<script>
import postService from "@/services/postService.js"

export default {
    data() {
        return {
            posts: [],
        }
    },
    methods: {
        async supp(id) {
            console.log("test")
            if (confirm('Êtes-vous sur de vouloir supprimer ce post?')) {
                try {
                    await postService.delete(id)
                    this.posts = this.posts.filter((post)=>post.id !== id)  
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },
    async created() {
        try {
            let res = await postService.list()
            // console.log(res)
            this.posts = res.data
        }
        catch (error) {
            console.log(error)
        }
    }

}


</script>