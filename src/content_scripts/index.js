let accumulatedData = "";
let updatingContent = false;
let formattedJsonContainer;

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (const addedNode of mutation.addedNodes) {
                if (addedNode.nodeName === "PRE" && addedNode.id !== 'formattedJsonContainer') {
                    addedNode.style.display = 'none';
                }
            }
        }

        if (mutation.type === 'characterData' && !updatingContent) {
            let node = mutation.target;
            accumulatedData = node.nodeValue;

            try {
                accumulatedData = makeSureItIsJson(accumulatedData);
                const jsonData = JSON.parse(accumulatedData);
                const formattedData = formatJSON(jsonData);

                // If the formattedJsonContainer with the specific ID doesn't exist yet, create it
                if (!formattedJsonContainer) {
                    formattedJsonContainer = document.createElement('pre');
                    formattedJsonContainer.id = 'formattedJsonContainer';
                    // Insert the new container at the beginning of the body
                    document.body.insertBefore(formattedJsonContainer, document.body.firstChild);
                }
                
                // Update the formattedJsonContainer with the formatted data
                formattedJsonContainer.textContent = formattedData;
                accumulatedData = "";

            } catch (e) {
                console.error("Current content is not valid JSON. Waiting for more data.");
            }
        }
    }
});

function makeSureItIsJson(data) {
    if (data.length === 0) {
        return data;
    }
    if (data[0] === "{" && data[data.length - 1] !== "}") {
        data += "}";
    } else if (data[0] === "[" && data[data.length - 1] !== "]") {
        data += "]";
    }
    return data;
}

function formatJSON(data) {
    return JSON.stringify(data, null, 2);
}

if (document.contentType === "application/json") {
    const config = { childList: true, characterData: true, subtree: true };
    observer.observe(document.documentElement, config);
}
