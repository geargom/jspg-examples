saveFilePF("file path", "This is test.", () => {
    openFilePF("filepath", (data) => {
        console.log(data);
    });
});