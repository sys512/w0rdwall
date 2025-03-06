// ==UserScript==
// @name         W0rdwall Alpha
// @namespace    mailto:gcrawler808@gmail.com
// @version      0.2
// @description  Wordwall cheat that spoofs leaderboard values.
// @match        *://wordwall.net/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log("Userscript initialized: Replacing script with blocking execution.");
    window.w0rdwallpubtime = 13500
    window.w0rdwallpubscore = 40000
    const originalScriptURL = "https://app.cdn.wordwall.net/static/scripts/saltarelle/vel-wordwall-application-client.29kudwn2rh72yjmhlngv17q2.js";
    const modifiedScriptURL = "https://cdn.jsdelivr.net/gh/sys512/w0rdwall/publicalpha.js";

    // Flag to block script execution until replaced
    let blockScriptExecution = true;

    // Function to replace the script URL and allow execution
    function replaceScriptURL(script) {
        if (script.src && script.src.includes(originalScriptURL)) {
            console.log("Found original script, replacing URL with modified one.");
            script.src = modifiedScriptURL;
            blockScriptExecution = false; // Allow execution once the script is replaced
        }
    }
    // Function to update variables
    function updateValues() {
        // Get input values
        const scoreInput = document.getElementById("score").value;
        const timeInput = document.getElementById("time").value;

        // Update global variables
        window.w0rdwallpubscore = parseInt(scoreInput, 10) || 0; // Ensure it's a number
        window.w0rdwallpubtime = parseInt(timeInput, 10) || 0;

        // Log the values (for debugging)
        console.log("Score set to:", window.w0rdwallpubscore);
        console.log("Time set to:", window.w0rdwallpubtime);
    }

    // Create a MutationObserver to watch for new script elements being added
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            // Look for added nodes that are script tags
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.tagName === 'SCRIPT') {
                        replaceScriptURL(node);
                    }
                });
            }
        }
    });

    // Start observing the document for changes (specifically added child nodes)
    observer.observe(document.head, { childList: true });

    // Block all script tags from executing until the script is replaced
    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(newChild) {
        if (newChild.tagName === "SCRIPT" && blockScriptExecution) {
            console.log("Blocking script execution until replaced:", newChild.src);
            // Prevent the script from being added immediately
            return;
        }
        return originalAppendChild.apply(this, arguments);
    };

    console.log("MutationObserver is observing script additions.");
    // Inject custom HTML into the page
    window.addEventListener('load', function() {
        // Find the parent div where the HTML will be inserted
        const topRightPanels = document.querySelector('.top-right-panels.js-top-right-panels');
        if (topRightPanels) {
            // Find the specific div under which to insert the new HTML
            const targetPanel = topRightPanels.querySelector('.landing-page-panel.formats-panel.js-formats-panel');
            if (targetPanel) {
                const newHTML = `
                    <div style="text-align: left;
                        position: relative;
                        background-color: #fff;
                        padding: 24px;
                        border-radius: 3px;
                        font-size: 10;
                        border: 1px solid #e0e0e0;
                        border-bottom: 1px solid #b0b0b0;
                        margin-bottom: 12px;
                        width: 100%;">
                        <h3>w0rdwall</h3>
                        <label for="score" style="margin-bottom: 30px;">Score: </label>
                        <input type="number" id="score" name="score" min="1" step="1" value="42000" style="display: inline-block; margin-top:8px; margin-bottom:12px;">
                        <label for="time" style="margin-bottom: 30px;">Time (ms): </label>
                        <input type="number" id="time" name="time" min="1" step="1" value="15000" style="display: inline-block; margin-top:8px; margin-bottom:10px;">
                        <button id="submitBtn" class="default-btn white">Accept</button>
                    </div>
                `;
                // Inject the HTML below the target panel
                targetPanel.insertAdjacentHTML('afterend', newHTML);
                console.log("Injected new HTML successfully.");
            } else {
                console.log("Target panel not found.");
            }
        } else {
            console.log("Top-right panels div not found.");
        }
    });
    // Wait for the page to fully load before adding the event listener
    window.addEventListener("load", function () {
        setTimeout(() => {
            document.getElementById("submitBtn").addEventListener("click", updateValues);
            console.log("Event listener added after delay");
        }, 1000); // 1-second delay to ensure elements exist
    });
})();
