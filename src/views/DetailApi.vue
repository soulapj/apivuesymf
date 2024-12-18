<template>
    <div class="about">
            <div v-if="post">
                <a>{{ post.title }}</a>
                <a>{{ post.content }}</a>
            </div>
            <div v-else>
                chargement...
            </div>

    </div>

</template>
<script>
  import postService from "@/services/postService.js"

export default {
    data() {
        return {
            post: null,
        }
    },
    async created(){
        try{
            let res = await postService.show(this.$route.params.id)
            console.log(res)
            this.post = res.data
        }
        catch(error){
            console.log(error)
        }
    }

}
</script>