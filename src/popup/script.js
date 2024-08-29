document.querySelector(".example-btn").addEventListener("click", async () => {
    const [tab] = await browser.tabs.query({ currentWindow: true, active: true });

    browser.tabs.sendMessage(tab.id, { key: "TEST" });
});
