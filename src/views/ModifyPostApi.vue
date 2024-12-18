<template>
    <div class="about">
        <form v-on:submit.prevent="modify()">
            <label for="title">
                <input type="text" id="title" v-model="title" required>
            </label>
            <label for="content">
                <input type="text" id="content" v-model="content" required>
            </label>
            <input type="submit">
        </form>

    </div>

</template>
<script>
import postService from "@/services/postService.js"

export default {
    data() {
        return {
            title: "",
            content: "",
        }
    },
    methods: {
        async modify() {
            try {
                let res = await postService.update(this.$route.params.id, {title:this.title, content:this.content})
                this.post = res.data
                this.$router.push('/posts')
            }
            catch (error) {
                console.log(error)
            }
        }
    },

    async created(){
        try{
            let res = await postService.show(this.$route.params.id)
            this.title = res.data.title
            this.content = res.data.content
        }
        catch(error){
            console.log(error)
        }
    }
    

}
</script>