-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    period VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    bullets TEXT[] NOT NULL,
    icon VARCHAR(100) NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert experience data
INSERT INTO
    experience (title, company, period, location, description, bullets, icon, featured)
VALUES
    (
        'Principal Technical Consultant',
        'Strategic Advisory',
        '2020 – Present',
        'Los Angeles, CA',
        'Leading enterprise digital transformations. Specialized in architecting headless Drupal/WP integrations with modern JS frameworks and automating design-to-code pipelines for large-scale engineering teams.',
        ARRAY['Architectural Governance', 'Scale-Out Strategy', 'Lead Mentorship'],
        'Briefcase',
        FALSE
    ),
    (
        'Senior Lead Full Stack Developer',
        'Internet Brands',
        '2022 – 2024',
        'El Segundo, CA',
        'Architected a unified design system bridge between Figma and Vue.js. Managed the modernization of legacy monolithic sites into high-performance, decoupled applications serving millions of users.',
        ARRAY['Modernization Lead', 'Design System Ops', 'Vue/Drupal Decoupling'],
        'Building2',
        TRUE
    ),
    (
        'Principal Systems Architect (Contract)',
        'NFL.com',
        'Strategic Engagement',
        'Culver City, CA',
        'Critical infrastructure lead for game-day real-time stats ingestion. Optimized distributed systems to handle explosive traffic surges with sub-second data synchronization for global scoreboard updates.',
        ARRAY['High-Availability', 'Real-Time Ingestion', 'Sub-Second Latency'],
        'Trophy',
        TRUE
    ),
    (
        'Lead Systems Consultant',
        'City of Pasadena (NTT DATA)',
        '2015 – 2016',
        'Pasadena, CA',
        'Conducted security audits and technical overhauls for a complex multi-department digital ecosystem, focusing on Section 508 accessibility and high-level infrastructure security.',
        ARRAY['Security Governance', 'Compliance Audit', 'Multi-Site Management'],
        'Landmark',
        FALSE
    );