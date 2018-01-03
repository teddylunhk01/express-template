const { expect, server, prefix } = require('../../config/test')

const checkBody = function(res) {
  expect(res.body).to.have.property('qrcodeImage')
}

describe('POST /qrcode', function() {
  it('response with QR code image data uri', function(done) {
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
})