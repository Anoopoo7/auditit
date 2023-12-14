<h1 align="center">
  <img src="https://i.ibb.co/wQ8W49W/audit-logo.png" alt="projct Logo" width="200">
  <br>
  <br>
  AUDIT IT
</h1>

<p align="center">
  <a href="https://github.com/Anoopoo7/auditit">
    <img src="https://img.shields.io/github/stars/Anoopoo7/auditit?style=for-the-badge" alt="GitHub stars">
  </a>
  <a href="https://github.com/Anoopoo7/auditit/issues">
    <img src="https://img.shields.io/github/issues/Anoopoo7/auditit?style=for-the-badge" alt="GitHub issues">
  </a>
  <a href="https://github.com/Anoopoo7/auditit/network">
    <img src="https://img.shields.io/github/forks/Anoopoo7/auditit?style=for-the-badge" alt="GitHub forks">
  </a>
  <a href="https://github.com/Anoopoo7/auditit/LICENSE">
    <img src="https://img.shields.io/github/license/Anoopoo7/auditit?style=for-the-badge" alt="GitHub license">
  </a>
</p>

<p align="center">
  <strong>Open-Source Web Auditing Services</strong>
  <br>
  <br>
  Audit-It is a lightweight and open-source web analytics system built on Express.js and Algolia. Easily monitor user clicks on configured pages and visualize events on a centralized dashboard. Installation is simple with npm, and configuration allows seamless integration with your Express.js application. Empower your analytics with Audit-It!

## Features
</p>

---

<p align="center">
  <img src="https://i.ibb.co/W0b0L6z/audit-it-image.png" alt="Project Screenshot">
</p>

---

## Features

- **Easy Installation:** Get started quickly with npm install audit-it.
- **Flexible Configuration:** Customize tracking for specific pages using a simple configuration file.
- **Centralized Dashboard:** Monitor and analyze user events conveniently from a centralized dashboard.
- **Community Contributions:** Open to contributions and improvements from the community.


## Getting Started

You need to Sign in to [**Audit Admin Dashboard**](https://audit-admin.vercel.app)
and create pages and their curresponding events to record.


1. Insall on project:
```bash
npm instal audit-it
```
2. Import and call it Dom events: 
```bash
import record from "audit-it"

const MyComponent = () => {

    const handleTrigger = () => {
        #pass the event name 
        record("user_read_desc");
    }

    return (
        <Button onClick={handleTrigger} >click</Button>
    );
}
```
if you are not passing the event, then user will be ```anonymous``` andpage will take up from the current pathname
<br>

3. Customize the event and page: 
```bash
....
# changing the page name
const handleTrigger = () => {
    # passing event and page
    record("user_read_desc", "home_page");
}


# passing user info
const handleTrigger = () => {
    record("user_read_desc", userData?.email);
}
.....
```

- For more information https://crosscodeblogs.netlify.app/blog/auditit

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used.
- Inspiration.
- etc.

---

<p align="center">
  <a href="https://github.com/Anoopoo7">
    <img src="https://img.shields.io/badge/Visit%20My%20GitHub-Anoopoo7-333?style=for-the-badge&logo=github" alt="GitHub profile">
  </a>
</p>
