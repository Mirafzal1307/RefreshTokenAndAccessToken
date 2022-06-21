export  function seeds (server) {
    let auth = server.createList("auth", 1);
    let allToken = server.createList("allToken", 1);
    server.db.loadData({
        auth,
        allToken
    })
}
