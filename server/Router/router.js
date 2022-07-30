const router= require('express').Router()
const controller=require('../Controller/controller')

//home page
 router.post('/', controller.home)

//login controller
router.post('/login',controller.login )

//signup controller
router.post('/signup',controller.signup)

//Admin controller
router.post('/admin',controller.adminLogin)

//Admin Home
router.post('/admin/home',controller.adminHome)

//Delete User
router.post('/admin/delete',controller.deleteUser)

//Block User
router.post('/admin/block',controller.blockUser)

//unblock User
router.post('/admin/unblock',controller.unblockUser)










module.exports= router;