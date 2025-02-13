# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  File Upload Storage Configuration with Multer
  This project uses Multer, a Node.js middleware for handling multipart/form-data, to manage file uploads. The following code configures the storage engine using Multer's diskStorage method.

Code Explanation
javascript
Copy
Edit
const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, "files");
},
filename: function (req, file, cb) {
const uniqueSuffix = Date.now();
cb(null, uniqueSuffix + file.originalname);
},
});
Breakdown:
multer.diskStorage({...}):
This method configures Multer to store uploaded files directly on the disk. It accepts an object with two functions: destination and filename.

Destination Function:

javascript
Copy
Edit
destination: function (req, file, cb) {
cb(null, "files");
},
Purpose:
Specifies the directory where the uploaded files will be stored.

Parameters:

req: The incoming request object.
file: The file object containing file details.
cb: A callback function.
Implementation:
The callback cb is called with two arguments:

null: Indicates there is no error.
"files": The name of the folder where files will be saved.
Note: Ensure that the folder files exists on your server or is created programmatically.
Filename Function:

javascript
Copy
Edit
filename: function (req, file, cb) {
const uniqueSuffix = Date.now();
cb(null, uniqueSuffix + file.originalname);
},
Purpose:
Determines the filename for each uploaded file.

Parameters:

req: The incoming request object.
file: The file object (includes properties like originalname).
cb: A callback function.
Implementation:

A unique suffix is generated using Date.now(), which returns the current timestamp.
The callback cb is then called with:
null: Indicates no error.
uniqueSuffix + file.originalname: The new filename, created by prepending the timestamp to the original file name.
This approach helps prevent file naming collisions by ensuring each filename is unique.
Summary
Storage Directory:
All uploaded files are stored in a folder named "files".

Unique Filenames:
Files are renamed by prefixing the current timestamp to the original file name. This minimizes the risk of overwriting files that share the same name.

This configuration is part of the file upload functionality and ensures that files are saved reliably on the server with unique names, which is crucial for handling multiple uploads efficiently.
