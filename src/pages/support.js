export default class Support {
    async render(){
        try {
            return `
            <h1>Support</h1>
            `
        } catch (error) {
            console.log(error);
        }
    }
}