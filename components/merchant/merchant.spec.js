const { expect, server, prefix } = require('../../config/test')

const checkBody = function(res) {
  expect(res.body).to.have.property('qrcodeImage')
}

const badRequest = function(err) {
  expect(res.body).to.have.property(
    'status',
    'type',
    'body'
  )
}

describe('POST /qrcode', function() {
  it('response 200 and QR code image data uri with proper post body', function(done) {
    server  
      .post(`${prefix}/qrcode`)
      .send({
        name: "hk01",
        amount: 20
      })
      .expect(200)
      .expect(checkBody)
      .end(done)
  })

  it('response 400 with wrong post body', function(done) {
    server 
      .post(`${prefix}/qrcode`)
      .send('something')
      .expect(400)
      .end((err, res) => done().fail(err))
  })

  it('response 400 with missing name or amount field', function(done) {
    server
      .post(`${prefix}/qrcode`)
      .send({
        name: 'hk01'
      })
      .expect(400)
      .end((err, res) => done().fail(err))
  })
})

