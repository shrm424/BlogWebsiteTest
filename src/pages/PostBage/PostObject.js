import pic1 from '../../Images/img1.jpg';
import pic2 from '../../Images/img2.jpg';
import pic3 from '../../Images/img3.jpg';
import pic4 from '../../Images/img4.jpg';
import pic5 from '../../Images/img5.jpg';
import pic6 from '../../Images/img6.png';

const today = new Date();

const date = today.getFullYear() + '-' +
    (today.getMonth() + 1) + '-' +
    today.getDate() + ' ' +
    today.getHours() + ':' +
    today.getMinutes() + ':' +
    today.getSeconds()
    ;

const initialPosts = [
    { id: 1, image: pic3, auther: "Sharmarke Nor Mohamed ", data: date, title: 'New Topic: Frontend Frameworks', description: 'Explore various frontend frameworks and their advantages in building modern web applications. Compare React, Angular, and Vue.js for different use cases and project requirements.' },

    { id: 2, image: pic4, auther: "Abdifitah Mohamed Abdullahi ", data: date, title: 'UI/UX Design Principles for Developers', description: 'Learn essential UI/UX design principles that every developer should know. Discover how to create intuitive user interfaces and enhance user experience through effective design practices.' },

    { id: 3, image: pic5, auther: "Ikhlas Ali Mohamed ", data: date, title: 'Serverless Architecture with AWS Lambda', description: 'Delve into serverless architecture using AWS Lambda. Learn how to build scalable and cost-effective backend services without managing servers, and explore use cases for serverless applications.' },

    { id: 4, image: pic2, auther: "Sharmarke Nor Mohamed ", data: date, title: 'Microservices: Architecture and Implementation', description: 'Understand microservices architecture and its benefits in building large-scale applications. Learn how to design, deploy, and manage microservices using Docker and Kubernetes for container orchestration.' },

    { id: 5, image: pic1, auther: "Abdifitah Mohamed Abdullahi ", data: date, title: 'Data Visualization Techniques with D3.js', description: 'Master data visualization techniques using D3.js. Explore interactive data visualization examples and learn how to create compelling charts and graphs for effective data presentation.' },

    { id: 6, image: pic3, auther: "Ikhlas Ali Mohamed ", data: date, title: 'Responsive Web Design Best Practices', description: 'Discover best practices for responsive web design. Learn how to create websites that adapt seamlessly to various screen sizes and devices, ensuring optimal user experience across desktop, tablet, and mobile.' },

    { id: 7, image: pic4, auther: "Sharmarke Nor Mohamed ", data: date, title: 'Cybersecurity in Web Applications', description: 'Learn essential cybersecurity practices for web applications. Explore common security threats, such as XSS and CSRF, and learn how to implement security measures to protect web applications from malicious attacks.' },

    { id: 8, image: pic5, auther: "Abdifitah Mohamed Abdullahi ", data: date, title: 'Artificial Intelligence in Web Development', description: 'Explore the integration of artificial intelligence in web development. Learn how AI technologies, such as machine learning and natural language processing, are transforming web applications and enhancing user interactions.' },

    { id: 9, image: pic6, auther: "Ikhlas Ali Mohamed ", data: date, title: 'Building a Blog with React', description: `This post walks you through building a simple blog application with React. You will learn how to set up routing, manage state, and create components to display blog posts and comments. Explore best practices for structuring a React application, handling authentication, and integrating backend services to create a fully functional blog platform.` },

    { id: 10, image: pic6, auther: "Sharmarke Nor Mohamed ", data: date, title: 'Sharmarke Nor Mohamed', description: `This post walks you through building a simple blog application with React. You will learn how to set up routing, manage state, and create components to display blog posts and comments. Explore best practices for structuring a React application, handling authentication, and integrating backend services to create a fully functional blog platform.` },

    { id: 11, image: pic6, auther: "Abdifitah Mohemed Abdullahi ", data: date, title: 'Abdifitah Mohemed Abdullahi', description: `This post walks you through building a simple blog application with React. You will learn how to set up routing, manage state, and create components to display blog posts and comments. Explore best practices for structuring a React application, handling authentication, and integrating backend services to create a fully functional blog platform.` },

];


export default initialPosts;