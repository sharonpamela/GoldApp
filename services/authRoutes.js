const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/dashboard');
      } else {
        res.redirect('http://localhost:3000/dashboard');
      }
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/');
    } else {
      res.redirect('http://localhost:3000/');
    }
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/dashboard', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/dashboard');
    } else {
      res.redirect('http://localhost:3000/dashboard');
    }
  });

  app.get('/settings', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/settings');
    } else {
      res.redirect('http://localhost:3000/settings');
    }
  });
};


// const passport = require('passport');
// module.exports = app => {
//   app.get(
//     '/auth/google',
//     passport.authenticate('google', {
//       scope: ['profile', 'email']
//     })
//   );

//   app.get(
//     '/auth/google/callback',
//     passport.authenticate('google'),
//     (req, res) => {
//       if (process.env.NODE_ENV === 'production') {
//         res.redirect('/dashboard');
//       } else {
//         res.redirect('http://localhost:3000/dashboard');
//       }
//     }
//   );

//   app.get('/api/logout', (req, res) => {
//     req.logout();
//     if (process.env.NODE_ENV === 'production') {
//       res.redirect('/');
//     } else {
//       res.redirect('http://localhost:3000/');
//     }
//   });

//   app.get('/api/current_user', (req, res) => {
//     res.send(req.user);
//   });

//   app.get('/dashboard', (req, res) => {
//     if (process.env.NODE_ENV === 'production') {
//       res.redirect('/dashboard');
//     } else {
//       res.redirect('http://localhost:3000/dashboard');
//     }
//   });

//   app.get('/settings', (req, res) => {
//     if (process.env.NODE_ENV === 'production') {
//       res.redirect('/settings');
//     } else {
//       res.redirect('http://localhost:3000/settings');
//     }
//   });
// };
