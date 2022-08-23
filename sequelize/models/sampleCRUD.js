const user = require('./user');

// create a new user
(async () => {
    const jane = user.create( { firstName: "Jane", lastName: "Doe" });
    console.log("jane.id");

    const user = await user.create({
        username: 'alice123',
        isAdmin: true,
    }, { fields: ['username'] });
    // let's assume the defualt of isAdmin is false

    console.log(user.user)
})();

