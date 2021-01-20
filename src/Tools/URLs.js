let url = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    url = "http://localhost:3001"
} else {
    // production code
    url="https://skin-ai-hackathon.herokuapp.com/";
}
export default url;