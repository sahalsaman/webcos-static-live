import React, { useState, useEffect } from 'react';
import bannerimg from '../../src/assets/images/web6.png';
import blog1 from '../../src/assets/posts/blog1.png';
import blog2 from '../../src/assets/posts/blog2.png';
import blog3 from '../../src/assets/posts/blog3.png';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const [blog, setBlog] = useState(null); // Initialize as null
  const { id } = useParams();

  const blogs = [
    {
      _id: 'wb01',
      title: "Building User-Friendly Applications: The Importance of UI/UX Design in Technology",
      image: blog1,
      summary: "This blog explores the critical role that UI/UX design plays in the development of web and mobile applications. It emphasizes how a user-friendly interface and seamless experience can significantly impact user engagement, retention, and overall satisfaction.",
      content: "In today’s competitive digital landscape, the success of any web or mobile application largely depends on how well it is designed for its users. This is where UI (User Interface) and UX (User Experience) design come into play, acting as critical pillars in the development process. UI design focuses on the visual aspects of the app, such as layout, colors, typography, and overall aesthetic appeal. It's the first thing users notice when interacting with an application, and a clean, visually attractive design can make a lasting first impression. UX design, on the other hand, is all about the user’s journey and how intuitive the application feels. It ensures that users can navigate the app seamlessly, accomplish tasks without frustration, and ultimately have a pleasant and efficient experience. When the user interface and user experience are combined effectively, they not only improve user satisfaction but also enhance engagement and retention. A well-designed app leads to higher conversion rates, more time spent on the app, and better overall feedback from users. On the contrary, a poorly designed app, no matter how powerful its features, can result in users abandoning it out of frustration. Therefore, understanding the key principles of UI/UX design and continuously optimizing them based on user feedback is essential for any business looking to thrive in the digital age.\n UI and UX design go beyond just aesthetics—they are essential in guiding users through complex digital products. For instance, a well-crafted UI makes sure that the interface is not just visually appealing but also accessible, meaning it accommodates users with different abilities, whether it's through color contrasts, readable fonts, or clear action buttons. UX, meanwhile, emphasizes the functionality of the design, ensuring that users can achieve their goals without encountering bottlenecks or unnecessary steps. A key part of UX is empathy; designers must walk in the shoes of users, identifying potential pain points and designing solutions that address those. For example, simplifying navigation, minimizing clicks to complete actions, or integrating intuitive gestures for mobile applications can drastically improve the user experience. Companies that prioritize UI/UX design often see reduced churn rates and increased user loyalty because users are more likely to return to an application that is easy to use and visually engaging. Thus, investing in good UI/UX design is not just about making an app look good—it's about building relationships with users and creating products that serve them effectively."
    },
    {
      _id: 'wb02',
      title: "Choosing the Right Framework for Your Next Project",
      image: blog2,
      summary: "This blog compares popular frameworks for web and mobile development, helping developers and business owners choose the right one based on their project needs. The blog will cover the unique features, strengths, and ideal use cases for each framework.",
      content: "Choosing the right framework for a development project is one of the most critical decisions developers and business owners have to make. Each framework comes with its own set of features, strengths, and trade-offs, and understanding which one aligns with your project's requirements can save time, effort, and resources in the long run. For instance, React has become one of the most popular frameworks for building dynamic and responsive web applications. It offers a component-based architecture that allows developers to reuse code, making the development process more efficient and scalable. Its large community and ecosystem of third-party libraries also make it an excellent choice for projects that require flexibility and long-term maintainability. However, if your project requires strict coding conventions and a more opinionated approach, Angular might be the better choice. Angular, maintained by Google, is a full-fledged framework that provides everything developers need right out of the box—from data binding to state management. It’s ideal for large, complex applications where consistency and structure are key.\n When deciding which framework to use, several factors need to be considered, including the project's scope, the team's familiarity with the technology, and the long-term maintenance of the application. For mobile applications, Flutter has gained significant traction due to its ability to create natively compiled applications for both iOS and Android using a single codebase. This not only saves development time but also ensures consistent performance across platforms. Similarly, when building backend systems, developers might opt for frameworks like Django for Python or Express.js for Node.js, each offering different advantages depending on the application’s needs. Django, for example, is known for its 'batteries-included' approach, providing built-in features like authentication, ORM, and admin panels, which can significantly speed up development. Express.js, on the other hand, is minimalistic and flexible, allowing developers to structure the application according to their own preferences. The choice of framework also impacts scalability and performance—applications built with frameworks like Vue.js or Next.js can provide lightning-fast load times and optimal SEO, making them ideal for content-heavy platforms or e-commerce sites that require quick interactions and real-time updates. \n Choosing the wrong framework can lead to technical debt, slow development, and even project failure, especially as the project grows in size and complexity. Therefore, it is important to evaluate not just the features and capabilities of each framework but also its community support, ecosystem of tools, and compatibility with other technologies you plan to integrate into your application. In essence, selecting the right framework is about aligning the technology with your specific business goals, technical requirements, and long-term vision for the project."
    },
    {
      _id: 'wb03',
      title: "Harnessing the Power of Cloud Services for Scalable Web and Mobile Applications",
      image: blog3,
      summary: "This blog discusses the benefits of using cloud services to develop scalable and secure web and mobile applications. It highlights popular cloud platforms and their advantages, helping businesses make informed decisions on cloud adoption.",
      content: "The rise of cloud computing has revolutionized the way web and mobile applications are developed, deployed, and maintained. Cloud services offer businesses and developers the ability to scale their applications dynamically, handle large amounts of data, and ensure high availability without the need for costly and complex on-premise infrastructure. For companies looking to build scalable web and mobile applications, leveraging cloud platforms like Amazon Web Services (AWS), Google Cloud, or Microsoft Azure can provide immense benefits. These platforms offer a wide range of services, from basic data storage and computing power to advanced services like machine learning, artificial intelligence, and serverless architectures. With cloud services, applications can be deployed in multiple regions around the world, ensuring low-latency access for users regardless of their location. This level of scalability is crucial for businesses that anticipate growth or need to handle fluctuating traffic patterns, such as during product launches or marketing campaigns.\n In addition to scalability, cloud services offer a high level of flexibility. Businesses can scale resources up or down as needed, paying only for what they use, which makes cloud infrastructure a cost-effective solution for startups and enterprises alike. This flexibility is particularly valuable for applications that experience seasonal traffic spikes, such as e-commerce platforms during holiday sales. Furthermore, cloud platforms provide robust security features, including encryption, firewalls, and automatic backups, ensuring that sensitive data remains protected. Disaster recovery and business continuity are also simplified, as cloud providers offer automated tools to back up and restore data in the event of a failure. This level of security and reliability is difficult to achieve with traditional on-premise systems, where businesses would need to invest in expensive hardware, network configurations, and maintenance teams.\n Another key advantage of cloud services is the availability of serverless architectures, where developers can focus on writing code without worrying about the underlying infrastructure. Services like AWS Lambda allow developers to run code in response to events, eliminating the need for managing servers. This not only speeds up the development process but also reduces the operational burden of maintaining infrastructure. Additionally, cloud platforms offer integrated tools for DevOps, CI/CD pipelines, and monitoring, enabling businesses to adopt agile methodologies and continuously deploy new features and updates. For web and mobile applications, this translates to faster time-to-market, improved performance, and the ability to iterate based on user feedback. In summary, cloud services empower businesses to build scalable, secure, and high-performing applications, all while reducing the complexity and cost traditionally associated with infrastructure management."
    }
  ];

  useEffect(() => {
    // Find the blog by its _id and set the blog state
    const selectedBlog = blogs.find((item) => item._id === id);
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [id]); // Dependency on id

  if (!blog) {
    return <p>Loading...</p>; // Render a loading state while blog is being set
  }

  return (
    <div>
      <img src={bannerimg} className="w-full" alt="Banner" />
      <div className="md:container mx-auto px-6 py-16">
        <div className="overflow-x-auto md:mt-10">
          <img src={blog.image} alt={blog.title} />
          <h2 className="mt-10 text-2xl md:text-5xl font-semibold text-black dark:text-black">
            {blog.title}
          </h2>
          <div className='flex flex-col gap-5'>
            <p className="mt-10 text-gray-600 dark:text-gray-300 bg-slate-200 p-6 text-xl leading-10 ">
              {blog.summary}
            </p>
            <p className="mt-10 text-gray-600 dark:text-gray-300 text-xl leading-10">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
