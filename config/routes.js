import index from '../components/index'
import qrCode from '../components/payment'

const Routes = (app) => {
    app.use('/', index)
    app.use('/api/v1/qrcode', qrCode)
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        let err = new Error('Not Found')
        err.status = 404
        next(err)
    })
  
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = req.app.get('env') === 'development' ? err : {}
    
        // render the error page
        res.status(err.status || 500)
        res.send(err)
    })
  
}

export default Routes