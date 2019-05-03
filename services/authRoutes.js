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
        res.redirect('/page/dashboard');
      } else {
        res.redirect('http://localhost:3000/page/dashboard');
      }
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/');
    } else {
      res.redirect('http://localhost:3000/page/');
    }
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/page/dashboard', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/page/dashboard');
    } else {
      res.redirect('http://localhost:3000/page/dashboard');
    }
  });

  app.get('/page/settings', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.redirect('/page/settings');
    } else {
      res.redirect('http://localhost:3000/page/settings');
    }
  });
};
