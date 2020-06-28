const path = require('path');
const ErrorResponse = require('../Utils/ErrorResponse');
const enviro = require('dotenv');
enviro.config({ path: './Config/Config.env' });
const AsyncHandler = require('../Middleware/Async');
const User = require('../Model/RegisterModel');



module.exports = {
  // @desc Change profile picture
  // @route PUT /api/user/preference/:id/photo
  // @access Private

  ProfilePicture: AsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(
        new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
      );
    }

    if (!req.files) {
      return next(new ErrorResponse('Please  upload a file', 400));
    }
    const file = req.files.file;

    // Make sure the image is a photo
    if (!file.mimetype.startsWith('image')) {
      return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    //Check picture size
    if (file.size > process.env.MaxFileUpload) {
      return next(
        new ErrorResponse(
          `Please upload an image less ${process.env.MaxFileUpload}`,
          400
        )
      );
    }

    file.name = `photo_${user._id}${path.parse(file.name).ext}`;
    file.mv(`${process.env.FileUploadPath}/${file.name}`, async (err) => {
      if (err) {
        console.log(err);
        new ErrorResponse(
          `File upload failed ${process.env.MaxFileUpload}`,
          500
        );
      }
      await User.findByIdAndUpdate(
        { _id: req.params.id },
        { image: file.name }
      );
      res.status(200).json({ success: true, data: file.name });
    });
  }),

 
};
