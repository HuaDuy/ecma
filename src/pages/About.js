export default class About {
    async render(){
        try {
            return `
            <h1>About Page</h1>
            `
        } catch (error) {
            console.log(error);
        }
    }
}