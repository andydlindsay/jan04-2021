const bcrypt = require('bcryptjs');

const plaintextPassword = '1234';

// const salt = bcrypt.genSaltSync(10);

bcrypt.genSalt(10, (err, salt) => {
  console.log(salt);
  bcrypt.hash(plaintextPassword, salt, (err, hash) => {
    console.log(hash);
  })
});

const hashed = '$2a$10$slToiyF4ozO1NgK1bWGRFud2HDt3NDfFRoQPRWghg1x.DTe0gVbXy';

bcrypt.compare('1234', hashed, (err, result) => {
  console.log(result);
});

bcrypt.compare('1234', hashed)
  .then(result => {
    console.log('promise:', result);
  })
