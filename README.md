<div align="center">

<!-- Title: -->
  <a href="https://easyshare.rohittewari.live" target="_blank">
    <img src="https://user-images.githubusercontent.com/75976169/201949300-c2f6205d-aa29-4e5a-9b93-f3d682894699.png" height="50">
  </a>

<!-- Short description: -->
<h2>File sharing app powered by express js</h2>

<!-- Labels: -->
  <div>
    <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102" height="20">
  <a href="https://easyshare.rohittewari.live" target="_blank">
    <img src="https://img.shields.io/website-up-down-green-red/https/easyshare.rohittewari.live.svg" height="20" alt="Website up">
  </a>
  <img src="https://img.shields.io/github/repo-size/rtewari056/easyshare.svg?label=Repo%20size" height="20" alt="Repo size">
  <img src="https://img.shields.io/github/languages/top/rtewari056/easyshare" height="20" alt="GitHub top language">
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/rtewari056/easyshare" height="20" alt="MIT License">
  </a>
  </div>

</div>

## 🚀 Demo

This application is deployed on DigitalOcean. Please check it out :smile: [here](https://easyshare.rohittewari.live).

![easyShare](https://user-images.githubusercontent.com/75976169/201959270-21144660-3acf-4bd7-8d92-8186a192ccef.gif)

## 🖥️ Tech Stack

**Frontend:**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)&nbsp;

**Backend:**

![Node JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
![HTML5](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;

**Database:**

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;

**Email Service:**

[![Sendinblue](https://img.shields.io/static/v1?label=&message=Sendinblue&color=0092ff&style=for-the-badge)](https://www.sendinblue.com)

**Deployed On:**

[![Sendinblue](https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white)](https://easyshare.rohittewari.live)

## ⚡️ Features

- [x] Secure file transfer via email, or unique shareable links.
- [x] Intuitive and friendly UI with drag & drop feature.
- [x] Toast notifications for actions: uploading files, exceed file size limit, sending email etc.
- [x] View upload progress on the app.
- [x] Send large files up to 100 MB per transfer.
- [x] Files are available up to 24 hours before being automatically and permanently erased from servers.

## 📁 Project structure
```terminal
├── backend/
│   ├── config/
│   │   ├── connectToMongoDb.js
│   │   └── cronScript.js
│   ├── handlers/
│   │   └── fileHandlers.js
│   ├── models/
│   │   └── File.js
│   ├── handlers/
│   │   ├── fileHandlers.js
│   │   └── cronScript.js
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── img/
│   │   │    ├── download-sd.svg
│   │   │    └── logo.png
│   │   └── favicon.ico
│   ├── routes/
│   │   ├── downloadRoutes.js
│   │   ├── fileRoutes.js
│   │   ├── index.js
│   │   └── showRoutes.js
│   ├── services/
│   │   ├── emailService.js
│   │   └── emailTemplate.js
│   ├── uploads/
│   │   └── .gitkeep
│   ├── views/
│   │   └── download.ejs
│   └── server.js
├── frontend/
│   ├── copy-icon.svg
│   ├── favicon.ico
│   ├── file.svg
│   ├── index.html
│   ├── index.js
│   ├── logo.png
│   ├── style.css
│   └── undraw-upload.svg
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 📖 Prerequisites

In order to run the project you need `node>=16` and `npm>=8` installed on your machine.

## 🚩 Getting Started

### 1. Clone the `easyshare` repository:

```bash
git clone https://github.com/rtewari056/easyshare.git
cd easyshare
```

### 2. Install package dependencies:

In the `root` directory, run:

```bash
npm install
```

### 3. Rename `.env.example` into `.env` and put all creadentials:

```bash
APP_BASE_URL=http://localhost:5002
PORT=5002
MONGO_URI="YOUR_MONGO_CONNECTION_URL"

SMTP_HOST=<YOUR_SMTP_SERVER_HOST_NAME>
SMTP_PORT=587
SMTP_USER=<YOUR_SMTP_SERVER_USER_NAME>
SMTP_PASSWORD=<YOUR_SMTP_SERVER_PASSWORD>
```

### 4. Run project:

```bash
npm run dev
```

### 5. Open your browser and go to `http://localhost:5002`

## 👤 Developer

[Rohit Tewari](https://github.com/rtewari056)

## 📬 Contact

If you want to contact me, you can reach me through below handles.

<a href="https://linkedin.com/in/rtewari056" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="mailto:rtewari056@gmail.com"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://twitter.com/rtewari056" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/></a>

## 📃 License

easyShare is licensed under the <a href="./LICENSE">MIT License</a>.

### Show your support by 🌟 the project