-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    org VARCHAR(255) NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    result TEXT NOT NULL,
    tech TEXT[] NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert case studies data
INSERT INTO
    case_studies (id, title, org, challenge, solution, tech, result)
VALUES
    (
        'figma-vue',
        'The Figma-to-Vue Bridge',
        'Internet Brands',
        'Style drift across 100+ site portfolio.',
        'Automated design token extraction from Figma to Vue 3/SCSS.',
        ARRAY['Modernization', 'Figma', 'API', 'Vue 3', 'Vuex/Pinia', 'Node.js'],
        '60% reduction in UI dev friction.'
    ),
    (
        'nfl-stats',
        'Global Stats Engine',
        'NFL.com',
        'Sub-second sync for millions of users.',
        'Architected the NFL.com real-time statistical engine and global scoreboard, ensuring sub-second data ingestion latency during peak game-day traffic.',
        ARRAY['Distributed Systems', 'JavaScript', 'Java'],
        '10M+ concurrent gameday hits.'
    ),
    (
        'gov-cloud',
        'Local Gov Cloud Infrastructure',
        'City of Pasadena',
        'Strict Section 508/ADA security protocols.',
        'Standardized deployment workflows and deep security audits.',
        ARRAY['Azure Cloud', 'Modernization', 'Compliance', 'Security'],
        '99.9% compliance score achieved.'
    );