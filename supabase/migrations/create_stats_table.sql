-- Create stats table
CREATE TABLE IF NOT EXISTS stats (
    id BIGSERIAL PRIMARY KEY,
    icon VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert stats data
INSERT INTO
    stats (
        icon,
        title,
        subtitle,
        content
    )
VALUES (
        'BrainCircuit',
        'Core Modernization',
        'Monolith to Decoupled',
        'Untangling the legacy mess. I turn rigid monoliths into decoupled, AI-ready architectures—swapping technical debt for systems that actually scale with human intent. No more patchwork fixes. Just clean, maintainable code that evolves with your business needs.'
    ),
    (
        'Zap',
        'Design Systems',
        'Figma to Code Pipeline',
        'Bridging the gap between design and development. I create seamless Figma-to-code pipelines that turn static designs into dynamic, production-ready components. This means faster iterations, consistent UI, and a smoother handoff between designers and developers—no more lost pixels or miscommunication.'
    ),
    (
        'Bot',
        'Deployment Governance',
        'CI/CD & DORA Optimization',
        'Streamlining your deployment pipeline for maximum efficiency. I implement CI/CD best practices and optimize DORA metrics to ensure your releases are fast, reliable, and low-risk. This means less downtime, quicker feedback loops, and a smoother path from code to production.'
    );