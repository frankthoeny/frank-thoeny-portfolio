-- Create tech_stack table
CREATE TABLE IF NOT EXISTS tech_stack (
    id BIGSERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL UNIQUE,
    skills TEXT[] NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert tech stack data
INSERT INTO
    tech_stack (category, skills)
VALUES
    (
        'Systems Engineering',
        ARRAY[
            'Cloud Architecture (GCP/AWS/Azure)',
            'Legacy Modernization',
            'Event-Driven Microservices',
            'Headless CMS Governance',
            'Infrastructure as Code'
        ]
    ),
    (
        'Frontend',
        ARRAY[
            'Vue 3 (Composition API)',
            'React (Next.js/Redux)',
            'Design Systems (Figma Bridge)',
            'Tailwind CSS Architecture',
            'Performance Optimization'
        ]
    ),
    (
        'Backend',
        ARRAY[
            'Python (Django)',
            'Java (Spring Boot)',
            'Node.js (Express/Nest)',
            'PHP (Symfony/Laravel)',
            'API Design (GraphQL/gRPC)',
            'Docker / Kubernetes'
        ]
    ),
    (
        'Leadership',
        ARRAY[
            'Team Mentorship',
            'Strategic Technical Roadmap',
            'DORA Metrics Monitoring',
            'Vendor & Stakeholder Mgmt',
            'Agile / Scrum Excellence'
        ]
    );