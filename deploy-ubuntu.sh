#!/bin/bash

# Smart Curtain Ubuntu Server Deployment Script

echo "🚀 Deploying Smart Curtain to Ubuntu Server..."

# Install dependencies
npm install

# Build for production
npm run build

# Install PM2 for process management (if not installed)
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
fi

# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'smart-curtain',
    script: 'npx',
    args: 'serve -s dist -l 3000',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
EOF

# Install serve globally if not installed
npm install -g serve

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save
pm2 startup

echo "✅ Smart Curtain deployed successfully!"
echo "🌐 Access your app at: http://your-server-ip:3000"
echo "📊 Monitor with: pm2 monit"
echo "🔧 For Apache2 setup: sudo cp nginx.conf /etc/apache2/sites-available/smart-curtain.conf"