export const actions = {
    // async questionUpload

    async test({ commit,state } ) {
        const data = await this.$axios.$post("http://icanhelpyou:4567/api/test" )
        console.log(data)
        return { status: 200, message: "ok" };

    }
}