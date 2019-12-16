
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'boy', password: 'password'},
        {username: 'girl', password: 'password'},
        {username: 'human', password: 'password'}
      ]);
    });
};
