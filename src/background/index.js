chrome.commands.onCommand.addListener((command) => {
    if(command === 'turn-on') {
        chrome.action.setBadgeText({ text: 'ON' });
        chrome.action.setBadgeBackgroundColor({ color: 'green' });
    }
    if(command === 'turn-off') {
        chrome.action.setBadgeText({ text: 'OFF' });
        chrome.action.setBadgeBackgroundColor({ color: 'red' });
    }
});