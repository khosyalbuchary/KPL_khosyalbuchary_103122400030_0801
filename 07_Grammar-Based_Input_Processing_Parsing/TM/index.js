/**
 * @param {string} text 
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };

    const lines = text.split('\n');
    let currentAgents = [];

    lines.forEach(line => {
        const cleanLine = line.split('#')[0].trim();
        if (!cleanLine) return;

        const parts = cleanLine.split(':');
        if (parts.length < 2) return;

        const key = parts[0].trim().toLowerCase();
        const value = parts.slice(1).join(':').trim();

        if (key === 'user-agent') {
            const agentName = value.toLowerCase();
            if (currentAgents.length > 0 && (result.agents[currentAgents[0]]?.Allow.length > 0 || result.agents[currentAgents[0]]?.Disallow.length > 0)) {
                currentAgents = [];
            }

            if (!result.agents[agentName]) {
                result.agents[agentName] = { Allow: [], Disallow: [] };
            }
            currentAgents.push(agentName);
        } else if (key === 'allow' || key === 'disallow') {
            currentAgents.forEach(agent => {
                const directive = key.charAt(0).toUpperCase() + key.slice(1);
                if (value) {
                    result.agents[agent][directive].push(value);
                }
            });
        } else if (key === 'sitemap') {
            result.Sitemap.push(value);
        } else if (key === 'host') {
            result.Host = value;
        }
    });

    return result;
}

module.exports = parseRobots;