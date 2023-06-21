const fs = require('fs');
const deepMerge = require('../utils/deep-merge');
const configFile = 'cx.config.json';

let config = {
    watchDirectory: './',
    colors: {
        info: '#88bef5',
        warning: '#feb062',
        danger: '#ff304f',
        success: '#2cb978'
    },
    breakpoints: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px" 
    }
}
try {
    const configData = fs.readFileSync(configFile, 'utf8');
    config = Object.assign({}, config)
    deepMerge(config, JSON.parse(configData));
} catch(error) {
    console.error('Warning: Error parsing cx.config.json', error.message);
}

module.exports = config;
