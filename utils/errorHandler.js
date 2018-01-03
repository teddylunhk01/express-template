export const sendError = (res, error) => {
  const { status, type, body } = error
  res.status(status).send({
    status,
    type,
    body
  })
}

export const checkPostBody = (error, req, res, next) => { 
  if (error instanceof SyntaxError) {
    sendError(res, error)
  } else {
    next()
  }
}