async function record(event, page, user = "anonymous") {
    try {
        await fetch('http://localhost:8090/record', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event, page: page ?? window?.location.pathname, user
            })
        })
    } catch (err) {
        console.log({ err });
    }
}
record()

module.exports = record