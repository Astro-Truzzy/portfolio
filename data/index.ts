export const navItems = [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
      ];
      
      export const gridItems = [
        {
          id: 1,
          title: "I prioritize client collaboration, fostering open communication ",
          description: "",
          className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
          imgClassName: "w-full h-full",
          titleClassName: "justify-end",
          img: "/b1.svg",
          spareImg: "",
        },
        {
          id: 2,
          title: "I'm very flexible with time zone communications",
          description: "",
          className: "lg:col-span-2 md:col-span-3 md:row-span-2",
          imgClassName: "",
          titleClassName: "justify-start",
          img: "",
          spareImg: "",
        },
        {
          id: 3,
          title: "My tech stack",
          description: "I constantly try to improve",
          className: "lg:col-span-2 md:col-span-3 md:row-span-2",
          imgClassName: "",
          titleClassName: "justify-center",
          img: "",
          spareImg: "",
        },
        {
          id: 4,
          title: "Tech enthusiast with a passion for development.",
          description: "",
          className: "lg:col-span-2 md:col-span-3 md:row-span-1",
          imgClassName: "",
          titleClassName: "justify-start",
          img: "/grid.svg",
          spareImg: "/b4.svg",
        },
      
        {
          id: 5,
          title: "Currently building a JS Animation library",
          description: "The Inside Scoop",
          className: "md:col-span-3 md:row-span-2",
          imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
          titleClassName: "justify-center md:justify-start lg:justify-center",
          img: "/b5.svg",
          spareImg: "/grid.svg",
        },
        {
          id: 6,
          title: "Do you want to start a project together?",
          description: "",
          className: "lg:col-span-2 md:col-span-3 md:row-span-1",
          imgClassName: "",
          titleClassName: "justify-center md:max-w-full max-w-60 text-center",
          img: "",
          spareImg: "",
        },
      ];
      
      export const projects = [
        {
          id: 1,
          title: "3D Solar System Planets to Explore",
          des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
          img: "/p1.svg",
          iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
          link: "https://github.com/adrianhajdin?tab=repositories",
        },
        {
          id: 2,
          title: "E-shop - A Modern interactive Website",
          des: "A modern, responsive eShop website featuring a clean design and user-friendly interface. Optimized for all devices, it offers smooth navigation, intuitive layouts, and an engaging shopping experience, making it easy for users to browse, explore, and purchase products effortlessly.",
          img: "/Eshop1.png",
          iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
          link: "https://e-shop-bchv.vercel.app/",
        },
        {
          id: 3,
          title: "Ridely - Logistics Company",
          des: "Riderly is a parcel pickup and delivery platform designed to streamline logistics for businesses and individuals. It offers real-time tracking, efficient route management, and a user-friendly interface, ensuring fast, reliable, and hassle-free deliveries. Built with a focus on performance, scalability, and seamless user experiences.",
          img: "/Ridely1.png",
          iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
          link: "https://Riderly.vercel.app",
        },
        {
          id: 4,
          title: "Esosa John's Foundation",
          des: "Esosa John's Foundation is a leading financial advisory institution dedicated to empowering individuals and businesses with expert financial guidance, wealth management strategies, and personalized solutions to achieve long-term financial stability and growth.",
          img: "/EJF1.png",
          iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
          link: "https://esosa-john-foundation.vercel.app/",
        },
      ];
      
      export const testimonials = [
        {
          quote:
            "Williams is a rare talent — combining frontend finesse with backend expertise. Their proactive approach and dedication ensured our app was both beautiful and robust.",
          name: "Jeremy Barth",
          title: "Chief Technology Officer at Brightside",
        },
        {
          quote:
            "It’s rare to find a developer as versatile and dedicated as Trust. Their strong technical skills, problem-solving mindset, and clear communication helped us meet tight deadlines without sacrificing quality",
          name: "Victor Okoronkwo",
          title: "Group Managing Director at Aiteo",
        },
        {
          quote:
            "Collaborating with Trust was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Trust's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
          name: "Esosa John",
          title: "Founder of Esosa John Foundation (EJF)",
        },
        {
          quote:
            "The collaboration with Mr Williams brought our project to new heights. Their comprehensive understanding of both client-side and server-side technologies ensured a robust and user-friendly application.",
          name: "Emmanuel Nnorom",
          title: "Group CEO at Heirs Holdings",
        },
      ];
      
      export const companies = [
        {
          id: 1,
          name: "cloudinary",
          img: "/cloud.svg",
          nameImg: "/cloudName.svg",
        },
        {
          id: 2,
          name: "appwrite",
          img: "/app.svg",
          nameImg: "/appName.svg",
        },
        {
          id: 3,
          name: "HOSTINGER",
          img: "/host.svg",
          nameImg: "/hostName.svg",
        },
        {
          id: 4,
          name: "stream",
          img: "/s.svg",
          nameImg: "/streamName.svg",
        },
        {
          id: 5,
          name: "docker.",
          img: "/dock.svg",
          nameImg: "/dockerName.svg",
        },
      ];
      
      export const workExperience = [
        {
          id: 1,
          title: "Frontend Engineer Intern",
          desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
          className: "md:col-span-2",
          thumbnail: "/exp1.svg",
        },
        {
          id: 2,
          title: "Frontend Dev - Sarutech",
          desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
          className: "md:col-span-2", // change to md:col-span-2
          thumbnail: "/exp2.svg",
        },
        {
          id: 3,
          title: "Freelance App Dev Project",
          desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
          className: "md:col-span-2", // change to md:col-span-2
          thumbnail: "/exp3.svg",
        },
        {
          id: 4,
          title: "Lead Frontend Developer",
          desc: "Developed and maintained user-facing features using modern frontend technologies.",
          className: "md:col-span-2",
          thumbnail: "/exp4.svg",
        },
      ];
      
      export const socialMedia = [
        {
          id: 1,
          img: "/git.svg",
        },
        {
          id: 2,
          img: "/twit.svg",
        },
        {
          id: 3,
          img: "/link.svg",
        },
        {
          id: 4,
          img:""
        }
      ];
