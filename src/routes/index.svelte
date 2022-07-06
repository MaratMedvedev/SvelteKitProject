<script lang="ts">
	// //
    class API {
        // static toRet: string;
        static async getRandomAPI(): Promise<string> {
            let toRet: string = "";
            await fetch("https://favqs.com/api/qotd")
                .then((response) => {
                    return response.json();
                })
                .then(async (data) => {
                    toRet = data.quote.body;
                })
                .catch( error => {
                    console.log("API has problems...")
                }
                )
                ;
            return toRet;
        }
    }
    let itemAPI1: string = "Please, wait...";
    let itemAPI2: string = "Please, wait...";
    let itemAPI3: string = "Please, wait...";

    API.getRandomAPI().then(value => itemAPI1 = value);
    API.getRandomAPI().then(value => itemAPI2 = value);
    API.getRandomAPI().then(value => itemAPI3 = value);
</script>

<main>
    <p>My name is Marat and I`m 18 y.o.</p>
    <p>At the moment, I am Innopolis university bachelor student.</p>
    <p>Here, you can find some quotes</p>
    <div class="flex-container">
        <div>{itemAPI1}</div>
        <div>{itemAPI2}</div>
        <div>{itemAPI3}</div>
    </div>
</main>

<style>
    p {
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    main {
        text-align: center;
        color: #d3d9e4;
        font-size: 28px;
        margin-top: 50px;
    }
    .flex-container div {
        background-color: rgb(92, 136, 207);
        color: white;
        margin: 1%;
        width: fit-content;
        justify-content: center;
        text-align: center;
        align-self: center;
        border-radius: 10px;
        padding: 1%;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 2%;
    }
</style>
