/**
 * Module core/webidl-clipboard
 *
 * This module adds a button to each IDL pre making it possible to copy
 * well-formatted IDL to the clipboard.
 *
 */
import "deps/regenerator";
import Clipboard from "deps/clipboard";

// This button serves a prototype that we clone as needed.
const copyButton = document.createElement("button");
copyButton.innerHTML = "📋";
copyButton.title = "Copy IDL to clipboard";
copyButton.classList.add("respec-button-copy-paste", "removeOnSave");

const clipboardOps = {
  text: trigger => {
    return document
      .querySelector(trigger.dataset.clipboardTarget).textContent
      .replace(/\ +/gm, " ")
      .replace(/^\ /gm, "  ")
      .replace(/^};\n/gm, "};\n\n")
      .trim();
  },
};

export async function run(conf, doc, cb) {
  Array
    .from(doc.querySelectorAll("pre.idl"))
    .map(elem => {
      const button = copyButton.cloneNode(true);
      button.dataset.clipboardTarget = "#" + elem.id;
      return { button, elem };
    })
    .forEach(({ elem, button }) => {;
      elem.insertAdjacentElement("beforebegin", button)
    });
  const clipboard = new Clipboard(".respec-button-copy-paste", clipboardOps);
  clipboard.on("success", e => e.clearSelection());
  cb();
}
