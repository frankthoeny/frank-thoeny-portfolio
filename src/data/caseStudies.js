const caseStudies = [
    {
        id: "monolithic-migration",
        title: "Enterprise Monolithic to Microservices Migration & Modern UI Implementation",
        org: "Fortune 500 Enterprise Client",
        challenge: "Legacy monolithic architecture unable to scale with growing user base, causing frequent downtime during peak traffic and increasing maintenance costs across interconnected systems. The tightly-coupled codebase resulted in 30+ minute deployment times and single points of failure that impacted all users simultaneously.",
        solution: "Planned and executed end-to-end migration from monolithic to microservices architecture while implementing pixel-perfect, responsive UI components. Designed API gateway patterns using Kong, established event-driven communication with Apache Kafka, and created reusable component libraries ensuring consistency across the new distributed system. Implemented container orchestration with Kubernetes and blue-green deployment strategies for zero-downtime releases.",
        tech: ["Modernization", "React", "TypeScript", "Node.js", "AWS", "GraphQL", "Kubernetes", "Kafka", "Kong API Gateway", "Docker"],
        image_path: "./case-studies/monolithic-migration.png",
        result: "400% performance improvement, 60% reduction in infrastructure costs, deployment time reduced from 30+ minutes to under 3 minutes, 99.99% uptime achieved.",
    },
    {
        id: "nfl-stats",
        title: "NFL Real-Time Global Stats Engine & Live Scoreboard",
        org: "NFL.com (National Football League)",
        challenge: "Sub-second sync for millions of users during live games, requiring real-time data ingestion, processing, and distribution across global CDN edges without latency spikes or data inconsistencies. The existing system couldn't handle the 10x traffic spike during primetime games, resulting in timeouts and stale data displays during critical moments.",
        solution: "Architected the NFL.com real-time statistical engine and global scoreboard, ensuring sub-second data ingestion latency during peak game-day traffic. Implemented Redis caching layers for hot data, WebSocket connections for live updates pushed to all connected clients, and a distributed queue system using Apache Kafka handling 50K+ events per second with automatic failover. Deployed edge computing nodes across 15 global regions via Cloudflare Workers.",
        tech: ["Distributed Systems", "JavaScript", "Java", "Redis", "WebSocket", "Kafka", "Cloudflare Workers", "AWS Lambda", "DynamoDB"],
        image_path: "./case-studies/nfl-stats.png",
        result: "10M+ concurrent gameday hits, sub-100ms latency for 95% of users, zero timeout incidents during peak games, 40% reduction in infrastructure costs through edge computing.",
    },
    {
        id: "gov-cloud",
        title: "City of Pasadena: Monolithic to Multi-Site WordPress Migration with Azure Cloud",
        org: "City of Pasadena",
        challenge: "Migrate monolithic system to a multi-site WordPress site with UI development, SQL database, and Azure Cloud infrastructure while maintaining Section 508/ADA compliance and zero downtime during transition. The legacy system had no automated backups, security vulnerabilities, and required manual updates across 12 different department websites.",
        solution: "Standardized deployment workflows using Azure DevOps pipelines and deep security audits. Built custom WordPress theme with reusable UI components following WCAG 2.1 AA standards, configured Azure SQL elastic pools for multi-tenant isolation with dedicated resources per department, and implemented CI/CD automation reducing manual deployment steps by 80%. Added Azure Front Door for global load balancing and Azure Defender for continuous security monitoring.",
        tech: ["Azure Cloud", "WordPress", "SQL Database", "UI Development", "Compliance", "Security", "Azure DevOps", "Azure SQL Elastic Pools", "Azure Front Door", "Azure Defender", "WCAG 2.1"],
        image_path: "./case-studies/gov-cloud.png",
        result: "99.9% compliance score, 50% reduction in deployment time, seamless multi-site management, zero security vulnerabilities detected, 12 department sites consolidated into unified platform.",
    },
];

export default caseStudies;
