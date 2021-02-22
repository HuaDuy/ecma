export default class Contact {
    async render(){
        try {
            return `
            <h1>Contact</h1>
            `
        } catch (error) {
            console.log(error);
        }
    }
}