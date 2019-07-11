var orm = require("./config/orm.js");

// Find all the devoured ordering by the lowest price to the highest price.
orm.selectAndOrder("burger_name", "devoured", "price");

// Find a pet in the devoured table by an burger_name of Rachel.
orm.selectWhere("devoured", "burger_name");

// Find the buyer with the most devoured.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "devoured");


module.exports = burger;
