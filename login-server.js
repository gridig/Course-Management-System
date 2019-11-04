module.exports = (req, res, next) => {
  console.log('REQ BODYYYY', req.body, req.method, req.path);
  if (req.method == 'POST' && req.path == '/login') {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
      res.status(200).json({
        token: 'dadandbhkasgdhasjlh.fdgaskjdilhksgakdfldk;sajhdfgvfdasld.fdgjfsdalkhbd'
      })
    } else {
      res.status(400).json({message: 'invalid username or password'})
    }
  } else {
    next()
  }
}