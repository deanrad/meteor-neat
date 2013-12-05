Package.describe({
    summary: "Neat - A semantic, fluid grid framework on top of Sass and Bourbon"
});

Package.on_use(function (api) {
    api.use(['scss','bourbon'], ['client', 'server']);
    //dont need to add any files to the client, they're there just so the package will build
});
