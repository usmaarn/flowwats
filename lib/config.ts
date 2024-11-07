
const {APP_NAME, APP_ENV, APP_URL} = process.env;


const config =  {
    appName: APP_NAME || "Flowwats",
    appEnv: APP_ENV || "local",
    appUrl: APP_URL || "http://localhost:3000",
    appDescription: "Transform Your Customer's Engagement",
}


export default config;