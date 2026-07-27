const bullseye = {
    title: "Bullseye",
    images: {
        cover: "assets/img/projects/bullseye/bullseye.jpeg"
    },
    shortDescription: "A 2D <strong>Java game</strong> developed using " +
                        "<strong>OOP, enums, factory pattern, randomization logic, and file I/O</strong> for persistent high scores. <br>" +
                        "The player can shoot various types of arrows at targets. The objective is to score points by destroying those targets.",
    longDescription: {
        intro: "Developed collaboratively in a team of four, Bullseye is a 2D arcade-style game built in Java using the SimpleGraphics library. " +
            "The player controls an archer, shooting arrows at a moving target while avoiding obstacles and maximizing score.",
        features: [
            "Player movement and shooting mechanics controlled by keyboard inputs",
            "Randomized arrow types with different speed and score variations",
            "Dynamic target and obstacle spawning",
            "Real-time score tracking and game-over logic",
            "Object-oriented architecture using inheritance, composition, and enums"
        ],
        architecture: "The game follows a clean object-oriented design, making extensive use of inheritance and composition to model game entities. Enums are used for configuration and state management, and factory patterns are applied to handle object creation and variation logic.",
        collaboration: "This project strengthened my teamwork, version control, and problem-solving skills. We collaborated using Git and GitHub, dividing responsibilities across gameplay logic, graphics, and scoring systems, closely simulating a real-world software development workflow."
    },
    technologies: {
        backend: [
            "Java",
            "Object-Oriented Programming (OOP)",
            "Design Patterns (Factory, Enum-based configuration)"
        ],
        frontend: [
            "SimpleGraphics Library",
            "Keyboard Input Handling",
            "2D Rendering"
        ],
        tools: [
            "Git & GitHub",
            "IntelliJ IDEA"
        ]
    },
    tags: ["Java", "OOP", "Factory Pattern", "2D Game", "File I/O"],
    projectLink: "project.html?project=bullseye",
    github: "https://github.com/Kvilarinho/Bullseye"
};


const teamSafetyMonitor = {
    title: "Team Safety Monitor",
    images: {
        cover: "assets/img/projects/team-safety-monitor/team_safety_monitor_login.jpeg",
        previewImage: "assets/img/projects/team-safety-monitor/team_safety_monitor_dashboard.jpeg"
    },
    shortDescription: "Team Safety Monitor is a full-stack web application designed " +
                        "to monitor team workload and identify burnout risk through metrics and alerts. " +
                        "Built with <strong>Java, Spring Boot, JPA/Hibernate, PostgreSQL, HTML, CSS, and JavaScript</strong>.",
    longDescription: {
        intro: "Developed collaboratively in a team of five as a final bootcamp project, Team Safety Monitor is a full-stack web application " +
            "designed to analyze team workload and detect early signs of overwork and burnout. The system provides structured visibility " +
            "into work patterns through role-based access, safety thresholds, and contextual risk alerts, supporting healthier and more sustainable team practices.",
        features: [
            "Role-based access control with clearly defined Admin and Member responsibilities",
            "Members register daily work entries including working hours, breaks, focus blocks, and consecutive workdays",
            "Admins configure safety thresholds and monitor aggregated team and organizational workload metrics",
            "Evaluation of workload metrics classified as safe, warning, or exceeded",
            "Translation of workload metrics into contextual risk alerts (preventive warning, warning, high risk, critical)",
            "Dashboards presenting workload indicators and alert severity according to user role",
            "Backend validation rules to ensure data consistency and prevent invalid or unsafe states",
            "Privacy-by-design approach with minimal data collection and controlled data exposure"
        ],
        architecture: "The backend is developed in Java using Spring Boot and follows a layered architecture with clear separation between controllers, services, persistence (DAOs), domain models, DTOs, and converters. Workload evaluation and alert generation are handled as separate concerns within the service layer, keeping core calculations independent from risk interpretation. RESTful APIs expose system functionality while enforcing validation, defensive handling of edge cases, and controlled data exposure through DTO and converter patterns.",
        collaboration: "I assumed a backend-focused role, contributing primarily to backend architecture, business logic, workload evaluation rules, alert generation, API design, and data modeling. I also actively supported frontend integration by aligning data structures and flows, ensuring consistent representation of metrics and alerts across the application. My background in healthcare and safety-critical environments strongly influenced the emphasis on data accuracy, validation, role separation, and risk-aware system design."
    },
    technologies: {
        backend: [
            "Java",
            "Spring Boot",
            "RESTful APIs",
            "JPA / Hibernate",
            "Layered Architecture",
            "DTO & Converter Patterns",
            "Role-Based Access Control",
            "Privacy by Design",
            "JUnit",
            "Mockito"
        ],
        frontend: [
            "HTML",
            "CSS",
            "Vanilla JavaScript"
        ],
        tools: [
            "Git & GitHub",
            "Maven",
            "IntelliJ IDEA",
            "VS Code"
        ]
    },
    tags: ["Java", "Spring Boot", "JPA/Hibernate", "REST API", "PostgreSQL", "JavaScript", "CSS3", "HTML5"],
    projectLink: "project.html?project=teamSafetyMonitor",
    github: "https://github.com/Kvilarinho/team_safety_monitor"
};


const vanilla = {
    title: "Vanilla HTTP Web Server",
    images: {
        cover: "assets/img/projects/vanilla-webserver/vanilla-webserver.jpeg"
    },
    shortDescription: "Simple multithreaded HTTP server built in <strong>Java</strong> — serves static files with <strong>concurrency, Stream API, and clean OOP structure</strong>.",
    longDescription: {
        intro: "I built a simple HTTP Web Server in Java from scratch to gain a deep understanding of low-level client-server communication and how the HTTP protocol works internally. " +
            "The server processes incoming requests directly using Java sockets, without relying on external frameworks.",
        features: [
            "Handles multiple client connections concurrently using ExecutorService",
            "Manual parsing and processing of HTTP GET requests using Java Sockets",
            "Serves static files (HTML, CSS, and JavaScript) directly from a local directory",
            "Supports JavaScript ES modules with correct MIME types",
            "Resolves Content-Type automatically using a dedicated enum",
            "Ensures proper stream handling and resource management per request",
            "Minimal and clean architecture focused on core networking concepts and readability"
        ],
        architecture: "The server is built around Java’s low-level networking APIs, handling raw TCP connections and parsing HTTP requests manually. Input and output streams are carefully managed to read client requests and construct valid HTTP responses, reinforcing a strong understanding of request/response lifecycles and protocol structure.",
        learningOutcome: "This project provided a solid foundation in how web servers operate behind the scenes — from socket management and request parsing to response generation. It served as a stepping stone toward more advanced Java web technologies such as Servlets, Spring Boot, and the MVC architectural pattern."
    },
    technologies: {
        backend: [
            "Java 17",
            "TCP/IP & HTTP Protocols",
            "Java Sockets API",
            "Concurrency with ExecutorService",
            "I/O Streams",
            "Stream API"
        ],
        frontend: [
            "HTML",
            "CSS",
            "JavaScript (ES Modules)"
        ],
        tools: [
            "Maven",
            "Logging with java.util.logging"
        ]
    },
    tags: ["Java 17", "HTTP", "Sockets", "Concurrency", "Stream API"],
    projectLink: "project.html?project=vanilla",
    github: "https://github.com/Kvilarinho/Vanilla-WebServer"
};


const concurrentTcp = {
    title: "Concurrent TCP Chat",
    images: {
        cover: "assets/img/projects/concurrent-tcp-chatserver/concurrent-tcp-chatserver.jpeg"
    },
    shortDescription: "A multithreaded <strong>TCP chat server and client</strong> with commands, private messages, admin mode, and clean architecture. " +
                        "<br>Includes tests <strong>(JUnit + Mockito) and full documentation.</strong> ",
    longDescription: {
        intro: "Concurrent TCP Chat is a multi-client chat system built entirely in Java, designed to explore low-level networking, " +
            "concurrency, and clean architecture principles. The system consists of a TCP server capable of handling multiple simultaneous " +
            "clients and a terminal-based client that supports real-time messaging and command-based interaction.",
        features: [
            "Concurrent TCP Chat Server supporting multiple clients simultaneously",
            "Thread pool-based concurrency model for efficient client handling",
            "Terminal-based client with real-time message input and output",
            "Private messaging between users via /whisper command",
            "Dynamic username management using /name command",
            "Admin authentication with restricted commands and secure server shutdown",
            "Command handling implemented using the Strategy Pattern",
            "Graceful client connection, disconnection, and error handling"
        ],
        architecture: "The server architecture is built around Java sockets and a thread pool executor, ensuring controlled concurrency and efficient resource usage. Client commands are handled using the Command Strategy Pattern, allowing for clean separation of concerns and easy extensibility. Each command is encapsulated as an independent strategy, improving maintainability and readability of the codebase.",
        testingAndDocs: "The project includes unit tests written with JUnit 4 and Mockito, focusing on command logic and core server behavior. Comprehensive Javadoc and detailed documentation were added to ensure clarity, maintainability, and ease of onboarding for future contributors.",
        learningOutcome: "This project significantly strengthened my understanding of socket programming, concurrent systems, thread management, and clean code practices. It also reinforced the importance of architectural decisions when building scalable, maintainable networked applications."
    },
    technologies: {
        backend: [
            "Java",
            "TCP/IP",
            "Java Sockets API",
            "Concurrency & Thread Pools",
            "Command Strategy Pattern"
        ],
        frontend: [
            "Terminal-based Client (CLI)"
        ],
        tools: [
            "JUnit 4",
            "Mockito",
            "Javadoc"
        ]
    },
    tags: ["Java", "TCP/IP", "Concurrency", "Strategy Pattern", "JUnit"],
    projectLink: "project.html?project=concurrentTcp",
    github: "https://github.com/Kvilarinho/Concurrent-TCP-ChatServer"
};


const taskManager = {
    title: "Task Manager (CLI)",
    images: {
        cover: "assets/img/projects/task-manager/task-manager.jpeg"
    },
    shortDescription: "Console-based task manager built with <strong>OOP and Strategy Pattern for command handling " +
        "</strong>, includes file-based persistence.",
    longDescription: {
        intro: "Task Manager is a command-line application developed entirely in Java, designed to manage daily tasks " +
            "directly from the terminal with automatic file-based persistence. The application focuses on clean object-oriented " +
            "design and practical backend concepts rather than graphical interfaces.",
        features: [
            "Add, list, complete, and delete tasks via terminal commands",
            "Persistent storage using text files (tasks.dat) to retain data between sessions",
            "Automatic save mechanism to ensure task data is never lost",
            "Command-based architecture implemented using the Strategy Pattern (Map<Command, Function>)",
            "Robust error handling for invalid inputs, missing tasks, and edge cases"
        ],
        architecture: "The application follows core object-oriented design principles such as modularity, separation of concerns, and single responsibility. Each command is encapsulated as an independent strategy, enabling clean command execution flow and easy extensibility. Collections and Java Streams are used to efficiently manage and process task data.",
        learningOutcome: "This project strengthened my understanding of file I/O, class design, and architectural patterns in Java. It also served as a foundation for more advanced backend development, including MVC-based applications and database-backed systems."
    },
    technologies: {
        backend: [
            "Java",
            "Object-Oriented Programming (Encapsulation, Inheritance, Composition)",
            "Collections (Map, List)",
            "Streams API",
            "File I/O",
            "Command Strategy Pattern"
        ],
        frontend: [
            "Command-Line Interface (CLI)"
        ],
        tools: [
            "Maven"
        ]
    },
    tags: ["Java", "OOP", "Strategy Pattern", "File I/O"],
    projectLink: "project.html?project=taskManager",
    github: "https://github.com/Kvilarinho/Task-Manager"
};


const portfolioWebsite = {
    title: "Personal Portfolio Website",
    images: {
        cover: "assets/img/projects/portfolio-website/portfolio-website.png"
    },
    shortDescription: "A personal portfolio built with <strong>component-based architecture using vanilla JavaScript</strong>, " +
                        "following <strong>MVC pattern and ES6 modules</strong>. Evolved from HTML structure with dynamic content to fully component-driven architecture.",
    longDescription: {
        intro: "This personal portfolio website was designed and developed from scratch to showcase my projects, skills, and technical journey. " +
            "The project evolved from an HTML-structured approach with dynamic content rendering (v1.0-html-baseline) to a fully component-based " +
            "architecture where all DOM elements are created programmatically, demonstrating my commitment to code quality, maintainability, and continuous improvement.",
        features: [
            "Component-based architecture with clear separation of concerns (Controller → View → Components)",
            "MVC-inspired structure: Controllers initialize pages, Views assemble components, Components create DOM elements",
            "All HTML elements created programmatically via JavaScript (no predefined HTML structure)",
            "Reusable components organized by page sections (header, main, footer)",
            "ES6 modules with proper import/export structure",
            "Centralized project data with dynamic rendering across all pages",
            "Responsive layout optimized for desktop and mobile devices",
            "Architectural evolution from HTML templates to component-driven design"
        ],
        architecture: "The website follows a component-based architecture similar to modern frameworks, but built entirely with vanilla JavaScript. " +
            "Each page has a dedicated controller that initializes the view, which in turn assembles individual components. Components are self-contained " +
            "functions that create and return DOM elements, promoting reusability and testability. The folder structure mirrors this separation: " +
            "controllers/, views/, and components/ organized by page (home-page/, project-page/). This architecture makes it easy to add features, " +
            "maintain code, and scale the project without framework dependencies.",
        learningOutcome: "This project provided deep hands-on experience with frontend architecture patterns, DOM manipulation, modular JavaScript, " +
            "and the importance of separation of concerns. Evolving from HTML-based structure to programmatic component creation reinforced my understanding " +
            "of scalable code architecture, component design patterns, and architectural decision-making. It served as a practical foundation for understanding " +
            "how modern frontend frameworks work internally."
    },
    technologies: {
        frontend: [
            "JavaScript (ES6+ Modules)",
            "Component-Based Architecture",
            "MVC Pattern",
            "DOM Manipulation",
            "HTML5",
            "CSS3",
            "Responsive Design"
        ],
        tools: [
            "Git & GitHub (version control & branching)",
            "GitHub Pages",
            "VS Code"
        ]
    },
    tags: ["JavaScript", "ES6 Modules", "MVC", "CSS3", "DOM"],
    projectLink: "project.html?project=portfolioWebsite",
    github: "https://github.com/Kvilarinho/kvilarinho.github.io"
};



const financeTracker = {
    title: "Finance Tracker (CLI)",
    images: {
        cover: "assets/img/projects/finance-tracker/Finance Tracker.jpg"
    },
    shortDescription: "A CLI application to track personal income and expenses, built with <strong>.NET 9 and C#</strong>. " +
                        "Follows a <strong>layered architecture with Repository and Service patterns</strong>, file-based persistence, and unit tests.",
    longDescription: {
        intro: "Finance Tracker is a command-line application developed in C# with .NET 9, designed to register, list, and remove personal " +
            "income and expense transactions directly from the terminal. The project explores clean architecture principles in C# and .NET, " +
            "including interface-based design, separation of concerns, and immutable domain models.",
        features: [
            "Add income or expense transactions with category, amount, description, and date",
            "List all transactions with total balance summary",
            "Remove transactions by ID",
            "Automatic JSON persistence on every mutation",
            "Transaction model implemented as a C# record — immutable by design",
            "Unit tests covering core business logic"
        ],
        architecture: "The application follows a layered architecture with clear separation between domain models, interfaces, repositories, and services. " +
            "ITransactionRepository abstracts data access, ITransactionService abstracts business logic, and FileStorageService handles persistence as a " +
            "dedicated infrastructure concern. Manual dependency wiring in Program.cs keeps the setup explicit and framework-free.",
        designDecisions: "Transactions are modelled as C# records, making them immutable by design — a transaction is never edited, only removed. " +
            "Persistence is triggered on every mutation rather than tracking dirty state, which is a deliberate tradeoff that simplifies the implementation " +
            "at the cost of slightly more disk writes — acceptable for a CLI app with small datasets. Invalid remove operations throw KeyNotFoundException " +
            "to fail loudly instead of silently."
    },
    technologies: {
        backend: [
            "C#",
            ".NET 9",
            "Record Types (Immutable Domain Model)",
            "Repository Pattern",
            "Service Layer",
            "Interface-Based Design",
            "JSON File Storage",
            "xUnit"
        ],
        frontend: [
            "Command-Line Interface (CLI)"
        ],
        tools: [
            "dotnet CLI",
            "Git & GitHub"
        ]
    },
    tags: ["C#", ".NET 9", "Repository Pattern", "xUnit", "Moq", "JSON"],
    projectLink: "project.html?project=financeTracker",
    github: "https://github.com/Kvilarinho/FinanceTracker"
};

const libraryBookTracker = {
    title: "Library Book Tracker (CLI)",
    images: {
        cover: "assets/img/projects/library-book-tracker/Library Book Tracker.jpg"
    },
    shortDescription: "A CLI application to manage a library's books, clients, and loans, built with <strong>C# and .NET 9</strong>. " +
                        "Uses <strong>Strategy pattern for commands</strong>, a dictionary-based dispatcher, and a layered architecture with JSON persistence.",
    longDescription: {
        intro: "Library Book Tracker is a command-line application developed in C# and .NET to manage books, clients, and loan operations " +
            "for a small library. The project focuses on clean architecture, design patterns, and real-world domain modelling — " +
            "including a complete loan history audit trail and full separation of concerns across repositories, services, and CLI commands.",
        features: [
            "Add, list, and remove books",
            "Add, list, and remove clients",
            "Loan books to clients and return them",
            "View full loan history per client",
            "Automatic JSON persistence on every add, remove, loan, or return operation",
            "Dictionary-based command dispatcher in MainMenu for clean command routing"
        ],
        architecture: "The application is organized into Models, Interfaces, Repositories, Services, and a CLI layer. " +
            "Commands implement the Strategy pattern via ICommand, and MainMenu acts as a dictionary-based dispatcher mapping menu options to command strategies. " +
            "Dependencies are wired manually in Program.cs, keeping the setup explicit without relying on a DI container. " +
            "BaseEntity provides a shared Id contract for all domain models.",
        designDecisions: "Data is persisted to JSON after every mutation to guarantee reliability without a manual save step — the I/O cost is negligible at this scale. " +
            "Loan records are never deleted: returning a book sets the ReturnDate but keeps the record, preserving a complete audit trail. Active loans are identified by ReturnDate == null. " +
            "Loan is modelled as a separate entity linking Book and Client by Id, reducing coupling between BookService and ClientService and making it straightforward to extend the loan model independently."
    },
    technologies: {
        backend: [
            "C#",
            ".NET 9",
            "Strategy Pattern (ICommand)",
            "Repository Pattern",
            "Service Layer",
            "Interface-Based Design",
            "JSON File Storage",
            "Manual Dependency Wiring"
        ],
        frontend: [
            "Command-Line Interface (CLI)"
        ],
        tools: [
            "dotnet CLI",
            "Git & GitHub"
        ]
    },
    tags: ["C#", ".NET 9", "Strategy Pattern", "Repository Pattern", "JSON"],
    projectLink: "project.html?project=libraryBookTracker",
    github: "https://github.com/Kvilarinho/LibraryBookTracker"
};

export const projects = {
    bullseye,
    vanilla,
    concurrentTcp,
    taskManager,
    portfolioWebsite,
    teamSafetyMonitor,
    financeTracker,
    libraryBookTracker
};

