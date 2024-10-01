import { Storage } from "aws-amplify";

function downloadFile(file, filename) {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    const clickHandler = () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);
            a.removeEventListener("click", clickHandler);
        }, 150);
    };
    a.addEventListener("click", clickHandler, false);
    a.click();
}

export async function download(path, name) {
    const file = await Storage.get(path, {
        download: true,
    });
    downloadFile(file.Body, name);
}