
export default class Home {
    async render(){
        try {
            return `
            <h1>Homepage</h1>
            `
        } catch (error) {
            console.log(error);
        }
    }
}