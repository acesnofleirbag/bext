document.addEventListener("click", () => console.log("CLICK"));

browser.runtime.onMessage.addListener(async (req, sender, res) => {
    switch (req.key) {
        case "TEST": 
            console.log("handle test event");
            break;
        default:
            console.log("event handler not defined")
    }
});
